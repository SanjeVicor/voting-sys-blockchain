<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Sistema de votos Blockchain</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Running the test](#tests)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

Este sistema de registro de votos, es un acercamiento a la aplicación de tecnologia blockchain en el proceso democratico.

Actualmente el sistema esta diseñado para un contrato "estatico", lo cual es conveniente debido a que no buscamos una alteración en el area de candidaturas.

A continuación, se mostrará una guia para la instalación del proyecto y sus dependencias correspondientes.

## 🏁 Getting Started <a name = "getting_started"></a>

Es necesario que sigas la guia, la cual excplica las dependencias necesarias para probar el proyecto, posiblemente te sirva para mejorar. Aporta a este mismo para ayudar a mejorar a los compañeros.

### Prerequisites

Truffle framework

```
npm install -g truffle
```

Metamask: extención para navegadores, será el "login" para las cuentas y poder votar

Ganache: La red blockchain de prueba

```
https://www.trufflesuite.com/ganache
```

### Installing

Debido a que esta aplicación es un proyecto con dependencias node, nos basta con usar el siguiente comando

```
npm install
```

## 🔧 Running the tests <a name = "tests"></a>

La aplicación tiene algunos unit test, usted es libre de agregar más, para correr estas pruebas unitarias, solo basta usar el siguiente comando.

```
truffle test
```

## 🎈 Usage <a name="usage"></a>

Durante el uso de pruebas del sistema, no use su cuenta real para probar, Ganache le ofrece 10 cuentas de prueba con suficientes fondos para realizar acciones.

## 🚀 Deployment <a name = "deployment"></a>

Esta aplicación esta diseñada para un uso en red local. Es necesario tener activo Ganache.

## ⛏️ Built Using <a name = "built_using"></a>

- [Ganache](https://www.trufflesuite.com/ganache) - Network
- [NodeJs](https://nodejs.org/en/) - Server Environment