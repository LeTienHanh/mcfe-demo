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
        name: "app1",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./user-info": "./components/user-info",
        },
        shared: {
          "next-auth": {
            singleton: true,
            requiredVersion: false,
          },
          "next-auth/react": {
            singleton: true,
            requiredVersion: false,
            eager: true,
          },
        },
      })
    );

    return config;
  },
  async headers() {
    return [
      {
        source: "/app1/api/auth/:slug",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
