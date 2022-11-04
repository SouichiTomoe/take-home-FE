/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER: process.env.SERVER,
    },
    images: {
        domains: [''],
    },
};

module.exports = nextConfig;
