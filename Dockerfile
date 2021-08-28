FROM nginx:alpine

# Install node
RUN apk update && apk add --no-cache npm

# Copy all files over to www
COPY . /usr/share/nginx/html

# Preinstall all tools
RUN rm -rf /usr/share/nginx/html/node_modules
RUN cd /usr/share/nginx/html && npm install