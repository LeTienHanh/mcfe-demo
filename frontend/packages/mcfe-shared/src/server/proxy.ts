import httpProxy from "http-proxy";

export const proxy = httpProxy.createProxyServer({
  target: process.env.BACKEND_URL,
  autoRewrite: false,
});
