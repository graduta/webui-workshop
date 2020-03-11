# Workshop: Front-End
In this chapter we will tackle how to create various components on the newly setup project.

- [Workshop: Front-End](#workshop-front-end)
  - [Title Changes](#title-changes)
  - [Add a new page: home](#add-a-new-page-home)
  - [Add a new page: about](#add-a-new-page-about)
  - [Make use of the new components in `view.js`.](#make-use-of-the-new-components-in-viewjs)
  - [Adding buttons](#adding-buttons)
  - [Create a new class file `Home.js`](#create-a-new-class-file-homejs)
  - [Create an new class file `About.js`](#create-an-new-class-file-aboutjs)
  - [Build a table in `aboutPage.js`](#build-a-table-in-aboutpagejs)
  - [Link pages between them](#link-pages-between-them)

## Title Changes
* Modify the title component so that is shows the current page location
* Modify the title class style

## Add a new page: home
* Create a new folder called `home` under `public`
* Create a new `homePage.js` file and use `export default content`

## Add a new page: about
* Create a new folder called `about` under `public`
* Create a new `aboutPage.js` file and use `export default content`;

## Make use of the new components in `view.js`. 
* Import content as aboutContent into view.js
* Import content as homeContent into view.js
* Modify content of view.js by using `switchcase` to modify content based on current page location

## Adding buttons
* Add a button in the `home` page which purpose will be to take the user to `about` page:
  * This should have title "About"
  * Should use one an icon: `info`
  * Should print to the console its purpose

* Add a button in the `home` page to get the username:
  * Should use one `iconPerson` icon
  * Should print to the console its purpose
  
* Add a button in the `about` page which purpose will be to take the user to `home` page:
  * This should have title "Home"
  * Should use an icon
  * Should print to the console its purpose

* Add a button in the `about` page which purpose will be to request data about the application:
  * Add a title to it
  * Should use an icon
  * Should print to the console its purpose
  
## Create a new class file `Home.js`
* Class should have a constructor
  * Constructor should initialize super() and userName
* Write a `getUserName` method which will return the userName and will be used by the "User" button

* Add a label component in the home page which should use `getUserName` method on pressing the button with this purpose
* Press button. Was the label updated?
* Observable model - missing `this.notify()`

## Create an new class file `About.js`
* Class should have a constructor
  * Constructor should 
    * initialize super()
    * an empty JSON variable details in which data will be placed
    * a requestedTimes variable
  * Add a method to `getDetails` which will set the JSON variable and increment the requestedTimes variable

##  Build a table in `aboutPage.js`
* The table should be filled with data from the `getDetails` method implemented earlier

## Link pages between them
Make use of [QueryRouter](https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/front-router.md)
* Add functionality to the 2 buttons (in home and about pages) to take the user from one page to the other
