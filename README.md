# Node.js Application to perform CRUD Operations



This application uses MongoDB Database to demonstrate the operations of CRUD(Create,Read, ,Update and Delete) using REST APIs on database using Node.js runtime. Postman is used as a client to perform GET, PUT, POST and DELETE operations on database.


# Application Requirements

  - Node.js runtime
  - NoSQL Database (Preferably MongoDB or MongoDB Atlas)
  - Postman (To test the APIs)
  - Code Editor
  - Heroku (to deploy application on cloud)  

# Step by Step Explanation
1-Install Node.js runtime
2-Install dependencies in ==package.json== file
```sh
$ npm install mongodb
$ npm install mongoose
$ npm install dotenv
```
Change default script to main file i.e, ==index.js==
```sh
"start":"node index.js"
```
3-Create ==.env== file to store connection string of Database.
4-Create ==.gitignore== file to store your files containing sensitive information. 
5-Declare a port number to run this application locally.

6-Create a resource file ==(methods.js)== containing GET, PUT, PATCH and DELETE methods.
7-Create a new file ==(routes.js)== to store Database schema.
8-Run application locally using the command:
```sh
$ node index.js
```
9-Test your APIs from Postman client.
```sh
https://localhost:9000/methods
```
Use the above command to GET, PUT, PATCH and DELETE data from database.
10-Now push this application to github repository using the following commands:
```sh
$ git init
$ git remote add origin https://github.com/ManjinderS-Hexaware/FirstApp
$ git add .
$ git commit -m "App commited"
$ git push origin master
```
11-Deploy this application on Heroku
12- Application server is started on a random port on the cloud using the below mentioned statement
```sh
const port = process.env.PORT || 9000
```
If deploying this app on local system then it will use port number 9000, whereas, while deploying it on cloud it will start on random port assigned by cloud instance.

### Deploying application on cloud
1-Click New on the top right corner and select “Create new app” and give it a name.
2-Once your app is created then open dashboard of it and inside dashboard open ==Deploy tab==.
3-Select Github as deployment method and select "connect to github" option and provide your github repository.
4-Once it gets connected to your github repository, enable "Automatic Deploy" option.
5- Now we need to tell Heroku that our app is Node.js app so for that open ==Settings tab==.
6-Under the settings tab locate Buildpacks and click "Add buildpack".
7-Select ==nodejs== from options and save it.
8-Now locate"Reveal Config Vars" under "Settings tab" and give ==key== and ==value== of your database connection string.  
9-Go back to "Deploy tab" and select ==Deploy Branch==.



License
----

Public

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
