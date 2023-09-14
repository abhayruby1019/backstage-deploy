pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
metadata:
  labels:
    label: jenkins-backstagePipeline
spec:
  serviceAccountName: jenkins
  containers:
    - name: node
      image: "node:16-bullseye"
      command: ["cat"]
      tty: true
      privileged: true
      resourceRequestCpu: "400m"
      resourceRequestMemory: "1Gi"
      resourceLimitCpu: "1"
      resourceLimitMemory: "1Gi"
    - name: docker
      image: docker
      command: ["cat"]
      tty: true
      privileged: true
      resourceRequestCpu: "400m"
      resourceRequestMemory: "512Mi"
      resourceLimitCpu: "1"
      resourceLimitMemory: "1024Mi"
      volumeMounts:
        - name: dockersock
          mountPath: "/var/run/docker.sock"
    - name: kubectl
      image: "alpine/k8s:1.26.0"
      command: ["cat"]
      tty: true
      privileged: true
      resourceRequestCpu: "400m"
      resourceRequestMemory: "512Mi"
      resourceLimitCpu: "1"
      resourceLimitMemory: "1024Mi"
  volumes:
    - name: dockersock
      hostPath:
        path: "/var/run/docker.sock"
'''
        }
    }
    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage('Build App') {
            steps {
                container('node') {
                    sh 'yarn install --frozen-lockfile'
                    sh 'yarn tsc'
                    sh 'yarn build:backend'
                }
            }
        }
        stage('Docker build') {
            steps {
                container('docker') {
                    sh 'DOCKER_BUILDKIT=1 docker image build . -f packages/backend/Dockerfile --tag backstage'
                }
            }
        }
        stage('Deploy') {
            steps {
                container('kubectl') {
                    withCredentials([string(credentialsId: 'github-token', variable: 'token')]) {
                        sh "cat ./deploy/k8s.yaml | sed -e 's/{{GITHUB_TOKEN}}/$token/g' | kubectl apply -f -"
                    }
                }
            }
        }
    }
}
