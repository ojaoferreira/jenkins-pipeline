pipeline {
  agent any
  environment {
    APP_NAME = "jenkins-pipeline"
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
      when {
        branch 'develop'
      }
      environment {
        DOCKER_REGISTRY = "https://966432988823.dkr.ecr.us-east-1.amazonaws.com"
      }
      steps {
        /* insert declarative step here */
        // sh 'docker --version'
        // sh 'echo -n $DOCKER_PASS | docker login -u AWS --password-stdin $DOCKER_REGISTRY'
        sh 'printenv'
        app = docker.build("jenkins-pipeline")
        docker.withRegistry($DOCKER_REGISTRY, 'ecr-staging-credential') {
          app.push('develop')
        }
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