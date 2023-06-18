//your JS code here. If required.
let count = 0;
      let para = document.getElementById('counter');
      let btn = document.getElementById('incrementBtn');

      btn.addEventListener('click', () => {
        alert("Un-incremented value: " + count);
        count++;
        para.textContent = count;
      });