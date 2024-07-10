/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'oaidalleapiprodscus.blob.core.windows.net',
            },
            {
                protocol: 'https',
                hostname: 'cdn.openai.com',
            },
            // Below data is only for test purpose.
            {
                protocol: 'https',
                hostname: 'cdn2.thecatapi.com',
            },
            {
                protocol: 'https',
                hostname: 'images.dog.ceo',
            },
            {
                protocol: 'https',
                hostname: 'www.w3schools.com',
            },
        ],
    },
};

export default nextConfig;