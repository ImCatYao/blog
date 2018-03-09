<h4>Add scss surport to vue webpack template</h4>
To use a pre-processor, all u need is install the appropriate webpack loader for it.
<pre>
  npm install sass-loader node-sass --save-dev
</pre>
Set the configures for webpack loaders at file <i>./build/webpack.base.conf.js</i>
<pre>
{
  test: /\.s[a|c]ss$/,
  loader: 'style-lodaer!css-loader!!postcss-loader!sass-loader',
},
</pre>
<br>
<h4>Add postcss support to vue webpack template</h4>
First, install postcss plugins that u need, I use two plugins, <i>autoprefixer</i> and <i>autoprefixer</i>.
Second, set the configures for webpack loaders at file  <i>./build/webpack.base.conf.js</i>
<pre>
module: {
  rules: {
    { test: /\.scss$/, 
      loader:  'style-loader!css-loader!!postcss-loader!sass-loader'
    }
  }
},
postcss: function () {
  return [autoprefixer(),px2rem({remUnit: 50})];
}
</pre>
