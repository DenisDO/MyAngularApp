FROM nginx

EXPOSE 90

WORKDIR /usr/application

COPY . .
COPY /users_app.com.conf /etc/nginx/conf.d/default.conf

RUN apt-get update \
    && apt-get install -y \
    build-essential libpng-dev \
    curl \
    cowsay \
    && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
    && apt-get install -y nodejs \
    && ln -s /usr/games/cowsay /usr/bin/cowsay

RUN npm install \
    && npm install cross-env

RUN npm run build -- --output-path=./build

CMD cowsay "Everything is ready, my Lord!" \
    && nginx -g "daemon off;"