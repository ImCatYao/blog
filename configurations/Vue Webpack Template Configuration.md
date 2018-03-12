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
<br>

<h4>Support global scss varible for webpack template</h4>
<p>In order to maintain the consistency of the scss variables, we always extract scss varible into a single file <i>global.scss</i>. Howerver, to use the vairble defined in <i>global.scss</i>, we need to import this file in every place we use it, that's not elegant.</p>
<p>Problem can be solved with a plugin called <i><a href="sass-resources-loader">https://github.com/shakacode/sass-resources-loader</a></i></p>.
<p>Firstly, install this plugin</p>
<pre>
  npm install sass-resources-loader
</pre>
in your project.
<p>Second, config it. In this example, I used vue-webpack template to show an illustration in <i>project/build/utils.js</i>.</p>
<pre>
return {
  css: generateLoaders(),
  postcss: generateLoaders(),
  less: generateLoaders('less'),
  sass: generateLoaders('sass', { indentedSyntax: true }),
  <!-- configures -->
  scss: [
    'vue-style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, '../src/assets/scss/global.scss'),
      },
    },
  ],
  stylus: generateLoaders('stylus'),
  styl: generateLoaders('stylus')
}
</pre>
