pipeline {
    agent any
    environment{
        HARBOR_REGISTRY_CREDENTIALS = credentials('harbor') // Harbor 저장소 인증 정보
    }
    stages {
        stage('Clone Repo') {
            steps {
                checkout scm
                sh 'ls *'
            }
        }
        stage('Build Image') {
            steps {
		            // sh '/etc/init.d/docker start'
	                sh 'docker build -t OnlyVictoryImg:$BUILD_NUMBER .'
            }
        }
        stage('Docker Login') {
            steps {
                sh 'echo $HARBOR_REGISTRY_CREDENTIALS_PSW | docker login http://20.228.182.157:80 -u $HARBOR_REGISTRY_CREDENTIALS_USR --password-stdin'                
            }
        }
        stage('Docker Push') {
            steps {
                sh 'docker push http://20.228.182.157/onlyvictory/OnlyVictoryImg:$BUILD_NUMBER'
            }
        }
    }
    post {
        always {
            sh 'docker logout http://20.228.182.157'
        }
    }
}
