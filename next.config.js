/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
    },
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
       }
}

module.exports = nextConfig
