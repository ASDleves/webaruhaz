import { KUTYALISTA} from "./adat.js";
import { adatMegjelenit, init } from "./megjelenit.js";

$(() => {
  
    init(adatMegjelenit(KUTYALISTA))

    
      $(document).ready(function() {

        $("#nev, #kor, #fajta").keyup(function() {
          var nevErtek = $("#nev").val().toLowerCase();
          var fajErtek = $("#fajta").val().toLowerCase();
          var korErtek = $("#kor").val();
          $("tbody tr").each(function() {
            var nev = $(this).find("td:first").text().toLowerCase();
            var faj = $(this).find("td:nth-child(2)").text().toLowerCase();
            var kor = $(this).find("td:nth-child(3)").text();

            if (nev.indexOf(nevErtek) !== -1 && kor.indexOf(korErtek) !== -1 && faj.indexOf(fajErtek) !== -1) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        });
      });

});