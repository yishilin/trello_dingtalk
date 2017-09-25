FROM node:6

# ADD source.list /etc/apt/source.list

RUN apt-get -y update
RUN apt-get install -y vim zsh
RUN git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh \
      && cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc \
      && chsh -s /bin/zsh

RUN mkdir /src

RUN npm config set registry http://registry.npm.taobao.org
RUN npm install nodemon -g

WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

ADD app/nodemon.json /src/nodemon.json


EXPOSE 3000

# CMD npm start