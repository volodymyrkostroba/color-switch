const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    start:document.querySelector('.js-start'),
    stop:document.querySelector('.js-stop'),
}
let isActive = null;

refs.start.addEventListener('click', startHandler);
refs.stop.addEventListener('click', stopHandler);



function startHandler(){
   if(isActive === true){
    console.log('no');
    return
   }

    intervalId = setInterval(() => {
        isActive = true;
        const backgroundColorBody =
          colors[randomIntegerFromInterval(0, colors.length)];
        document.body.style.backgroundColor = backgroundColorBody;
      }, 1000);

}

function stopHandler(){
    clearInterval(intervalId);
    isActive = null;
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

