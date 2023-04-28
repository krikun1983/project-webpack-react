import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import { buildPlugins } from "./build-plugins";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";
import { buildDevServer } from "./build-dev-server";

export function buildWebpackConfig(option: IBuildOptions): webpack.Configuration {
    const  { mode, paths, isDev } = option;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(option),
        module: {
            rules: buildLoaders(option),
        },
        resolve: buildResolvers(option),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(option) : undefined,
    }
}