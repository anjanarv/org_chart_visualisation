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
            
- **Watchify**

            npm install watchify
 
 - **Jest**
        
            npm install jest
            
## Test Data update
Navigate to **/public/data/** folder and update the json files

## Schema update
Navigate to **/public/data/** folder and update the json schema file with .schema.json extension

## Test

             npm run test

## Launch the app

              npm start

(This internally starts watchify for bundling and executes server.js (npm watch | node server.js))



