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