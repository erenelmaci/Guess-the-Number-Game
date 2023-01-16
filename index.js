let kalanHak = 7;
let min = 0;
let max = 100;
let rastgeleSayi = Math.floor(Math.random() * 100 + 1);

const checkButton = document.getElementsByClassName("btn")[0];
const tahminInput = document.getElementById("guess");
const kalanHakBildir = document.getElementsByClassName("remainingGuess")[0];

const outputContainer = document.getElementsByClassName("output")[0];
const sonucBildir = document.createElement("p");

checkButton.addEventListener("click", () => {
  kalanHak--;
  kalanHakBildir.innerText = kalanHak;

  console.log(tahminInput.value);
  console.log(rastgeleSayi);

  if (tahminInput.value == rastgeleSayi) {
    sonucBildir.innerText = `Tebrikler Bildiniz Sayı: ${rastgeleSayi}`;
    outputContainer.appendChild(sonucBildir);
    checkButton.disabled = true;
    tahminInput.disabled = true;
  }


  else if (kalanHak <= 0) kalanHak = 1;


  else if (tahminInput.value === "") {
    sonucBildir.innerText = "Lütfen Bir Sayı Giriniz";
    outputContainer.appendChild(sonucBildir);
    tahminInput.value = "";
  }
  
  else if (tahminInput.value < rastgeleSayi) {
    min = tahminInput.value;
    sonucBildir.innerText = `${min} - ${max} Arasında bir sayı tutunuz`;
    outputContainer.appendChild(sonucBildir);
    tahminInput.value = "";
  }
  
  
  else if (tahminInput.value > rastgeleSayi) {
    max = tahminInput.value;
    sonucBildir.innerText = `${min} - ${max} Arasında bir sayı tutunuz`;
    outputContainer.appendChild(sonucBildir);
    tahminInput.value = "";
  }
  
  else if (kalanHak === 0) {
    sonucBildir.innerText = `Tahmin Hakkınız Bitmiştir Sayı: ${rastgeleSayi}`;
    outputContainer.appendChild(sonucBildir);
    tahminInput.value = "";
  }

  else if (tahminInput.value.length === 0) {
    sonucBildir.innerText = "Lütfen Geçerli bir sayı giriniz";
    outputContainer.appendChild(sonucBildir);
  } 
  else if (tahminInput.value > 100) {
    sonucBildir.innerText = "Lütfen 0 - 100 arasında bir sayı giriniz";
    outputContainer.appendChild(sonucBildir);
    tahminInput.value = "";
    return;
  }


});

tahminInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkButton.click();
  }
});
