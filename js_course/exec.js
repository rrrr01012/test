var a = "今天4月6日，現在時間2點09分"
var reg = /\d+/g;
var result;
while (result = reg.exec(a)) {
    console.log(result[0]);
}



