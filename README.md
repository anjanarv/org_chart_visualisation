# Org Hierarchy

An Express web application to visually represent the reporting structure of an organization from JSON data.

## Pre requisites

- **Express.js**

            npm install express

- **Cytoscape**

            npm install cytoscape

- **Ajv**

            npm install ajv

- **Vis-network**

            npm install vis-network

* **Watchify**

            npm install watchify

* **Jest**
  npm install jest

## Test Data update

Navigate to **/public/data/** folder and update the json files

## Schema update

Navigate to **/public/data/** folder and update the json schema file with .schema.json extension

## Test

             npm run test

## Launch the app

              npm start

This internally starts watchify for bundling and executes server.js (npm watch | node server.js)
Access via http://localhost:5000

## Screenshots
![Image 1](https://github.com/anjanarv/org_chart_visualisation/blob/master/screenshots/MoreTestData.png)

![Image 2](https://github.com/anjanarv/org_chart_visualisation/blob/master/screenshots/Report.png)

![Image 3](https://github.com/anjanarv/org_chart_visualisation/blob/master/screenshots/TestDataGIven.png)

![Image 4](https://github.com/anjanarv/org_chart_visualisation/blob/master/screenshots/TestDataWithNoManagers.png)


