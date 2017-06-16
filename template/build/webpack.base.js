const path = require('path');

function resolve(dir){
  return path.join(__dirname,'..',dir)
}

let config = {
  entry: {
    app: './src/index.ts',
    vendor: ['vue']
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.vue?$/,
        loader: 'vue-loader'
      },
      { 
         test: /\.ts?$/, 
         loader: 'ts-loader'
      },
      { 
        enforce: 'pre', 
        test: /\.js$/, 
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js','.json','.ts','.tsx','.css','.vue'],
    alias: {
      vue:'vue/dist/vue.js'
    }
  }
};

module.exports = config;