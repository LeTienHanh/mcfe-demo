/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { APP1_URL, APP2_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (options.isServer) {
      return config;
    }

    config.plugins.push(
      new NextFederationPlugin({
        name: "app3",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          app1: `app1@${APP1_URL}/app1/_next/static/chunks/remoteEntry.js`,
          app2: `app2@${APP2_URL}/app2/_next/static/chunks/remoteEntry.js`,
        },
        exposes: {
          "./components/user-info": "./components/user-info",
        },
        shared: {
          "next-auth": {
            singleton: true,
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
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/app1",
        destination: `${APP1_URL}/app1`,
      },
      {
        source: "/app1/:path*",
        destination: `${APP1_URL}/app1/:path*`,
      },
      {
        source: "/app2",
        destination: `${APP2_URL}/app2`,
      },
      {
        source: "/app2/:path*",
        destination: `${APP2_URL}/app2/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
