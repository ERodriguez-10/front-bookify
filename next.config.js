/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "picsum.photos",
            port: '',
            pathname: "/id/**"
        }, {
            protocol: "https",
            hostname: "img.freepik.com",
            port: '',
            pathname: "/psd-gratis/*"
        }]
    }
};

export default config;
