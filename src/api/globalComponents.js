const commonComponents = {
    install(Vue) {
      const requireComponent = require.context(
        // 其组件目录的相对路径(组件目录相对于当前js文件的路径)
        '../components',
        // 是否查询其子目录
        false,
        // 匹配基础组件文件名的正则表达式(因此要注册为全局组件的组件名称约定很重要)
        /Base[A-Z]\w+\.(vue)$/
      )
      requireComponent.keys().forEach(fileName => {
        //   console.log(fileName)  ./BaseComponentA.vue
        // 获取组件配置
        const componentConfig = requireComponent(fileName) //这里的componentConfig包含当前fileName对应组件的所有该组件信息,等于拿到了当前组件实例
        // 获取组件的 PascalCase 命名
        const componentName = _.upperFirst( //这里 _ 代表main.js中引入的的lodash实例对象
          _.camelCase(
            // 获取和目录深度无关的文件名
            fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '') //将.(包括.)字符以后的字符用''代替
          )
        )
        // 全局注册组件
        Vue.component(
          componentName,
          // 如果这个组件选项是通过 `export default` 导出的，
          // 那么就会优先使用 `.default`，
          // 否则回退到使用模块的根。
          componentConfig.default || componentConfig
        )
      })
    }
  }
  
  export default plugins;