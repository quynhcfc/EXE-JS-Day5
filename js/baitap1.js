var number = 0;
var sum = 0;

document.getElementById("exe1-btn-tinh").addEventListener("click", function () {
  while (sum < 10000) {
    number++;
    sum += number;
  }
  document.getElementById("ketQua1").value = number;
});
