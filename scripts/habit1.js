let radios = document.querySelectorAll('input[type="radio"]');
let submit = document.getElementById('submit');
    
submit.addEventListener('click', () => {
    let scoreH1 = 0;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        scoreH1 += Number(radios[i].value);
      }
    }
    localStorage.setItem('habitScore', scoreH1);
  });
