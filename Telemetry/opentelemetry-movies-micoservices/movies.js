const { NodeTracerProvider } = require("@opentelemetry/node");
const {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} = require("@opentelemetry/tracing");
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");

const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");

// ----------------------------------------------------------------
// for servie name in node.js
const {
  detectSyncResources,
} = require("opentelemetry-resource-detector-sync-api");
const {
  serviceSyncDetector,
} = require("opentelemetry-resource-detector-service");

const resource = detectSyncResources({
  detectors: [serviceSyncDetector /* add other sync detectors here */],
});
//--------------------------------------------------------

const provider = new NodeTracerProvider({ resource });
const consoleExporter = new ConsoleSpanExporter();
const spanProcessor = new SimpleSpanProcessor(consoleExporter);
provider.addSpanProcessor(spanProcessor);
provider.register();

// This will automatically enable all instrumentations
registerInstrumentations({
  instrumentations: [getNodeAutoInstrumentations()],
});

const zipkinExporter = new ZipkinExporter({
  url: "http://localhost:9411/api/v2/spans",
  serviceName: "movies-service",
});

const zipkinProcessor = new SimpleSpanProcessor(zipkinExporter);
provider.addSpanProcessor(zipkinProcessor);

const express = require("express");
const app = express();
const port = 3000;

app.get("/movies", async function (req, res) {
  res.type("json");
  res.send({
    movies: [
      { name: "Jaws", genre: "Thriller" },
      { name: "Annie", genre: "Family" },
      { name: "Jurassic Park", genre: "Action" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
