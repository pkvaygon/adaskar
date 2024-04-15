/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "res.cloudinary.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: "lh3.googleusercontent.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: "eva.osclass-pro.ru",
                port: '',
                pathname: '/**'
            },
        ]
    }
};

export default nextConfig;
