# WebUI-Workshop 2024

- [WebUI-Workshop 2024](#webui-workshop-2024)
- [Overview](#overview)
- [Tutorials to follow before workshop day](#tutorials-to-follow-before-workshop-day)
- [Local Setup](#local-setup)
    - [NodeJS \& NPM](#nodejs--npm)
    - [IDE](#ide)
- [Build a project with WebUI - Framework](#build-a-project-with-webui---framework)
  - [0. Intro](#0-intro)
  - [1. Introductory NodeJS Exercises](#1-introductory-nodejs-exercises)
  - [2. Setting up the project template locally](#2-setting-up-the-project-template-locally)
  - [3. Front-End Exercises](#3-front-end-exercises)
  - [4. Back-End Exercises](#4-back-end-exercises)
  - [5. Development Process](#5-development-process)
  - [References](#references)

# Overview

The purpose of this repository is to provide training material and step by step instructions for new joiners that are to work on ALICE GUIs. The workshop will be split in 3 main categories over the course of 2-3 days. It also gives an introduction to all ALICE projects (Bookkeeping, Control, InfoLogger, Quality Control, RCT).

At the end of the workshop the students should have successfully built a web project based on [@aliceo2/web-ui](https://www.npmjs.com/package/@aliceo2/web-ui).

# Tutorials to follow before workshop day
The following tutorials are considered to be useful to skim through or complete before the workshop days.
- NodeJS: https://nodejs.dev/en/learn/
- ExpressJS: https://www.tutorialspoint.com/expressjs/index.htm
- gRPC for NodeJS: https://grpc.io/docs/languages/node/
- Sequalize for Databases: https://sequelize.org/docs/v6/getting-started/
- MithrilJS: https://mithril.js.org/
- Docker: https://www.docker.com/101-tutorial/ 
- CSS Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

# Local Setup

### NodeJS & NPM
[NodeJS](https://nodejs.org/en/) required version `>=20`. </br>
Downloading the package from nodejs website will install both NodeJS and NPM.

Check installation was successful: 
* `node -v`
* `npm -v`

### IDE
Install an editor of your choice. For this workshop, presenters will be using [Visual Studio Code](https://code.visualstudio.com).

# Build a project with WebUI - Framework

## 0. Intro
The AliceO2 user applications are built as web projects based on a common UI Framework [@aliceo2/web-ui](https://www.npmjs.com/package/@aliceo2/web-ui) which provides functionality for both front-end and back-end.

All applications are built as SPAs (Single Page Applications). 

A single-page application is a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server. In order to do that, it was decided to make use of MithrilJS and its capabilities of building virtual nodes. [MVC](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/template-engine.md)

* Examples on how to build [Components](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/components.md).
* [Scaling your application](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/scale-app.md)
* Set of [CSS](https://aliceo2group.github.io/WebUi/Framework/docs/reference/frontend-css.html) Components built in accordance with ALICE Standards. 

Before starting the exercises, fork the repository and clone your fork locally.

## 1. [Introductory NodeJS Exercises](./docs/INTRODUCTORY_EXERCISES.md)
## 2. [Setting up the project template locally](./docs/SETUP_WEBUI_TEMPLATE.md)
## 3. [Front-End Exercises](docs/WORKSHOP_FRONTEND.md)
## 4. [Back-End Exercises](docs/WORKSHOP_BACKEND.md)
## 5. [Development Process](docs/DEVELOPMENT_PROCESS.md)

## References
* [Documentation WebUI](https://github.com/AliceO2Group/WebUi/tree/dev/Framework)
