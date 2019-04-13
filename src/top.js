// topのscriptを取得
var parent = document.getElementById('top');
var test = 1;
// homeを描写
var script = document.createElement('script');
script.setAttribute("id","home"); // id追加
script.setAttribute('src', 'src/home.js'); // src追加
parent.appendChild(script); // scriptを追加
