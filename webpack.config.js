const path = require('path')

module.exports = {
    watch: true,
    context: __dirname,
    entry: './src/код.ћпп',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.ћпп$/,
          use: [
            {
              loader: path.resolve('./chpp-loader.js')
            }
          ]
        }
      ]
    }
  };