function rastgeleSayiUretmek() {
  return Math.floor(Math.random() * 101);
}

function tahminEtme() {
  const rastgeleSayi = rastgeleSayiUretmek();
  let sans = 5;

  while (sans > 0) {
    const kullaniciTahmini = parseInt(
      prompt("0-100 arasinda bir sayi tahmin et: ")
    );

    if (kullaniciTahmini === rastgeleSayi) {
      alert(`Tebrikler dogru sayiyi ${5 - sans + 1}. denemede buldun`);
      return;
    } else if (kullaniciTahmini < rastgeleSayi) {
      alert(`Daha yuksek bir sayi tahmin et. ${sans - 1} sansiniz kaldi`);
    } else {
      alert(`Daha dusuk bir sayi tahmin et. ${sans - 1} sansiniz kaldi`);
    }

    sans--;
  }

  alert(`Dogru sayi ${rastgeleSayi}.`);
}
tahminEtme();

