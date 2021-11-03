$(function () {
    const termekek = [];
  
    adatbeolvasas("termekek.json", termekek, megjelenit);
    kiir();
    function megjelenit() {
      let txt = "";
      termekek.forEach((value, index) => {
        console.log("ez a value:" + value + "," + index);
  
        txt += "<div>";
        txt += "<h3>" + termekek[index].nev + "</h3>";
        txt += "<div class='kartyakep'> <img src='" + termekek[index].kep + "'></div>";
        txt += "<p>" + termekek[index].leiras + "</p>";
        txt += "<span>" + termekek[index].ar + " Ft</span>";
        txt += "</div>";
        
      });
      /*a txt-vel összeállt a html kód,
              ezt adjuk hozzá az article elemhez*/
      $("article").html(txt);
    }
  
    function adatbeolvasas(fajlnev, tomb, myCallback) {
      $.ajax({
        url: fajlnev,
        success: function (result) {
          console.log("result:" +result.termekek);
          result.termekek.forEach((value) => {
            tomb.push(value);
          });
          console.log("tömb: "+tomb);
  
          myCallback();
        },
      });
    }
  });