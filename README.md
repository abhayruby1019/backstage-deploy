# Setup

You need bunch of dependent services/apps to run and develop locally. 
Most of them are run using k8s or docker-compose. 

Prefer docker compose for faster iteration, if you don't need/develop k8s based features, else prefer local k8s cluster.
To run local k8s cluster using colima (alternative for Docker for Mac):

```sh
colima start --cpu 4 --memory 8 --disk 60 --with-kubernetes
```

# [Backstage](https://backstage.io)

To start the app, run:

```sh
yarn install
yarn dev
```

For Jenkins/Prometheus/k8s integration, use below commands to port forward if they are running in k8s, else use `docker-compose up`

```sh
kubectl port-forward service/jenkins 8080:8080
kubectl port-forward service/prometheus-server 9090 
```

# To test on local k8s

```sh
yarn build:backend
docker image build . -f packages/backend/Dockerfile --tag backstage
yarn deploy-local-k8s
# kubectl port-forward service/backstage 8095:80
# open http://localhost:8095 to view backstage
# or use ingress open https://backstage.localhost.in
# you need to map k8s node ip to dns in /etc/hosts file
```