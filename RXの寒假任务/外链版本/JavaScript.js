//���ĵ�ǰÿ��һͼ��ֽ
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

// window.onload ��֤ҳ���������ִ��js...
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
          //�����������Ҽ��졣����
          //keyCodeԭ��C�����д������
          if(inf.keyCode==13)
          {
            window.open('https://www.baidu.com/s?wd=' + this.message, '_blank');
            this.message='';
          }
        },
        
        Click: function() 
        {
          //�����ȡ�������ı�Ҫ��.value���С�����
          var text=document.getElementById("inputtext").value;
          window.open('https://www.baidu.com/s?wd=' + text, '_blank');
        }
      }
    })
  }