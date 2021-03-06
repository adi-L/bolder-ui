const pkg = require('./package.json');
const path = require("path");


module.exports = (env, argv) => {
  return {
   
    output: {
      filename: `[name].bundle.js`,
      library: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1),//TODO use function
      globalObject: '(typeof self !== \'undefined\' ? self : this)', // TODO Hack (for Webpack 4+) to enable create UMD build which can be required by Node without throwing error for window being undefined (https://github.com/webpack/webpack/issues/6522)
      umdNamedDefine: true,
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }],
              ],
            },
          },
        },
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css)$/i,
          use: [{
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
            'css-loader',],
        },
      ],
    },
  };
};
