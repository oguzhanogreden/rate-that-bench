FROM node:17.0.1-bullseye

# Set working directory
# TODO: Rename app -> meaningful folder name
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY ./ /usr/src/app

# Install packages
RUN npm install
RUN rm -f .npmrc

COPY src/ /usr/src/app

RUN npm run build

CMD npm run start:prod
# TODO: Move to a multistage build