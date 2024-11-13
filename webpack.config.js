const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // File types to transpile
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpg|png)$/, // File types to handle
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]' // Maintain file names and paths
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve these file extensions
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
