function kontrolEt()
{
   let kayit= localStorage.getItem("kayit");
   let myObj = JSON.parse(kayit);
   console.log(kayit);
   console.log(myObj)
    let adiniz = document.getElementById("adiniz");
    let soyadiniz = document.getElementById("soyadiniz");
    let adres = document.getElementById("adres");
    let ilçe = document.getElementById("ilçe");
    let il = document.getElementById("il");
    let PostaKodu = document.getElementById("PostaKodu");
    let ülke = document.getElementById("ülke");            
    let email = document.getElementById("email");
    let EvNumarasi = document.getElementById("EvNumarasi");
    let CepNumarasi = document.getElementById("CepNumarasi");
    let İşNumarasi = document.getElementById("İşNumarasi");
    let Websitesi = document.getElementById("Websitesi");
    let Tarih = document.getElementById("Tarih");
    let sonuc = document.getElementById("sonuc");
    adiniz.value=myObj.adiniz;
    soyadiniz.value=myObj.soyadiniz;
    adres.value=myObj.adres;
    ilçe.value=myObj.ilçe;
    il.value=myObj.il;
    PostaKodu.value=myObj.PostaKodu;
    ülke.value=myObj.ülke;
    email.value=myObj.email;
    EvNumarasi.value=myObj.EvNumarasi;
    CepNumarasi.value=myObj.CepNumarasi;
    İşNumarasi.value=myObj.İşNumarasi;
    Websitesi.value=myObj.Websitesi;
    Tarih.value=myObj.Tarih;


}
function kaydet()
{
    let adiniz = document.getElementById("adiniz");
    let soyadiniz = document.getElementById("soyadiniz");
    let adres = document.getElementById("adres");
    let ilçe = document.getElementById("ilçe");
    let il = document.getElementById("il");
    let PostaKodu = document.getElementById("PostaKodu");
    let ülke = document.getElementById("ülke");            
    let email = document.getElementById("email");
    let EvNumarasi = document.getElementById("EvNumarasi");
    let CepNumarasi = document.getElementById("CepNumarasi");
    let İşNumarasi = document.getElementById("İşNumarasi");
    let Websitesi = document.getElementById("Websitesi");
    let Tarih = document.getElementById("Tarih");
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
    if(il.value.length<=2)
    {
        sonuc.innerHTML="il uzunlugu en az 2 karakter olmali--";
        return ;
    }
    if(PostaKodu.value.length<=4)
    {
        sonuc.innerHTML="PostaKodu uzunlugu en az 5 karakter olmali--";
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
    
    // javascript objesi
    var kayit=
    {
        adiniz:adiniz.value,
        soyadiniz:soyadiniz.value,
        adres:adres.value,
        ilçe:ilçe.value,
        il:il.value,
        PostaKodu:PostaKodu.value,
        ülke:ülke.value,
        email:email.value,
        EvNumarasi:EvNumarasi.value,
        CepNumarasi:CepNumarasi.value,
        İşNumarasi:İşNumarasi.value,
        Websitesi:Websitesi.value,
        Tarih:Tarih.value};
    console.log(kayit);

    localStorage.setItem("kayit", JSON.stringify(kayit));
}