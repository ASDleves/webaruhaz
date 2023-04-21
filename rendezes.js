import { KUTYALISTA} from "./adat.js";
import { adatMegjelenit } from "./tablazatmegjelenit.js";
import { init } from "./megjelenit.js";
import { deletedRows } from "./megjelenit.js";
export let listamunka = KUTYALISTA
export let ujlista = []
export function rendezesbetu(valasztas){ujlista = []
    ujlista = listamunka.map(kutya => ({
            neve: kutya.neve,
            fajtaja: kutya.fajtaja,
            kora: kutya.kora,
            kep: kutya.kep
          })).sort((a, b) => {
            const nameA = a[valasztas].toLowerCase();
            const nameB = b[valasztas].toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
          
          sortorles(ujlista, deletedRows);
          listamunka = ujlista
          init(adatMegjelenit(ujlista))
          duplicaltorol()
}

export function rendezesbetuVissza(valasztas){
   ujlista = []
  ujlista = listamunka.map(kutya => ({
    neve: kutya.neve,
    fajtaja: kutya.fajtaja,
    kora: kutya.kora,
    kep: kutya.kep
  })).sort((a, b) => {
    const nameA = a[valasztas].toLowerCase();
    const nameB = b[valasztas].toLowerCase();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  });
  
  sortorles(ujlista, deletedRows)
  listamunka = ujlista
  init(adatMegjelenit(ujlista));
  duplicaltorol()
}
export function szamrendezes(valasztas){
   ujlista = []
    ujlista = listamunka.sort((a, b) => a[valasztas] - b[valasztas]);
    
    sortorles(ujlista, deletedRows);
    listamunka = ujlista
    init(adatMegjelenit(ujlista))
    duplicaltorol()
}

export function szamrendezesVissza(valasztas){
    ujlista = []
    ujlista = listamunka.sort((b, a) => a[valasztas] - b[valasztas]);
    
    sortorles(ujlista, deletedRows);
    listamunka = ujlista
    init(adatMegjelenit(ujlista))
    duplicaltorol()
}
function sortorles(Listam, deletedRows) {
  console.log('Listam before:', Listam);
  console.log('Deleted rows:', deletedRows);

  for (let i = 0; i < deletedRows.length; i++) {
    const deletedRow = deletedRows[i];
    for (let j = 0; j < Listam.length; j++) {
      const currentRow = Listam[j];
      if (osszehasonlitas(deletedRow, currentRow)) {
        console.log('Deleting row:', currentRow);
        Listam.splice(j, 1);
        break; // Stop searching for the deleted row in Listam
      }
    }
  }

  console.log('Listam after:', Listam);
}
function osszehasonlitas(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let i = 0; i < obj1Keys.length; i++) {
    const key = obj1Keys[i];

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function duplicaltorol(){
  var table = $('#MyTable');
  var rows = table.find('tr');

  rows.each(function(rowIndex, row) {
    var elsoSor = $(row).find('td');
    var elsoElsoCella = $(elsoSor[0]).text();
    var elsoMasodikCella = $(elsoSor[1]).text();
    rows.each(function(otherRowIndex, otherRow) {
      if (otherRowIndex <= rowIndex) {
        return;
      }
      
      var másodikSor = $(otherRow).find('td');
      var másodikElsoCella = $(másodikSor[0]).text();
      var másodikMásodikCella = $(másodikSor[1]).text();
      
      if (elsoElsoCella === másodikElsoCella && elsoMasodikCella === másodikMásodikCella) {
        $(otherRow).remove()
      }
    });
});
}
export function hozzaadatablahoz(){
  var aneve = $(".nevad").val();
  var afajtaja = $(".fajtaad").val()
  var akorad = Number.isInteger(parseInt($(".korad").val())) ? parseInt($(".korad").val()) : 0;
  listamunka.push({
          neve: aneve,
          fajtaja: afajtaja,
          kora: akorad,
          kep: "kepek/kuty2.jpg",
        });
        init(adatMegjelenit(listamunka))
        duplicaltorol()
        const inputs = document.querySelectorAll('.nevad, .fajtaad, .korad');
        inputs.forEach(input => {
          input.value = '';
        });

  }
