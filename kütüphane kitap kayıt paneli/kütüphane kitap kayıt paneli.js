function kontrolEt()
{
   let kayit= localStorage.getItem("kayit");
   let myObj = JSON.parse(kayit);
   console.log(kayit);
   console.log(myObj)
    let kitapadı = document.getElementById("kitapadı");
    let yazaradı = document.getElementById("yazaradı");
    let yayınevi = document.getElementById("yayınevi");
    let basımyılı = document.getElementById("basımyılı");
    let sayfasayısı = document.getElementById("sayfasayısı");
    let tür = document.getElementById("tür");
    let dil = document.getElementById("dil");            
    let fiyat = document.getElementById("fiyat");
    let stoksayısı = document.getElementById("stoksayısı");
    let sonuc = document.getElementById("sonuc");
    kitapadı.value=myObj.kitapadı;
    yazaradı.value=myObj.yazaradı;
    yayınevi.value=myObj.yayınevi;
    basımyılı.value=myObj.basımyılı;
    sayfasayısı.value=myObj.sayfasayısı;
    tür.value=myObj.tür;
    dil.value=myObj.dil;
    fiyat.value=myObj.fiyat;
    stoksayısı.value=myObj.stoksayısı;
    sonuc.value=myObj.sonuc;

}
function kaydet()
{
    let kitapadı = document.getElementById("kitapadı");
    let yazaradı = document.getElementById("yazaradı");
    let yayınevi = document.getElementById("yayınevi");
    let basımyılı = document.getElementById("basımyılı");
    let sayfasayısı = document.getElementById("sayfasayısı");
    let tür = document.getElementById("tür");            
    let dil = document.getElementById("dil");
    let fiyat = document.getElementById("fiyat");
    let stoksayısı = document.getElementById("stoksayısı");
    sonuc.style="color:red";
    if(kitapadı.value.length<=2)
    {
        sonuc.innerHTML="kitap adı en az 3 karakter olmalidir--";
        return ;
    }
    if(yazaradı.value.length<=2)
    {
        sonuc.innerHTML="yazar adı en az 3 karakter olmalidir--";
        return ;
    }
    if(yayınevi.value.length<=2)
    {
        sonuc.innerHTML="yayınevi uzunlugu en az 2 karakter olmali--";
        return ;
    }
    // javascript objesi
    var kayit=
    {
        kitapadı:kitapadı.value,
        yazaradı:yazaradı.value,
        yayınevi:yayınevi.value,
        basımyılı:basımyılı.value,
        sayfasayısı:sayfasayısı.value,
        tür:tür.value,
        dil:dil.value,
        fiyat:fiyat.value,
        stoksayısı:stoksayısı.value,
        sonuc:sonuc.value};
    console.log(kayit);

    localStorage.setItem("kayit", JSON.stringify(kayit));
}