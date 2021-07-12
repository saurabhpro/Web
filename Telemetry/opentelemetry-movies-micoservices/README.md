# OpenTelemetry Tracing

Introduction to Tracing

This Repository is to support a tutorial on OpenTelemetry.

to start this app run

`➜ docker run --rm -d -p 9411:9411 --name zipkin openzipkin/zipkin` to start a zipkin container

#`yarn install` to install the packages

#`node movies.js`
in one tab

#`node dashboard.js`
in another tab

then visit localhost:3001/dashboard

Now view the tracing data in zipkin : http://localhost:9411/zipkin/


> For Metrics we need to use prometheus

> currently the service name is not getting updated in zipkin ui as it requires nodeJs Resource to be setup
> you can use NodeJs Exported to see data in console

## Additional Resources
- https://opentelemetry.lightstep.com/js/
- https://www.npmjs.com/package/opentelemetry-resource-detector-service
- https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/sdk-environment-variables.md
