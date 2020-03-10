# WebUI-Workshop 2020

- [WebUI-Workshop 2020](#webui-workshop-2020)
- [Overview](#overview)
- [Local Setup](#local-setup)
    - [NodeJS & NPM](#nodejs--npm)
    - [IDE](#ide)
- [Building a project with WebUI - Framework](#building-a-project-with-webui---framework)
  - [Setting up the project template locally](#setting-up-the-project-template-locally)

# Overview

The purpose of this repository is to provide training material and step by step instructions. The workshop will be split in 2 categories (Backend & Frontend) over the course of 2 days. 

At the end of the workshop we would have successfully build a web project based on @aliceo2/web-ui.

# Local Setup

Local Setup needs to be completed by the attendees before the start of the workshop.

### NodeJS & NPM
[NodeJS](https://nodejs.org/en/) minimum version `10.13.0`. 
Downloading the package from nodejs website will install both NodeJS and NPM.

Check installation was successful: 
* `node -v`
* `npm -v`

### IDE
Install an editor of your choice. For this workshop, presenters will use [Visual Studio Code](https://code.visualstudio.com).

# Building a project with WebUI - Framework

## Setting up the project template locally

1. Clone the repository via HTTPS/SSH (https://github.com/graduta/webui-workshop)
2. Go to the directory of the project: `cd webui-workshop`
3. Create your own branch: `git checkout -b <your-branch-name>`
4. Install its dependencies via: `npm install`
5. Copy the configuration file: `cp config-default.js config.js`
6. Run: `nodejs index.js`

Now you should have a running HTTP server hosted on `localhost:8080`.
