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

## 馃摑 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Running the test](#tests)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)

## 馃 About <a name = "about"></a>

Este sistema de registro de votos, es un acercamiento a la aplicaci贸n de tecnologia blockchain en el proceso democratico.

Actualmente el sistema esta dise帽ado para un contrato "estatico", lo cual es conveniente debido a que no buscamos una alteraci贸n en el area de candidaturas.

A continuaci贸n, se mostrar谩 una guia para la instalaci贸n del proyecto y sus dependencias correspondientes.

## 馃弫 Getting Started <a name = "getting_started"></a>

Es necesario que sigas la guia, la cual excplica las dependencias necesarias para probar el proyecto, posiblemente te sirva para mejorar. Aporta a este mismo para ayudar a mejorar a los compa帽eros.

### Prerequisites

Truffle framework

```
npm install -g truffle
```

Metamask: extenci贸n para navegadores, ser谩 el "login" para las cuentas y poder votar

Ganache: La red blockchain de prueba

```
https://www.trufflesuite.com/ganache
```

### Installing

Debido a que esta aplicaci贸n es un proyecto con dependencias node, nos basta con usar el siguiente comando

```
npm install
```

Finalmente puedes correr el proyecto usando 

```
npm run dev
```

Si requiere reiniciar la red o contrato, corra el siguiente comando

```
truffle migrate --reset
```
## 馃敡 Running the tests <a name = "tests"></a>

La aplicaci贸n tiene algunos unit test, usted es libre de agregar m谩s, para correr estas pruebas unitarias, solo basta usar el siguiente comando.

```
truffle test
```

## 馃巿 Usage <a name="usage"></a>

Durante el uso de pruebas del sistema, no use su cuenta real para probar, Ganache le ofrece 10 cuentas de prueba con suficientes fondos para realizar acciones.

## 馃殌 Deployment <a name = "deployment"></a>

Esta aplicaci贸n esta dise帽ada para un uso en red local. Es necesario tener activo Ganache.

## 鉀忥笍 Built Using <a name = "built_using"></a>

- [Ganache](https://www.trufflesuite.com/ganache) - Network
- [NodeJs](https://nodejs.org/en/) - Server Environment