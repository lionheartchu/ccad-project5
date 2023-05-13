document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").addEventListener("keyup",function(){
        let val = this.value;
       localStorage.setItem("name", val)
    })
    
})
