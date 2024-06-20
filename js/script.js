function formSubmit(e) {
    var values = document.getElementById("input").value;
    var cek = document.querySelector("label");
    if (values != "") {
        if (Number(values)) { // ngecek angka bukan ?
        // cek mau konversi apa
        if (cek.textContent === "Celcius") { // ngecek suhu inputnya apa
            result = Number(values) * (9 / 5) + 32; // rumus celcius
            document.getElementById("result").value = result;
            document.getElementById("rumus").value = `${values}°C * (9/5) + 32 = ${result}°F`;
      } else {
        result = (Number(values) - 32) * (5 / 9); // rumus farenhaeit
        document.getElementById("result").value = result;
        document.getElementById(
          "rumus"
        ).value = `${values}°F - 32 * (5/9) = ${result}°C`;
      }
    } else {
      alert("Valuenya tidak valid!");
      var form = document.getElementById("form").reset(); // buat ngosongin semua input
    }
  } else {
    alert("Masukan suhu terlebih dahulu");
  }
}

function reverseSuhu(e) {
  var cek = document.querySelector("label");
  var convert = document.getElementById("convert");
  var form = document.getElementById("form").reset(); // untuk mengkosongkan semua input

  if (cek.textContent === "Celcius") {
    cek.textContent = "Fahrenheit";
    convert.textContent = "Celcius";
  } else {
    cek.textContent = "Celcius";
    convert.textContent = "Fahrenheit";
  }
}
