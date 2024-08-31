FROM node:18

WORKDIR /app
COPY . .
RUN npm install

ENV RDS_HOSTNAME=workshop-db-01.cxiow4kwa1fe.us-east-1.rds.amazonaws.com
ENV RDS_PORT=3306
ENV RDS_DB_NAME=todolist
ENV RDS_USERNAME=admin
ENV RDS_PASSWORD=12345678

EXPOSE 8000

CMD npm start