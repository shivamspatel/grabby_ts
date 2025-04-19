module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: require.resolve("process/browser"),
    };
    return config;
  },
  pageExtensions: ["tsx", "ts"], // Ensure .tsx files are recognized as pages
};
