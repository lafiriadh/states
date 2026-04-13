FROM node:24-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Copy everything (except what's in .dockerignore)
COPY . .

# IMPORTANT: You must build inside the container because 
# .dockerignore is blocking your local 'dist' folder
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/src/main"]
