// Chuyển đổi "yêu" => "<3"
var str = "anh yêu em lắm";
let strReplace =''

const strArr = str.split(' ');
for(let i=0; i<strArr.length; i++){
 const text = strArr[i] == 'yêu' ? '<3' : strArr[i];
  if(i!=strArr.length){
    strReplace+=text +' ';
  }else {
    strReplace+=text
  }
}
console.log(strReplace)




//Chuyển xác nhận câu nói "xin chào" và trả lời
let cauTraLoi = ["Xin chào! Tôi có thể giúp gì cho bạn?","Xin chào bạn nhé","Xin chào! Chúc bạn buổi sáng tốt lành!","Chào hơi bị nhiều"];

var cauHoi = "Xin chào nhé";
if(cauHoi.toLocaleLowerCase().includes('Xin chào'.toLocaleLowerCase())){
  const random = Math.floor(Math.random() * cauTraLoi.length);
  const tr = cauTraLoi[random];
  const traLoi = tr
  cauTraLoi = cauTraLoi.splice(random,random-1)
  console.log(traLoi)
}else{
  console.log("Đây không phải câu xin chào")
}
