pipeline {
  agent any
  environment {
    APP_NAME = "jenkins-pipeline"
    DOCKER_TLS_CERTDIR: ""
    // DOCKER_HOST = "tcp://172.17.0.2:2375"
  }
  stages {
    stage('build') {
      agent {
        docker {
          image 'node:12.18.2'
        }
      }
      when {
        branch 'develop'
      }
      steps {
        /* insert declarative step here */
        sh 'node --version'
        sh 'npm --version'
        echo 'stage build success'
      }
    }
    stage('test') {
      when {
        branch 'develop'
      }
      steps {
        /* insert declarative step here */
        echo 'stage test success'
      }
    }
    stage('quality') {
      when {
        branch 'develop'
      }
      steps {
        /* insert declarative step here */
        echo 'stage quality success'
      }
    }
    stage('docker') {
      agent {
        docker {
          image 'docker:19.03.12-dind'
        }
      }
      when {
        branch 'develop'
      }
      environment {
        DOCKER_REGISTRY = "https://966432988823.dkr.ecr.us-east-1.amazonaws.com"
        DOCKER_PASS = credentials('ecr-staging-credential')
      }
      steps {
        /* insert declarative step here */
        // sh 'docker --version'
        // sh 'echo -n $DOCKER_PASS | docker login -u AWS --password-stdin $DOCKER_REGISTRY'
        // $GIT_BRANCH
        sh 'printenv'
        echo 'stage docker success'
      }
    }
    stage('deploy') {
      when {
        branch 'develop'
      }
      steps {
        /* insert declarative step here */
        echo 'stage deploy success'
      }
    }
  }
}