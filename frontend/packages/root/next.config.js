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
        name: "root",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          app1: "app1@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          app2: "app2@http://localhost:3002/_next/static/chunks/remoteEntry.js",
        },
        exposes: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
