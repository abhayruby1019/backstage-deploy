# Base image
FROM node:20-alpine3.17

# Create and set the working directory in the container
WORKDIR /src

# Copy the "dist" directory (compiled NestJS application) from your local machine to the container
COPY dist/ ./dist/
COPY node_modules ./node_modules/

# Expose the port that the application will run on
EXPOSE ${{values.port}}

# Start the server using the production build
CMD [ "node", "dist/main.js" ]


