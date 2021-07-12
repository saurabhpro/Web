# OpenTelemetry Tracing

Introduction to Tracing

This Repository is to support a tutorial on OpenTelemetry.

to start this app run

`➜ docker run --rm -d -p 9411:9411 --name zipkin openzipkin/zipkin` to start a zipkin container

#`yarn install` to install the packages

#`node -r ./tracing.js app.js`

then visit http://localhost:8080/date

Now view the tracing data in zipkin : http://localhost:9411/zipkin/


> For Metrics we need to use prometheus

> currently the service name is not getting updated in zipkin ui
> you can use NodeJs Exported to see data in console