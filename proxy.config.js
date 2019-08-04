const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080/bancos',
      pathRewrite: { '^/api': '' }
    }
  ];
  module.exports = proxy;