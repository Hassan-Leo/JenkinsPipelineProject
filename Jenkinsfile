pipeline {
    agent any

    stages {
        stage ('Build Stage') {
            steps   {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') 
                    sh 'npm config ls'
            }
        }
        stage ('Testing Stage') {
            steps   {
                sh "npm install --dev"
                sh "npm run test"
            }
        }
    }
}