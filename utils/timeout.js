const timeout = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('foo');
    }, 300);
  })
}

module.exports =timeout;
