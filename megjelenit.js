import { kulcsLista } from "./adat.js";
import { hozzaadatablahoz, rendezesbetu, rendezesbetuVissza, szamrendezes, szamrendezesVissza,} from "./rendezes.js";
import { listamunka } from "./rendezes.js"
let kattint = 0
export let deletedRows = []
export function init(){
  $(".hozzaadful").hide()
  $(".mentes").hide()
  var NevreRendez = document.getElementById("neve");
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
  var FajtaraRendez = document.getElementById("fajtaja");
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
    var korraRendez = document.getElementById("kora");
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
    $(document).ready(function() {
      $(".delete-btn").click(function() {
        var row = $(this).closest("tr");
      
        deletedRows.push({
          neve: row.find("td:eq(0)").text().trim(),
          fajtaja: row.find("td:eq(1)").text().trim(),
          kora: parseInt(row.find("td:eq(2)").text().trim()),
        });
        row.remove();
        console.log(deletedRows)    
      });
  
      }  )
      $(document).on('click', '.modosit', function() {
        var rowData = {};
        $(this).parent().siblings('td:not(:last-child)').each(function(index) {
          var content = $(this).html();
          if (!$(this).has('input').length) { // check if td element already contains an input element
            $(this).html('<input value="' + content + '" />');
          }
          if (index === 0) {
            rowData.neve = content.trim();
          } else if (index === 1) {
            rowData.fajtaja = content.trim();
          } else if (index === 2) {
            rowData.kora = parseInt(content.trim());
          }
        });
        deletedRows.push(rowData);
        console.log(deletedRows)
        $(this).siblings('.mentes').show();  
        $(this).hide();  
      });  
      $(document).on('click', '.mentes', function() { 
        
        $('input').each(function() {  
          var content = $(this).val();  
          $(this).html(content);  
          $(this).contents().unwrap(); 
          
          });
          var row = $(this).closest("tr");
          listamunka.push({
            neve: row.find("td:eq(0)").text().trim(),
            fajtaja: row.find("td:eq(1)").text().trim(),
            kora: parseInt(row.find("td:eq(2)").text().trim()),
        });
        $(this).siblings('.modosit').show(); 
        $(this).siblings('.mentes').hide();  
        $(this).hide();  

      });

      var hozzaad = document.getElementById("hozzaadas")
      $(hozzaad).click(() => {
        $(".hozzaadful").show()
      var elmentes = document.getElementById("elment")
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
      } else {
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
export function adatTorol(){
  var tablatorles=document.getElementById("tablaegybe")
  tablatorles.remove()
}
