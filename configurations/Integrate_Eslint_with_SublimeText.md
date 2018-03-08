<h4>Integrate eslint for Sublime Editor</h4>
<ol>
  <li>install eslint globally
    <code>npm install eslint -g</code></li>
  <li>create eslint configurations file, <i>.eslintrc.json</i> for project
    <code>eeslint --init</code></li>
  <li>integrate with sublime
    <ol>
      <li>
        install eslint plugins for Sublime
        <ol>
          <li>SublimeLinter</li>
          <li>SublimeLinter-contrib-eslint</li>
        </ol>
      </li>
      <li>
      go to file configurations file (<small>Preferences->Package Settings->SublimeLinter->Settings - User</small>) and integrate eslint with Sublime.
      </li>
    </ol>
  </li>
</ol>


<h4>An example for SublimeLinter configurations</h4>
<pre>
{
  "debug": true,
  "delay": 0.25,
  "error_color": "D02000",
  "gutter_theme": "Packages/SublimeLinter/gutter-themes/Default/Default.gutter-theme",
  "gutter_theme_excludes": [],
  "lint_mode": "background",
  "linters": {
  "eslint": {
      "@disable": false,
      "args": [],
      "excludes": []
  },
  "jshint": {
      "@disable": false,
      "args": [],
      "excludes": []
  },
  "php": {
      "@disable": false,
      "args": [],
      "excludes": []
  }
  },
  "mark_style": "outline",
  "no_column_highlights_line": false,
  "passive_warnings": false,
  "paths": {
  "linux": [],
  "osx": [
      "your nodejs path"
  ],
  "windows": []
  },
  "python_paths": {
  "linux": [],
  "osx": [],
  "windows": []
  },
  "rc_search_limit": 3,
  "shell_timeout": 10,
  "show_errors_on_save": false,
  "show_marks_in_minimap": true,
  "syntax_map": {
  "html (django)": "html",
  "html (rails)": "html",
  "html 5": "html",
  "javascript (babel)": "javascript",
  "magicpython": "python",
  "php": "html",
  "python django": "python",
  "pythonimproved": "python"
  },
  "warning_color": "DDB700",
  "wrap_find": true
}
</pre>


<h4>An example for <i>.eslintrc.json</i> configurations</h4>
<pre>
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {"sourceType": "module"},
  "rules": {
    "indent": ["error",  2],
    "linebreak-style": ["error",  "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "eol-last": ["error", "always"],
    "no-console": "off"
  }
}
</pre>
<br>
<br>

<small>reference: <a href="https://www.jianshu.com/p/e826e13c67ec">https://www.jianshu.com/p/e826e13c67ec</a></small>