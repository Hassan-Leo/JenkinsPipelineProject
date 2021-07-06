pipeline {
    agent any

    stages {
        stage ('Build Stage') {
            steps   {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') 
                bat 'npm config ls'
            }
        }
        stage ('Testing Stage') {
            steps   {
                bat "npm install --dev"
                bat "npm run test"
            }
        }
    }
}