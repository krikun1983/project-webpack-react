import webpack from "webpack";

import { IBuildOptions } from "./types/config";
import { buildPlugins } from "./build-plugins";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";

export function buildWebpackConfig(option: IBuildOptions): webpack.Configuration {
    const  { mode, paths } = option;
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
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}