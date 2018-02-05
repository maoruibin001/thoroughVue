/**
 * Created by lenovo on 2018/2/5.
 */
const obj = {
  t: '20',
  name: {
    mao: {
      bin: {
        kk: 33
      }
    }
  }
}

let str = 'name.mao';

let layout = str.split('.');

function getKey(obj, str) {

  if (str.indexOf('.') === -1) return obj[str];

  let index = str.indexOf('.');

  let used = str.slice(0, index);
  let res = str.slice(index + 1);
  let retObj = obj[used];

  // if (obj[used]) {
  //   return getKey(obj[used], res);
  // } else {
  //   return obj[used][res];
  // }
  while(retObj) {
    index = res.indexOf('.');
    if (index === -1) {
      return retObj[res];
    } else {
      used = res.slice(0, index);
      res = res.slice(index + 1);
      retObj = retObj[used];
    }
  }
}

console.log(getKey(obj, '34t'))
