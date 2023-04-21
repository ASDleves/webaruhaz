import { kulcsLista } from "./adat.js";
import { hozzaadatablahoz, rendezesbetu, rendezesbetuVissza, szamrendezes, szamrendezesVissza,} from "./rendezes.js";
import { listamunka } from "./rendezes.js"
import { adatTorol } from "./adattorles.js";


let kattint = 0
export let deletedRows = []
export function init(){
  $(".hozzaadful").hide()
  $(".mentes").hide()
    $(NevreRendez).on("click", function() {
      if (kattint == 0){
        adatTorol()
        rendezesbetu('neve')
        kattint = 1
    }else{
        adatTorol()
        rendezesbetuVissza('neve')
        kattint = 0
    }
    })
    $(FajtaraRendez).click(() => {
      if (kattint == 0){
        adatTorol()
        rendezesbetu('fajtaja')
        kattint = 1
    }else{
        adatTorol()
        rendezesbetuVissza('fajtaja')
        kattint = 0
    }
    })
    $(korraRendez).click(() => {
      if (kattint == 0){
        adatTorol()
        szamrendezes('kora')
        kattint = 1
    }else{
        adatTorol()
        szamrendezesVissza('kora')
        kattint = 0
    }
    
    });
    $(".delete-btn").click(function() {
        var row = $(this).closest("tr");
        var imgSrc = row.find("td:eq(3) img").attr("src");
        deletedRows.push({
          neve: row.find("td:eq(0)").text().trim(),
          fajtaja: row.find("td:eq(1)").text().trim(),
          kora: parseInt(row.find("td:eq(2)").text().trim()),
          kep: imgSrc
        });
        row.remove();
        console.log(deletedRows)    
      });
  
    $('.modosit').click(function() {
        let rowData = {};
        $(this).parent().siblings('td:not(:last-child)').each(function(index) {
          let content = $(this).html();
          if (!$(this).has('input').length && !$(this).has('img').length) { 
            $(this).html('<input value="' + content + '" />');
          }
          if (index === 0) {
            rowData.neve = content.trim();
          } else if (index === 1) {
            rowData.fajtaja = content.trim();
          } else if (index === 2) {
            rowData.kora = parseInt(content.trim());
          } else if (index === 3) {
            let imgSrc = $(this).find('kep').attr('src');
            rowData.img = imgSrc;
          }
        });
        deletedRows.push(rowData);
        console.log(deletedRows)
        $(this).siblings('.mentes').show();  
        $(this).hide();  
      });
      $('.mentes').click( function() { 
        $('input').each(function() {  
          var content = $(this).val();  
          $(this).html(content);  
          $(this).contents().unwrap(); 
        });
        
        let row = $(this).closest("tr");
        let imgSrc = row.find("td:eq(3) img").attr("src");
        listamunka.push({
          neve: row.find("td:eq(0)").text().trim(),
          fajtaja: row.find("td:eq(1)").text().trim(),
          kora: parseInt(row.find("td:eq(2)").text().trim()),
          kep: imgSrc 
        });
        
        $(this).siblings('.modosit').show(); 
        $(this).siblings('.mentes').hide();  
        $(this).hide();  
      
      });

      let hozzaad = document.getElementById("hozzaadas")
      $(hozzaad).click(() => {
        $(".hozzaadful").show()
        deletedRows.push({
          neve: '',
          fajtaja: '',
          kora: 0,
          kep: "kepek/kuty2.jpg",
      })
      $(elmentes).click(() => {
        adatTorol()
        hozzaadatablahoz()
  })
      
  })}
      


