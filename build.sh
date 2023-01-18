eval $(minikube docker-env)
docker build -t staff-service:2 -f services/Staff/Dockerfile services/Staff
docker build -t parking-service:2 -f services/Parking/Dockerfile services/Parking
docker build -t rooms-service:2 -f services/Rooms/Dockerfile services/Rooms
docker build -t guests-service:2 -f services/Guests/Dockerfile services/Guests
docker build -t orders-service:2 -f services/Orders/Dockerfile services/Orders
docker build -t frontend:2 -f front/Dockerfile front

docker build -t staff-migrations:2 -f services/Staff/Dockerfile.migrations services/Staff
docker build -t parking-migrations:2 -f services/Parking/Dockerfile.migrations services/Parking
docker build -t rooms-migrations:2 -f services/Rooms/Dockerfile.migrations services/Rooms
docker build -t guests-migrations:2 -f services/Guests/Dockerfile.migrations services/Guests
docker build -t orders-migrations:2 -f services/Orders/Dockerfile.migrations services/Orders