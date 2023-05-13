document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#name").innerHTML = localStorage.getItem("name")
})

document.getElementById("rst").style.display='none';

function calculateBMR() {
    var gender = document.getElementById("gd").value;
    var age = document.getElementById("ag").value;
    var height = document.getElementById("ht").value;
    var weight = document.getElementById("wt").value;
  
    var bmr = 10 * weight + 6.25 * height - 5 * age;
    if (gender.toLowerCase() === "male") {
      bmr += 5;
    } else if (gender.toLowerCase() === "female") {
      bmr -= 161;
    }
    document.getElementById("result").innerHTML = bmr;
  }

  calBtn.addEventListener("click",function(){
    calculateBMR()
    document.getElementById("rst").style.display='block';
    document.getElementById("gd").value='';    
    document.getElementById("ag").value='';
    document.getElementById("ht").value='';
    document.getElementById("wt").value='';
  })