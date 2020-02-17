const d = document;
const h = d.getElementById('hrs');
const m = d.getElementById('min');
const s = d.getElementById('sec');
const ms = d.getElementById('ms');

let runs = [];

d.getElementById('addBtn').onclick = addRun;
d.getElementById('avgBtn').onclick = getAverage;

function addRun(){
  if(!h.value.length && !m.value.length && !s.value.length && !ms.value.length){
    alert('You need to input the run time!');
  }
  else{
    let runTime = h.value * 3600 + m.value * 60 + s.value * 1 + ms.value / 1000;
    d.getElementById('runs-list').innerHTML += (`<li>${runTime}</li>`);
    runs.push(runTime);
    h.value = '';
    m.value = '';
    s.value = '';
    ms.value = '';
  }
}

function getAverage(){
  if(runs.length === 0){
    alert('You need to add runs!')
  }
  else{
    let sum = runs.reduce((a, b) => {return a + b});
    let avg = sum / runs.length;
    d.getElementById('result').innerHTML = avg;
  }
}