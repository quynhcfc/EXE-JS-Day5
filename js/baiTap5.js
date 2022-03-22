document.getElementById("exe5-inSo").addEventListener("click", function () {
  var number = document.getElementById("exe5-txt-number").value * 1;

  function isprime(n) {
    var flag = 1;

    if (n < 2) {
      return (flag = 0);
    }

    var i = 2;
    while (i < n) {
      if (n % i == 0) {
        flag = 0;
        break;
      }
      i++;
    }
    return flag;
  }

  var i = 0,
    check = 0,
    result = "";

  while (i <= number) {
    check = isprime(i);
    if (check == 1) result += i + " ";
    ++i;
  }
  document.getElementById("ketQua5").innerText = result;
});
