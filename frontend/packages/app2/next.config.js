/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { BASE_PATH } = process.env;

const nextConfig = {
  basePath: BASE_PATH,
  reactStrictMode: true,
  webpack: (config, options) => {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (options.isServer) {
      return config;
    }

    config.plugins.push(
      new NextFederationPlugin({
        name: "app2",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./components/user-info": "./components/user-info",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
