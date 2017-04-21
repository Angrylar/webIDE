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
                                              // var temp = '';
                                              // var contentStringMin = $div.innerText.replace(/\{/g, "{<br/>");
                                              //     contentStringMin = contentStringMin.replace(/\}/g,"<br/>}");
                                              //     contentStringMin = contentStringMin.replace(/\[/g, "[<br/>");
                                              //     contentStringMin = contentStringMin.replace(/\]/g,"<br/>]");
                                              //     contentStringMin = contentStringMin.replace(/\,/g,",<br/>");
                                              // // $after.innerHTML = contentStringMin;
                                              // console.log(contentStringMin.split('{<br/>').length)
                                              // for (let i = 0; i < contentStringMin.split('{<br/>').length; i++) {
                                              //   if (i != contentStringMin.split('{<br/>').length-1) {
                                              //     temp += contentStringMin.split('{<br/>')[i] + '{<br/>' +tabmargin;
                                              //   } else {
                                              //     temp += contentStringMin.split('{<br/>')[i];
                                              //   }
                                              //   tabmargin = tabmargin + '&nbsp;&nbsp;';
                                              // }
                                              // contentStringMin = temp;
                                              // temp="";
                                              // var tabmarginstring = "";
                                              // var tabmarginArr = tabmargin.split(';');
                                              // console.log(tabmarginArr)
                                              // tabmarginArr.pop();
                                              // tabmarginArr.pop();
                                              // tabmarginArr.pop();
                                              // tabmarginArr.pop();
                                              // tabmarginArr.pop();
                                              // for (let i = 0; i < contentStringMin.split('<br/>}').length; i++) {
                                              //   console.log(1)
                                              //   tabmarginstring = tabmarginArr.join(';');
                                              //   temp += contentStringMin.split('<br/>}')[i] + '<br/>'+ tabmarginstring +'}';
                                              //
                                              //   tabmarginArr.pop();
                                              //   tabmarginArr.pop();
                                              // }
                                              // console.log(temp);
                                              // console.log(tabmarginArr)
                                              //
                                              //
                                              // $after.innerHTML = temp;\\
      var getMsgChar = $div.innerText;
      var charArr = [];

      var spaceFunc = (num) => {
        var space = '';
        for (let i = 0; i < num; i++) {
          space += '&nbsp;&nbsp;&nbsp;&nbsp;';
        }
        return space;
      }

      var traversal = (str) => {
        var counter = 0;
        for (let i = 0; i < str.length; i++) {
          console.log(str.charAt(i));
          if (str.charAt(i) == '[' || str.charAt(i) == '{') {
            counter++;
            charArr.push(str.charAt(i));
            charArr.push('<br/>');
            charArr.push(spaceFunc(counter));
          } else if (str.charAt(i) == ']' || str.charAt(i) == '}') {
            counter--;
            charArr.push('<br/>');
            charArr.push(spaceFunc(counter));
            charArr.push(str.charAt(i));
          } else if (str.charAt(i) == ',') {
            charArr.push(str.charAt(i));
            charArr.push('<br/>');
            charArr.push(spaceFunc(counter));
          } else {
            charArr.push(str.charAt(i));
          }
        }
        return charArr.join("");

      }
      $after.innerHTML = traversal(getMsgChar);


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
