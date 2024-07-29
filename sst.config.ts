/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-sandbox",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-west-1",
        },
      },
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2("MyApi");
    api.route("GET /", {
      handler: "index.helloWorld",
    });
  },
});
