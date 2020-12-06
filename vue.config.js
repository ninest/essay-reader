module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Essay Reader';
      args[0].emoIcon = '📝';
      args[0].template = './public/index.html'
      return args;
    });
  }
};
