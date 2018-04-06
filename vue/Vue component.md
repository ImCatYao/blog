### Vue component code snippets

#### .vue file code structure recommendation
```html
<style lang="scss" src="./app.scss"></style>

<template>
  <div class="app"></div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
```

#### how to write global component
```javascript
import Vue from 'vue'
import appheader from './app-header'

Vue.component('app-header', appheader)

```

#### how to write local component
```javascript
import loading from '@/components/loading'

export default {
  name: 'app',
  components: {
    loading
  }
}
```

#### how to export components regesterd as global components in a plugin, and how to export a singel component which  is imported as a local component.

directory structure
-- components
    app
    loading
    mixins
    index.js
in app directory, the code for <i>index.js</i> is
```javascript
import appheader fom './app-header'
import appview from './app-view'
import appfooter from './app-footer'

const install = (Vue) => {
  if (!install.installed) {
    Vue.component('app-header', appheader)
    Vue.component('app-header', appview)
    Vue.component('app-footer', appfooter)
  }
}

export install

export {
  appheader,
  appview,
  appfooter
}

```
in loading directory, the code for <i>index.js</i> is
```javascript
import loading from './loading'

const install = (Vue) => {
  if (!install.installed) {
  }
}
export default install

export {
  loading
}
```
in app directory, the code for <i>index.js</i> is
```javascript
import app from './app'
import loading from './loading'

const install = (Vue) => {
  if (!install.installed) {
    Vue.use(app)
    Vue.use(loading)
  }
}

export default install

export {
  app,
  loading
}
```

#### how to load async component
```javascript
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```


