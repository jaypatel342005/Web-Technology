function change() {

    col = document.getElementById('bg');
 a =Math.random()*255;
 b = Math.random()*255;
 c = Math.random()*255;
 d = Math.random();
 col.style.backgroundColor = `rgba(${a},${b},${c},${d})`;
 }