 const t = document.getElementById('timer');
 const time = setInterval(() => {
    t.textContent = Number(t.textContent) - 1;
    if (Number(t.textContent) === 0) {
      clearInterval(time);
      alert ("Вы победили в конкурсе!")}
      }, 1000);
