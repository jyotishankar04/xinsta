/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:'https',
            hostname:'i.pinimg.com'
        },{
            protocol:'https',
            hostname:'wallpaperset.com'
        },{
            protocol:'https',
            hostname:'images.unsplash.com'
        },{
            protocol:'https',
            hostname:'images.pexels.com'
        }],


    }

};

module.exports = nextConfig;
