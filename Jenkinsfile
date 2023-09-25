pipeline {
    agent any
    environment {
        PATH = "/opt/maven/maven-3.9.4/bin:$PATH"
    }

    stages {
        stage('continous download_audio') {
            steps {
                git 'https://github.com/harsha2723/hello-world.git'
            }
        }
        stage('build') {
            steps {
                sh 'mvn clean install'
            }
        }
    }
}
