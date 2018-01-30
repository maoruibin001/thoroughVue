/**
 * Created by lenovo on 2018/1/30.
 */
var obj = {};
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});

console.log(obj.key)
