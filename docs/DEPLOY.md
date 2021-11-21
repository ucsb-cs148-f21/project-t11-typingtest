Starting with "read only" access of our repo to deploy our app the following steps must be followed:



(1) Cloning the Repository 
* You must create a local copy of our code
* Run "npm install"
* For local testing, replace the .envSAMPLE with a .env with the single parameter in the root of the directory: REACT_APP_AUTH_CLIENT_ID = ____
* You must replace the underscore with the correct authentication code


(2) Getting authentication code
* Go to console.cloud.google.com
* Go to select project > create a new project
* Go to APIs&Services > Oauth constent screen > select external
* Set app information > add email, name of app
* Add developer contact information
* Go to credentials > Create OAuthClientID > select Web application and give it a name
* Set authorized javascript origins and authorized redirect URIs to : http://localhost:3000 and https://localhost:3000



(2.5) Optional: Run Locally
* Go to the root of the directory and run "npm run build"
* Run "pip install Flask", "pip install mongoengine", and "pip install pymongo[tls]" (some users may need to preceed these commands with "python -m")
* Get all the remaining packages required to run the project with flask if not already installed (specifics in requirements.txt)
* Run "export FLASK_APP=main.py flask run"
* Run "flask run" (may need to preceed with "python -m")
* Go to the address given to you, add the URL to authorized javascript origins and authorized redirect URIs in the OAuth > API&Settings > Credentials settings

(3) Deploying to Heroku
* If you don’t have an account with Heroku, you can open a free one
* Click New on the top right corner and select “Create new app”
* Open the settings tab and scroll to the "Config Vars" section
* Create a new Config Var, with Key=REACT_APP_AUTH_CLIENT_ID and Value=Authentication Code
* Open Deploy tab and scroll to the “Deployment method” section
* Select GitHub as the method
* search for your GitHub repository and click connect (fork the repo to make your own repo to deploy)
* Clickk Manual Deploy
* Open the Settings tab and locate Buildpacks and click “Add buildpack”
* Select python
* You need to also look into authentication
* Set the authentication variable to REACT_AUTH_APP_CLIENT_ID
* Make sure to add the heroku URL to the authorized javascript origins and authorized redirect URIs in the OAuth > API&Settings > Credentials settings
* App should run!

