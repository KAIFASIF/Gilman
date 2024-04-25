# FROM node:18-alpine as BUILD_IMAGE
# WORKDIR /app/react-app
# COPY package.json .
# RUN npm install
# COPY  . .
# RUN npm run build

# FROM node:18-alpine as PRODUCTION_IMAGE
# WORKDIR /app/react-app
# COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
# EXPOSE 8080
# COPY package.json .
# COPY vite.config.ts .
# RUN npm install typescript
# EXPOSE 8080
# CMD [ "npm",  "run", "preview"]


# Use a smaller Node.js image as base
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install all packages
RUN npm install

# Copy the rest of the application
COPY . .

# Finally, build our project
RUN npm run build

# Use an even smaller Node.js image for production
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app

# Here we are copying the /app/react-app/dist/ folder from BUILD_IMAGE
# When we run npm run build, Vite will generate dist directory that contains
# our build files
COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
EXPOSE 8080

# Copy package.json and vite.config.ts
COPY package.json .
COPY vite.config.ts .

# Install TypeScript
RUN npm install typescript

EXPOSE 8080

# To run npm command as : npm run preview
CMD [ "npm",  "run", "preview"]
