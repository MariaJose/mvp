module.exports = {
    entry: __dirname + '/client/app.jsx',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test:/\.css$/,
            use: [{
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              options: {
                modules: true,
            }
          }]        
        },
      ]
    }
  }
  