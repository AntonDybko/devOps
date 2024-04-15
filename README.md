In this project I developed a simple express api, wrote Dockerfile to make an image of that api. I used helm chart of PostgreSQL to configure database and some yaml files to create a minikube Kubernetes cluster hosting 3 replicas of API and postgress database. Also there is a Jenkinsfile to push new image of API to Dockerhub and run tests.


P.S. Unfortunately jenkins server which I used during course was closed after the end of course. 
So I just mirrored folders.
