document.getElementById("exe3-btn-tinh").addEventListener("click", function () {
  var soN = document.getElementById("exe3-txt-number").value * 1;
  var giaiThua = 1;

  for (var i = 1; i <= soN; i++) {
    giaiThua = giaiThua * i;
  }
  document.getElementById("ketQua3").value = giaiThua;
});
