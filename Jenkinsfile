pipeline {
    agent any

    stages {
        stage ('Build Stage') {
            steps   {
                    bat "npm install"
            }
        }
        stage ('Testing Stage') {
            steps   {
                    bat "npm run test"
            }
        }
    }
}