window.onload = function () {

var obj = {};
  obj.a = {};
    obj.a.q = "q12";
    obj.a.w = "w12";
    obj.a.e = "e12";
    obj.a.r = "r12";
  obj.b = "123"
var s = JSON.stringify(obj)
s.replace("{","{<br/>")



  var $div = document.getElementsByTagName('p')[0];
  var $getMsg = document.getElementsByClassName('getMsg')[0];
  var $iNum = document.getElementsByTagName('i')[0];
  var lineNum = $div.getElementsByTagName('div');

  var tabmargin = `    `;
  $getMsg.onclick = function (){
    // console.log($div.innerText.replace(/\s/g, ""))
    console.log(tabmargin.length)
    try {
      console.log(JSON.parse($div.innerText))
      var contentStringMin = $div.innerText.replace(/\s/g, "");

      contentStringMin.split("{");

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