document.getElementById("exe4-inDiv").addEventListener("click", function () {
  var numberDiv = document.getElementById("exe4-txt-number").value * 1;
  var ketQua4 = document.getElementById("ketQua4");
  var contentHTML = "";

  for (var i = 1; i <= numberDiv; i++) {
    if (i % 2 == 0) {
      var contentDivChan = `<div style="background: red; color: white">  ${i}  </div>`;
      contentHTML += contentDivChan;
    } else {
      var contentDivLe = `<div style="background: blue; color: white">   ${i}  </div>`;
      contentHTML += contentDivLe;
    }
  }
  ketQua4.innerHTML = contentHTML;
});
