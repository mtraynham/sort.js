import pkg from './package';
import isArray from 'lodash/isArray';
import merge from 'lodash/merge';
import template from 'lodash/template';
import {readFileSync} from 'fs';
import {resolve} from 'path';
import {optimize, BannerPlugin} from 'webpack';

const banner = template(readFileSync(resolve(__dirname, 'LICENSE_BANNER'), 'utf8'))({
    pkg,
    date: new Date()
});

const base = {
    output: {
        libraryTarget: 'umd',
        devtoolModuleFilenameTemplate: 'webpack:///sort/[resource-path]'
    },
    module: {
        preLoaders: [{test: /\.js$/, loader: 'source-map-loader'}],
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    },
    devtool: 'source-map'
};

export const build = merge({}, base, {
    entry: './index.js',
    output: {
        filename: 'sort.js',
        library: 'Sort'
    },
    plugins: [
        new BannerPlugin(banner, {raw: true})
    ]
});

export const uglify = merge({}, base, {
    entry: './index.js',
    output: {
        filename: 'sort.min.js',
        library: 'Sort'
    },
    plugins: [
        new optimize.UglifyJsPlugin(),
        new BannerPlugin(banner, {raw: true})
    ]
});

export const test = merge({}, base, {
    output: {
        filename: 'test.js'
    }
}, (a, b) => {
    if (isArray(a)) {
        return a.concat(b);
    }
    return undefined;
});
