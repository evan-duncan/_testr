FROM node:8.7
RUN mkdir /app
WORKDIR /app
ADD ./package.json /app/package.json
ADD ./package-lock.json /app/package-lock.json
RUN npm install
ADD . /app
ADD ../lib/ /lib
EXPOSE 3000
CMD ["npm", "start"]

