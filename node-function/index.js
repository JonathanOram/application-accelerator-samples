module.exports = async function sampleFunction(context) {
  const ret = 'This is a sample function3';
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      context.log.info('sending response to client')
      resolve(ret);
    }, 500);
  });
};
