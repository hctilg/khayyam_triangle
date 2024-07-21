function triangle_row(n) {
  return Array.from({ length: n }, (_, i) => binomial(n - 1, i));
}

function binomial(n, k) {
  if (k === 0 || k === n) return 1;
  return binomial(n - 1, k - 1) + binomial(n - 1, k);
}

function add_rows(max) {
  document.getElementById("triangle").innerHTML = '';
  // min = max - 2;
  min = 1;
  for (let i = min; i <= max; i++) {
    let row_elm = document.createElement("div");
    row_elm.classList.add('row');
    var row_line = triangle_row(i);
    row_line.forEach(item_num => {
      let item_elm = document.createElement("div");
      item_elm.classList.add('item');
      item_elm.style.setProperty("--len", max);
      item_elm.innerText = item_num;
      row_elm.appendChild(item_elm);
    });
    document.getElementById("triangle").appendChild(row_elm);
  }
}
document.addEventListener('DOMContentLoaded', ev => {

  window.n = 3;

  // set the body to full width and height
  document.body.style.setProperty("--height", `${innerHeight}px`);
  document.body.style.setProperty("--width", `${innerWidth}px`);

  const w = innerWidth;
  const h = innerHeight - 70;
  document.body.style.setProperty("--min-size", `${w > h ? h : w}px`);
  

  add_rows(window.n);

  document.getElementById("down").onclick = (ev => {
    window.n++;
    if (window.n == 4)
      document.getElementById("controls").classList.remove("hide-up");
    add_rows(window.n);
  });

  document.getElementById("up").onclick = (ev => {
    window.n--;
    if (window.n == 3)
      document.getElementById("controls").classList.add("hide-up");
    add_rows(window.n);
  });

  document.getElementById("continue").onclick = ev => document.body.classList.add("active");
});