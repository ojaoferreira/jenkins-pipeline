pipeline {
  agent any
  environment {
    APP_NAME = "jenkins-pipeline"
    DOCKER_DRIVER = "overlay2"
    DOCKER_TLS_CERTDIR = ""
    DOCKER_HOST = "tcp://localhost:2375"
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
      when {
        branch 'develop'
      }
      environment {
        DOCKER_REGISTRY = "966432988823.dkr.ecr.us-east-1.amazonaws.com"
        DOCKER_PASS = credentials('ecr-staging-credential')
      }
      steps {
        /* insert declarative step here */
        sh 'echo $DOCKER_PASS | docker login -u AWS --password-stdin $DOCKER_REGISTRY'
        sh 'docker build -t $DOCKER_REGISTRY/$APP_NAME:$GIT_BRANCH .'
        sh 'docker push $DOCKER_REGISTRY/$APP_NAME:$GIT_BRANCH'
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