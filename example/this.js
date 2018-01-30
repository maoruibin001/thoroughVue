/**
 * Created by lenovo on 2018/1/30.
 */
var obj = {
  name: '20',
  age: {
    name: '33',
    tt: function() {
      console.log(this.name)
    }
  }
}

let t = obj.age;
t.tt()
// obj.age.
