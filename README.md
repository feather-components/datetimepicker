DateTimePicker 日期+时间选择器
===============================
 
###Events
 
*   confirm(event, datetime, date, time)：点击确定后触发
*   open: 打开时触发
*   close：关闭时触发 

###Api

*   open：打开
*   close: 关闭
*   destroy: 摧毁对象
 
###Example

```js
$('#datetimepicker').datetimepicker().on('datetimepicker:confirm', function(event, datetime, date, time){
      console.log(datetime, date, time);
});
```