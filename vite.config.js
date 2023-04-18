export default {
  // ...
  plugins: [
    // ...
    {
      name: "dep-pre-bundle",
      apply: "build",
      enforce: "pre",
      config: () => ({
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            next();
          });
        },
      }),
    },
    // ...
  ],
  // ...
};
