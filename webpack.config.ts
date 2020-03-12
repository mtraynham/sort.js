import template from 'lodash/template';
import {readFileSync} from 'fs';
import {join, resolve} from 'path';
import {BannerPlugin, Configuration} from 'webpack';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const pkg: {name: string} = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8'));
const banner: string = template(readFileSync(join(__dirname, 'LICENSE_BANNER'), 'utf8'))({
    pkg,
    date: new Date()
});

const baseConfiguration: Partial<Configuration> = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new BannerPlugin({banner, raw: true}),
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: []}),
        new ForkTsCheckerWebpackPlugin({eslint: true})
    ],
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        devtoolModuleFilenameTemplate: `webpack:///${pkg.name}/[resource-path]`
    }
};

export default [
    {
        ...baseConfiguration,
        name: 'dist',
        mode: 'production',
        devtool: 'source-map',
        entry: {
            sort: resolve(__dirname, './index.ts')
        }
    },
    {
        ...baseConfiguration,
        name: 'karma',
        mode: 'development',
        devtool: 'inline-source-map',
        module: {
            ...baseConfiguration.module,
            rules: [
                ...baseConfiguration.module.rules,
                {
                    test: /\.(js|ts)$/,
                    exclude: /(node_modules|\.spec\.(js|ts)$)/,
                    loader: 'istanbul-instrumenter-loader',
                    enforce: 'post',
                    options: {esModules: true}
                }
            ]
        }
    },
    {
        ...baseConfiguration,
        name: 'debug',
        mode: 'development',
        devtool: 'inline-source-map',
        entry: {
            [pkg.name]: resolve(__dirname, './debug/index.js')
        },
        plugins: [
            ...baseConfiguration.plugins,
            new HtmlWebpackPlugin({
                title: 'Debug',
                template: resolve(__dirname, './debug/index.ejs')
            })
        ]
    }
] as Configuration[];
