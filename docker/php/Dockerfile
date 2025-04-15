FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y software-properties-common curl git unzip zip && \
    add-apt-repository ppa:ondrej/php -y && \
    apt-get update && \
    apt-get install -y php8.3 php8.3-cli php8.3-mbstring php8.3-xml php8.3-mysql php8.3-curl php8.3-bcmath php8.3-zip php8.3-gd php8.3-common php8.3-readline php8.3-intl php8.3-pgsql

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

WORKDIR /app
