/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (options.isServer) {
      return config;
    }

    config.plugins.push(
      new NextFederationPlugin({
        name: "app1",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./user-info": "./components/user-info",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
