// 하버,,,
// pipeline {
//     agent any
//     environment{
//         HARBOR_REGISTRY_CREDENTIALS = credentials('harbor') // Harbor 저장소 인증 정보
//     }
//     stages {
//         stage('Clone Repo') {
//             steps {
//                 checkout scm
//                 sh 'ls *'
//             }
//         }
//         stage('Build Image') {
//             steps {
// 		            sh '/etc/init.d/docker start'
// 	                sh 'docker build -t onlyvictoryimg:$BUILD_NUMBER .'
//             }
//         }
//         stage('Docker Login') {
//             steps {
//                 sh 'echo $HARBOR_REGISTRY_CREDENTIALS_PSW | docker login http://20.228.182.157:80 -u $HARBOR_REGISTRY_CREDENTIALS_USR --password-stdin'                
//             }
//         }
//         stage('Docker Push') {
//             steps {
//                 sh 'docker tag onlyvictoryimg:$BUILD_NUMBER 20.228.182.157:80/onlyvictory/onlyvictoryimg:$BUILD_NUMBER'
//                 sh 'docker push 20.228.182.157:80/onlyvictory/onlyvictoryimg:$BUILD_NUMBER'
//             }
//         }
//     }

//     post {
//         always {
//             sh 'docker logout http://20.228.182.157'
//         }
//     }
// }



pipeline {
    agent any
    environment{
        DOCKERHUB_REGISTRY_CREDENTIALS = credentials('dockerhub') // dockerhub 저장소 인증 정보
        repository = "yihoeun/onlyvictory"
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
		            sh '/etc/init.d/docker start'
	                sh 'docker build -t onlyvictoryimg .'
            }
        }
        stage('Docker Login') {
            steps {
                // sh 'echo $HARBOR_REGISTRY_CREDENTIALS_PSW | docker login http://20.228.182.157:80 -u $HARBOR_REGISTRY_CREDENTIALS_USR --password-stdin'       
                sh 'echo $DOCKERHUB_REGISTRY_CREDENTIALS_PSW | docker login -u $DOCKERHUB_REGISTRY_CREDENTIALS_USR --password-stdin' // docker hub 로그인         
            }
        }
        stage('Docker Push') {
            steps {
                // sh 'docker tag onlyvictoryimg:$BUILD_NUMBER 20.228.182.157:80/onlyvictory/onlyvictoryimg:$BUILD_NUMBER'
                // sh 'docker push 20.228.182.157:80/onlyvictory/onlyvictoryimg:$BUILD_NUMBER'
                sh 'docker tag onlyvictoryimg onlyvictoryimg'
                sh 'docker push onlyvictory/onlyvictoryimg:0.01'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
