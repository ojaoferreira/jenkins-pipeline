pipeline {
  agent any
  stages {
    stage('build') {
      when {
        branch 'develop'
      }
      environment {

      }
      steps {
        /* insert declarative step here */
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
      steps {
        /* insert declarative step here */
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