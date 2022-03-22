document.getElementById("exe2-btn-tinh").addEventListener("click", function () {
  var soX = document.getElementById("soX").value * 1;

  var soN = document.getElementById("soN").value * 1;

  var ketQua2 = document.getElementById("ketQua2");

  var T = 1;

  var sum = 0;

  function tinhTong(x, n) {
    for (var i = 1; i <= n; i++) {
      T = T * x;
      sum = sum + T;
    }
  }

  tinhTong(soX, soN);

  ketQua2.value = sum;
});
