//https://www.google.com/search?q=javascript+this+is+undefined&sxsrf=ALeKk00BDL53N6jM7sQQHaHdBSiGfJoW7g%3A1624416552543&source=hp&ei=KKHSYP35HZ-70PEP2fK22Ac&iflsig=AINFCbYAAAAAYNKvODyhNzV-UQPPJaekGLJHBjjjdHF6&oq=javascript+this+is+&gs_lcp=Cgdnd3Mtd2l6EAMYADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgjECc6BAgAEEM6BQguELEDOgoIABCHAhCxAxAUOgUIABCxAzoHCAAQhwIQFDoCCC5Q3gJYwTNg4DtoAHAAeACAAX6IAcQPkgEENS4xNJgBAKABAaoBB2d3cy13aXo&sclient=gws-wiz
const Web3 = require('web3');
class App {

  constructor() {
    this.contracts = {}
    this.account = '0x0'
    this.voted = false
    this.web3Provider = null
    this.initWeb3()
  }

  initWeb3 = () => {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      this.web3Provider = web3.currentProvider;
      this.web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      this. web3 = new Web3(this.web3Provider);
    }
    return this.initContract()
  }

  initContract = () => {
    $.getJSON("Election.json", (election) => {
      this.contracts.Election = TruffleContract(election)
      this.contracts.Election.setProvider(this.web3Provider)
      this.listenForEvents()

      return this.render()
    })
  }

  listenForEvents = () => {
    this.contracts.Election.deployed().then((instance) => {
      instance.votedEvent({}, {
        fromBlock: 0,
        toBlock: 'latest'
      }).watch(function(error, event) {
        console.log("event triggered", event)
      });
    });
  }

  fetchCandidatesCounts = async () => {
    const instance  = await this.contracts.Election.deployed()
    const count = await instance.candidatesCount()
    return count
  }

  fetchCandidate = async (id) => {
    const instance  = await this.contracts.Election.deployed()
    const candidate = await instance.candidates(id)
    return candidate
  }
  
  hasVoted = async () => {
    const instance  = await this.contracts.Election.deployed()
    this.voted = await instance.voters(this.account)
  }

  render = async () => {
    let loader = $("#loader")
    let content = $("#content")
    const message = $("#messageHasVoted")

    loader.show()
    message.hide()
    content.hide()

    this.web3.eth.getCoinbase((err, account) => {
      console.log(err);
      if (err === null) {
        this.account = account;
        $("#accountAddress").html("Tu cuenta es : " + account);
      }
    });
    
    const candidatesCount = await this.fetchCandidatesCounts()
    
 
    const candidatesResults = $("#content")
    candidatesResults.empty()
    
    for (let idx = 0; idx < candidatesCount; idx++) {
      const candidate = await this.fetchCandidate(idx)
      const id =  parseInt(candidate[0]);
      const name = candidate[1];
      const group = candidate[2];
      const state = candidate[3];
      const votes = candidate[4];
      const image = candidate[5];
      const speech = candidate[6];
      const proposals = candidate[7].split(',');
      
      let proposalList = ""
      for (let idx = 0; idx < proposals.length; idx++) {
        const element = proposals[idx];
        proposalList += `<li class="list-group-item">${element}</li>`
      }

      // Render candidate Result
      let candidateTemplate = `
      <div class="card" style="width: 18rem;">

        <img src="${image}" class="card-img-top" alt="..." style="margin-top:10px;">

        <div class="card-body" >
          <h3 class="card-title">${name} - ${state}</h3>
          <h5 class="card-title">Partido : ${group}</h5>
          <h5 class="card-title">Votos a favor : ${votes}</h5>
          <p class="card-text">${speech}</p>
        </div>

        <ul class="list-group list-group-flush">
          ${proposalList}
        </ul>

        <div class="card-body" style="text-align:center;">
          <a
            class="btn btn-primary formVote"
            id=${id}
          >
            Votar
          </a>
        </div>

      </div>
      `;
      candidatesResults.append(candidateTemplate);
    }
    

    try {
      await this.hasVoted()
      if (this.voted) {
        $('a').hide();
        message.show()
      }
    } catch (error) {
      console.warn(error);
    }
    
    loader.hide();
    content.show();

    
    const formVote = document.querySelectorAll(".formVote")
    for (let idx = 0; idx < formVote.length; idx++) {
      const element = formVote[idx];
      element.addEventListener("click", (e) => {
        this.castVote(e.target.id)
      })
    }
  }

  castVote = (candidateId) => {
    this.contracts.Election.deployed().then((instance) => {
      return instance.vote(candidateId, { from: this.account });
    }).then(function(result) {
      // Wait for votes to update
      $("#content").hide();
      $("#loader").show();
      window.location.reload()
    }).catch(function(err) {
      console.error(err);
    });
  }
}

$(function() {
  $(window).load(function() {
    const app = new App()
    const formVote = document.querySelectorAll(".formVote")
    formVote.addEventListener("click", (e) => {
      e.preventDefault()
      // App.castVote()
      return false
    })
  });
});