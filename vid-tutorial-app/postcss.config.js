
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./website-css-config.js'),
        require('autoprefixer')
    ],
};
