# project-t11-typingtest

It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills. 

Link to Deployment Instructions (lab06-part2-ops): 
=======
[Deployment Instructions](./docs/DEPLOY.md)

Members: 
=======
Jeffrey Chen, Jason Dunne, Sean Shanley, Zoey Zhou, Hirish Chandrasekaran

Tech Stack:
=======
Frontend: React
Backend: MongoDB, Flask

How to Deploy:
=======
To deploy the webapp we first run npm install, npm run build, (to build the static webpages) then deploy with flask:

export FLASK_APP=./backend/main.py
flask run

Then click on the link.


General Strategy: 
=======
Get our template up, look at preexisting react projects, modify accordingly. There is nothing wrong with modifying previously implemented code, it will give us more time to add more features down the line.


User Roles:
========
General User Trying to Learn How to Code, and remember syntax. Doesn't need permission to any data except his/her own. Can log in through his/her ucsb account and save progress. Our app provides typing practice for difficult lines of code and helps with syntax memorization and also explains what code blocks do so helps with pattern recognition.

User Roles:
========
One unit test was already implemented, to see it look at project-t11-typingtest/src/utils/button/.
