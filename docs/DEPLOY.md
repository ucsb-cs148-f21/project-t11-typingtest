Starting with "read only" access of our repo to deploy our app the following steps must be followed:



(1) Cloning the Repository 
* You must create a local copy of our code
* For local testing, replace the .envSAMPLE with a .env with the single parameter: REACT_AUTH_APP_CLIENT_ID = ____
* You must replace the underscore with the correct authentication code


(2) Getting authentication code
* Go to console.google.cloud.com
* Go to select project > create a new project
* Go to Oauthapptype > external
* Set app information > add email, name of app
* Add developer contact information
* Set authorized javascript origins : localhost:3000
* Creat OAuthClientID get the ID and set it above



(3) Delpying to Heroku
* If you don’t have an account with Heroku, you can open a free one
* Click New on the top right corner and select “Create new app”
* Open the settings tab and scroll to the "Config Vars" section
* Create a new Config Var, with Key=REACT_APP_AUTH_CLIENT_ID and Value=Authentication Code
* Open Deploy tab and scroll to the “Deployment method” section
* Select GitHub as the method
* search for your GitHub repository and click connect
* Open the Settings tab and locate Buildpacks and click “Add buildpack”
* Select python
* You need to also look into authentication
* Set the authentication variable to REACT_AUTH_APP_CLIENT_ID
* App should run!

