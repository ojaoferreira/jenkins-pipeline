pipeline {
  agent any
  stages {
    stage('build') {
      when {
        branch 'develop'
      }
      environment {
        SSH_CREDS = "123456"
      }
      steps {
        /* insert declarative step here */
        echo 'stage build success - test #4'
        sh 'echo "$SSH_CREDS"'
      }
    }
    // stage('test') {
    //   when {
    //     branch 'develop'
    //   }
    //   steps {
    //     /* insert declarative step here */
    //     echo 'stage test success'
    //   }
    // }
    // stage('quality') {
    //   when {
    //     branch 'master'
    //   }
    //   steps {
    //     /* insert declarative step here */
    //     echo 'stage quality success'
    //   }
    // }
    // stage('docker') {
    //   when {
    //     branch 'develop'
    //   }
    //   steps {
    //     /* insert declarative step here */
    //     echo 'stage docker success'
    //   }
    // }
    // stage('deploy') {
    //   when {
    //     branch 'master'
    //   }
    //   steps {
    //     /* insert declarative step here */
    //     echo 'stage deploy success'
    //   }
    // }
  }
}