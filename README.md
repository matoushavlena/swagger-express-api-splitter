#swagger-express-api-splitter

This is an example of a code that allows you to split your long swagger.yaml file into multiple yaml files following the API pattern of your app. For each of the REST API endpoint, you keep 3 files:
* JS implementation - for example `/api/controllers/UsersController.js`
* Swagger model definition - for example `/api/definitions/UsersDefinition.yaml`
* Swagger path description - for example `/api/paths/UsersPath.yaml`

Then we use the gulp script, that watches for changes in these files and automatically compiles the swagger.yaml file which is consumed by SwaggerExpress.

#Dependencies
* swagger-express-mw
* swagger-tools
* gulp

#Demo
* `npm install`
* `gulp`
* `node app.js`

After that, you can open http://localhost:3000/docs/ and you should see your Swagger documentation.

![alt Swagger Docs](https://raw.github.com/matoushavlena/swagger-express-api-splitter/master/screenshots/swagger-docs.png)

![alt Folder Structure](https://raw.github.com/matoushavlena/swagger-express-api-splitter/master/screenshots/folder-structure.png)
