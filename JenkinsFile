pipeline {
    agent any
    environment {
        PATH = "/opt/apache-maven-3.9.3/bin:$PATH"
    }

    stages {
        stage('continous download_chat') {
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
