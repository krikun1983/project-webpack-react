import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildPlugins({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}