/**
 * Created by lenovo on 2018/2/5.
 * 位操作
 */

// 位操作结论
// 如果只是单纯的parseInt不做其他操作，parseInt或者parseFloat会比 >>0要快，
// 如果包含其他操作，则parseInt反而没有位操作快，>> 1
console.time('start');
let a = '34234.33';
let arr = [];
for (let i = 0; i < 10000000; i ++) {
  arr.push(a >> 1);
}
console.timeEnd('start');
