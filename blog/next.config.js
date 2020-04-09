const withCss = require('@zeit/next-css')
const webpack = require('webpack')

if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => { }
}

module.exports = withCss({
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        config.module.rules.push({
            test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 5,
                        name: './static/fonts/[name].[ext]',
                        publicPath: '../../'
                    }
                }
            ]
        })

        return config
    }
})