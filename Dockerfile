# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Set proper permissions for node_modules
RUN chown -R node:node /app && \
    chmod -R 755 /app/node_modules/.bin

# Switch to non-root user
USER node

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5000
EXPOSE 5000

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 