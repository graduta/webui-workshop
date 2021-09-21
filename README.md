# WebUI-Workshop 2020

- [WebUI-Workshop 2020](#webui-workshop-2020)
- [Overview](#overview)
- [Local Setup](#local-setup)
    - [NodeJS & NPM](#nodejs--npm)
    - [IDE](#ide)
- [Build a project with WebUI - Framework](#build-a-project-with-webui---framework)
  - [1. Intro](#1-intro)
  - [2. Setting up the project template locally](#2-setting-up-the-project-template-locally)
  - [3. Front-End Exercises](#3-front-end-exercises)
  - [4. Back-End Exercises](#4-back-end-exercises)
  - [5. Development Process](#5-development-process)
- [References](#references)

# Overview

The purpose of this repository is to provide training material and step by step instructions. The workshop will be split in 2 categories (Backend & Frontend) over the course of 2 days. 

At the end of the workshop we would have successfully built a web project based on [@aliceo2/web-ui](https://www.npmjs.com/package/@aliceo2/web-ui).

# Local Setup

### NodeJS & NPM
[NodeJS](https://nodejs.org/en/) required version `14`. </br>
Downloading the package from nodejs website will install both NodeJS and NPM.

Check installation was successful: 
* `node -v`
* `npm -v`

### IDE
Install an editor of your choice. For this workshop, presenters will be using [Visual Studio Code](https://code.visualstudio.com).

# Build a project with WebUI - Framework

## 1. Intro
The next generation of AliceO2 applications will be built as web projects based on a common UI Framework [@aliceo2/web-ui](https://www.npmjs.com/package/@aliceo2/web-ui)

All applications are built as SPAs (Single Page Applications). A single-page application is a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server.

In order to do that, it was decided to make use of Hyperscript and its capabilities of building virtual nodes. [MVC](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/template-engine.md)

*  Examples on how to build [Components](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/components.md).

* [Scaling your application](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/scale-app.md)

* Set of [CSS](https://aliceo2group.github.io/WebUi/Framework/docs/reference/frontend-css.html) Components built in accordance with ALICE Standards. 

## 2. Setting up the project template locally

1. Clone the repository via HTTPS/SSH (https://github.com/graduta/webui-workshop)
2. Go to the directory of the project: `cd webui-workshop`
3. Create your own branch: `git checkout -b <your-branch-name>`
4. Install the project dependencies via: `npm ci`
5. Copy the configuration file: `cp config-default.js config.js`
6. Run: `node index.js`

Now you should have a running HTTP server hosted on `localhost:8080`.

## 3. [Front-End Exercises](docs/WORKSHOP_FRONTEND.md)
## 4. [Back-End Exercises](docs/WORKSHOP_BACKEND.md)
## 5. [Development Process](docs/DEVELOPMENT_PROCESS.md)

# References
* Solution on branch `solution/frontend-backend-development`: https://github.com/graduta/webui-workshop/tree/solution/frontend-backend-development

`AliceO2/WebUI-Framework`
* NPM module - [@aliceo2/web-ui](https://www.npmjs.com/package/@aliceo2/web-ui)
* GitHub Repository - [WebUI](https://github.com/AliceO2Group/WebUi)
* [Documentation](https://github.com/AliceO2Group/WebUi/tree/dev/Framework)
* JIRA Board - [OGUI](https://alice.its.cern.ch/jira/projects/OGUI/summary)
