function random() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  let intervalId;
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  
  start.addEventListener('click', function () {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = random();
    }, 750);
  });
  
  stop.addEventListener('click', function () {
    clearInterval(intervalId);
  });
  