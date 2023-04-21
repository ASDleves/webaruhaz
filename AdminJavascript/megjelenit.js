import { kulcsLista } from "./adat.js";
import { hozzaadatablahoz, rendezesbetu, rendezesbetuVissza, szamrendezes, szamrendezesVissza,} from "./rendezes.js";
import { listamunka } from "./rendezes.js"
import { adatTorol } from "./adattorles.js";


let kattint = 0
export let deletedRows = []
export function init(){
  $(".hozzaadful").hide()
  $(".mentes").hide()
  let NevreRendez = document.getElementById('neve')
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
    let FajtaraRendez = document.getElementById('fajtaja')
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
    let korraRendez = document.getElementById('kora')
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
  export function adatMegjelenit(lista) {

    let txt = "<div id= 'tablaegybe' class = 'table-responsive'>"
    txt += "<table id='MyTable' class= 'table table-striped table-bordered table-hover'>";
    txt += "<thead class = 'table-dark'><tr>";
    
    for (const key in kulcsLista){
      txt += `<th id ='${key}'> ${kulcsLista[key]}</th>`; 
    }
    txt += "<th>Módosítás</th>"
    txt += "<th></th></tr></thead>"
  
    for (let index = 0; index < lista.length; index++) {
  
      txt += '<tr>'
      const object = lista[index];
      for (const key in object){
        const element = object[key]
        if(key == nev){
          txt += `<th> ${element} </th>`
        } else if(key == "kep") {
          txt += `<td><img src="${element}" alt="${index}"></td>`
        
        }else {
          txt += `<td> ${element} </td>`
        }
      }
      txt += `<td>
              <button class="mentes"> Mentés </button>  
              <button class="modosit"> Módosítás </button>  
              </td>`;
      txt += `<td><button class="delete-btn"type="button">❌</td>`;
      txt += `</tr>`    
    }
    txt += '</table>'
    txt += '</div>'
    
    let hely = $('article')
    return hely.append(txt);
    
  }
      


