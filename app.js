const d = document;
const h = d.getElementById('hrs');
const m = d.getElementById('min');
const s = d.getElementById('sec');

let runs = [];

d.getElementById('addBtn').onclick = addRun;
d.getElementById('avgBtn').onclick = getAverage;

function addRun(){
  if(!h.value.length && !m.value.length && !s.value.length){
    alert('You need to input the run time!');
  }
  else{
    let runTime = h.value * 3600 + m.value * 60 + s.value * 1;
    if(d.getElementById('runs').innerHTML === ''){
      d.getElementById('runs').innerHTML += (`
        Your Runs:
        <br>
        <ul id='runs-list'></ul>
      `);
      d.getElementById('runs-list').innerHTML += (`<li>${formatRun(runTime)}</li>`);
    }
    else{
      d.getElementById('runs-list').innerHTML += (`<li>${formatRun(runTime)}</li>`);
    }
    runs.push(runTime);
    h.value = '';
    m.value = '';
    s.value = '';
  }
}

function getAverage(){
  if(runs.length === 0){
    alert('You need to add runs!')
  }
  else{
    let sum = runs.reduce((a, b) => {return a + b});
    let avgRun = sum / runs.length;

    d.getElementById('result').innerHTML = ('Average: ' + formatRun(avgRun));
  }
}

function formatRun(time){
  let hrs = Math.floor(time / 3600);
  let min = Math.floor((time - hrs * 3600) / 60);
  let sec = Math.floor((time - hrs * 3600) - min * 60);

  if(min < 10){
    min = '0' + min;
  }

  if(sec < 10){
    sec = '0' + sec;
  }

  return timeStr = `${hrs}:${min}:${sec}`;
}