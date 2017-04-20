window.onload = function () {

var obj = {};
  obj.a = {};
    obj.a.q = "q12";
    obj.a.w = "w12";
    obj.a.e = "e12";
    obj.a.r = "r12";
    obj.a.w = {};
      obj.a.w.x = "mmm"
  obj.b = "123"
var s = JSON.stringify(obj)
var after = s.replace(/\{/g,"{<br/>")
console.log(s)


  var $div = document.getElementsByTagName('p')[0];
  var $getMsg = document.getElementsByClassName('getMsg')[0];
  var $iNum = document.getElementsByTagName('i')[0];
  var lineNum = $div.getElementsByTagName('div');
  var $after = document.getElementsByTagName('p')[1];

  var tabmargin = '&nbsp;&nbsp;';
  $getMsg.onclick = function (){
    // console.log($div.innerText.replace(/\s/g, ""))
    // console.log(tabmargin.length)
    try {
      console.log(JSON.parse($div.innerText))
      var temp = '';

      var contentStringMin = $div.innerText.replace(/\{/g, "{<br/>");
          contentStringMin = contentStringMin.replace(/\}/g,"<br/>}");
          contentStringMin = contentStringMin.replace(/\[/g, "[<br/>");
          contentStringMin = contentStringMin.replace(/\]/g,"<br/>]");
          contentStringMin = contentStringMin.replace(/\,/g,",<br/>");
      // $after.innerHTML = contentStringMin;
      console.log(contentStringMin.split('{<br/>').length)
      for (let i = 0; i < contentStringMin.split('{<br/>').length; i++) {
        if (i != contentStringMin.split('{<br/>').length-1) {
          temp += contentStringMin.split('{<br/>')[i] + '{<br/>' +tabmargin;
        } else {
          temp += contentStringMin.split('{<br/>')[i];
        }
        tabmargin = tabmargin + '&nbsp;&nbsp;';
      }
      contentStringMin = temp;
      temp="";
      var tabmarginstring = "";
      var tabmarginArr = tabmargin.split(';');
      console.log(tabmarginArr)
      tabmarginArr.pop();
      tabmarginArr.pop();
      tabmarginArr.pop();
      tabmarginArr.pop();
      tabmarginArr.pop();
      for (let i = 0; i < contentStringMin.split('<br/>}').length; i++) {
        console.log(1)
        tabmarginstring = tabmarginArr.join(';');
        temp += contentStringMin.split('<br/>}')[i] + '<br/>'+ tabmarginstring +'}';

        tabmarginArr.pop();
        tabmarginArr.pop();
      }
      console.log(temp);
      console.log(tabmarginArr)
      //
      // console.log('temp',temp)
      // tabmargin = '&nbsp;&nbsp;';
      // var temper = temp.split("").reverse().join("");
      // for (let i = 0; i < temp.split('</rb>}').length; i++) {
      //   if (i != temp.split('</rb>}').length-1) {
      //     temper += temp.split('</rb>}')[i] + '</rb>}' +tabmargin;
      //   } else {
      //     temper += temp.split('</rb>}')[i];
      //   }
      //   tabmargin += tabmargin;
      // }
      // temp = temp.split("").reverse().join("");
      // console.log(temp)


      $after.innerHTML = temp;
    } catch (e) {
      alert('请你特么输入正确的json格式');
      console.log(e);
    } finally {
      console.log('finally')
    }

  }
  var count = 1;
  var oldLineNum = 0;
  var currentLineNum = 0;
  var lineNumArr = [1];

  $div.addEventListener('keyup',function(ev){
    oldLineNum = currentLineNum;
    currentLineNum = lineNum.length;
    if((oldLineNum - currentLineNum) > 0){
      for (let i = 0; i < Math.abs(oldLineNum - currentLineNum); i++) {
        count--;
        lineNumArr.pop();
      }
      $iNum.innerHTML = lineNumArr.join('<br/>');
    } else if ((oldLineNum - currentLineNum) == 0){
      // console.log('do nothing');
    } else {
      for (let i = 0; i < Math.abs(oldLineNum - currentLineNum); i++) {
        count++;
        lineNumArr.push(count);
      }
      $iNum.innerHTML = lineNumArr.join('<br/>');
      $getMsg.innerHTML += "<br/>"
    }
  },false);
}
