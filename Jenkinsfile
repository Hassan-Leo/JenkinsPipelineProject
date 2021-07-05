pipeline {
    agent any

    stages {
        stage ('Build Stage') {

            steps {
               
                    sh 'npm install'
             
            }
        }

        stage ('Testing Stage') {

            steps {
              
                    sh 'npm run test test.js'
              
            }
        }


    }
}