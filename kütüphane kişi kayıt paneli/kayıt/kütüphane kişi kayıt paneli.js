function kontrolEt()
{
   let kayit= localStorage.getItem("kayit");
   let myObj = JSON.parse(kayit);
   console.log(kayit);
   console.log(myObj)
    let Şifre = document.getElementById("Şifre");
    let adiniz = document.getElementById("adiniz");
    let soyadiniz = document.getElementById("soyadiniz");
    let adres = document.getElementById("adres");
    let ilçe = document.getElementById("ilçe");
    let ülke = document.getElementById("ülke");            
    let email = document.getElementById("email");
    let EvNumarasi = document.getElementById("EvNumarasi");
    let CepNumarasi = document.getElementById("CepNumarasi");
    let İşNumarasi = document.getElementById("İşNumarasi");
    let Tarih = document.getElementById("Tarih");
    let sonuc = document.getElementById("sonuc");
    Şifre.value=myObj.Şifre;
    adiniz.value=myObj.adiniz;
    soyadiniz.value=myObj.soyadiniz;
    adres.value=myObj.adres;
    ilçe.value=myObj.ilçe;
    ülke.value=myObj.ülke;
    email.value=myObj.email;
    EvNumarasi.value=myObj.EvNumarasi;
    CepNumarasi.value=myObj.CepNumarasi;
    İşNumarasi.value=myObj.İşNumarasi;
    Tarih.value=myObj.Tarih;


}
function kaydet()
{
    let adiniz = document.getElementById("adiniz");
    let soyadiniz = document.getElementById("soyadiniz");
    let adres = document.getElementById("adres");
    let ilçe = document.getElementById("ilçe");
    let ülke = document.getElementById("ülke");            
    let email = document.getElementById("email");
    let EvNumarasi = document.getElementById("EvNumarasi");
    let CepNumarasi = document.getElementById("CepNumarasi");
    let İşNumarasi = document.getElementById("İşNumarasi");
    let Tarih = document.getElementById("Tarih");
    let Şifre = document.getElementById("şifre");
    sonuc.style="color:red";
    if(adiniz.value.length<=2)
    {
        sonuc.innerHTML="adiniz en az 3 karakter olmalidir--";
        return ;
    }
    if(soyadiniz.value.length<=2)
    {
        sonuc.innerHTML="Soyadiniz en az 3 karakter olmalidir--";
        return ;
    }
    if(adres.value.length<=10)
    {
        sonuc.innerHTML="adres uzunlugu en az 10 karakter olmali--";
        return ;
    }
    if(ilçe.value.length<=2)
    {
        sonuc.innerHTML="ilçe uzunlugu en az 2 karakter olmali--";
        return ;
    }
    if(ülke.value.length>=18)
    {
        sonuc.innerHTML="bir ülke seçiniz--";
        return ;
    }
    if(email.value.length<=5)
    {
        sonuc.innerHTML="Email uzunlugu en az 5 karakter olmali--";
        return ;
    }
    if(EvNumarasi.value.length<9 && EvNumarasi.value.length>11)
    {
        sonuc.innerHTML="Ev Numarasi uzunlugu 10 karakter olmali--";
        return ;
    }
    if(CepNumarasi.value.length<9)
    {
        sonuc.innerHTML="Cep Numarasi uzunlugu 10 karakter olmali--";
        return ;
    }
    if(İşNumarasi.value.length<9)
    {
        sonuc.innerHTML="İş Numarasi uzunlugu 10 karakter olmali--";
        return ;
    }
    if(Şifre.value.length<5)
        {
            sonuc.innerHTML="şifre  5 den büyük olmalı--";
            return ;
        }
    
    // javascript objesi
    var kayit=
    {
        adiniz:adiniz.value,
        soyadiniz:soyadiniz.value,
        adres:adres.value,
        ilçe:ilçe.value,
        ülke:ülke.value,
        email:email.value,
        EvNumarasi:EvNumarasi.value,
        CepNumarasi:CepNumarasi.value,
        İşNumarasi:İşNumarasi.value,
        Şifre:Şifre.value,
        Tarih:Tarih.value};
    console.log(kayit);

    localStorage.setItem("kayit", JSON.stringify(kayit));
}