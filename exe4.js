var res = window.document.getElementById("mensagem");
var tab = window.document.getElementById("lista");

function botaozar() {
  var nam = window.document.getElementById("numero");
  var paw = Number(nam.value);

  if (nam.value.length == 0) {
    window.alert("Por favor, digite um número");
  } else {
    tab.innerHTML = " ";
    res.innerHTML = " ";
    for (var num = 0; num <= 10; num = num + 1) {
      var opt = window.document.createElement("option");
      opt.text = `${paw} x ${num} = ${paw * num}`;
      tab.appendChild(opt);

      res.innerHTML += `${paw} x ${num} = ${paw * num}</br>`;
    }
  }
}
