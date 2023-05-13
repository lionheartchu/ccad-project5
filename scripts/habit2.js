document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#name").innerHTML = localStorage.getItem("name")
})
function calculateResult() {
    var result = 0;
    for (var i = 1; i <= 4; i++) {
      var value = localStorage.getItem('habitScore' + i);
      if (value) {
        result += Number(value);
      }
    }
    for (var i = 5; i <= 7; i++) {
      var value = document.querySelector('input[name="q' + i + '"]:checked');
      if (value) {
        result += Number(value.value);
        localStorage.setItem('habitScore' + i, value.value);
      }
    }
    document.getElementById('rst').innerHTML = result;
    if (result<=9){
        document.getElementById("explain").innerHTML="It seems that you really need some professional suggestions..."
    }
    if (result>9&&result<14){
        document.getElementById("explain").innerHTML="Not bad, but a little help with your daily routine would be great."
    }
    if (result>=14&&result<18){
        document.getElementById("explain").innerHTML="Overall you're doing good--but you can do better!"
    }
    if (result>=15){
        document.getElementById("explain").innerHTML="Great job! You have got quite healthy life style. Keep going."
    }
  }
  