module.exports = {
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      FROM_EMAIL: process.env.FROM_EMAIL,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      return config;
    },
    webpackDevMiddleware: (config) => {
      return config;
    },
    async headers() {
      return [
        {
          source: "/api/send",
          headers: [
            {
              key: "X-Custom-Header",
              value: "MyCustomValue",
            },
          ],
        },
      ];
    },
  };
  