module.exports = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    images: {
        loader: "imgix",
        path: "https://noop/",
    },
};
