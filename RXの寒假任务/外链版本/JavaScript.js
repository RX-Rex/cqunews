//更改当前每日一图壁纸
  var bgi=0;
  function change(flag)
  {
   // alert("233");
    if(flag==1&&!(bgi==0))
    {
      bgi=bgi-1;
    }
    if(flag==2)
    {
      bgi=bgi+1;
    }  
    var url="https://bing.ioliu.cn/v1?d=";
    var pic=document.getElementById("BG");
    pic.src=url+bgi;
  }

// window.onload 保证页面加载完再执行js...
  window.onload = function()
  {
    new Vue({
      el: '#searchbox',
      data:
      {
        message: ''
      },
      methods: 
      {
        show: function(inf)
        {
          //这里困扰了我几天。。。
          //keyCode原来C必须大写。。。
          if(inf.keyCode==13)
          {
            window.open('https://www.baidu.com/s?wd=' + this.message, '_blank');
            this.message='';
          }
        },
        
        Click: function() 
        {
          //这里获取输入框的文本要加.value才行。。。
          var text=document.getElementById("inputtext").value;
          window.open('https://www.baidu.com/s?wd=' + text, '_blank');
        }
      }
    })
  }