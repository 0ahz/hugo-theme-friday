module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', '> 5%'],
    }),
    require('postcss-bem-fix')({
      defaultNamespace: 'fri',
      style: 'suit',
      separators: {
        descendent: '__',
      },
      shortcuts: {
        utility: 'u', //全局命名简写
        component: 'c', //组件命名简写
        descendent: 'e', //元素命名简写
        modifier: 'm', //描述命名简写
        when: 'w', //状态命名简写
      },
    }),
  ],
};
