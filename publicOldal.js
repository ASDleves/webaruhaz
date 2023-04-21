import { modalJelenites } from "./modal.js";
import { kartyaGeneralas, kosarKartyaGeneralas, dataIndexadas } from "./publicGeneral.js";
import { keres } from "./publicKeres.js";
$(() => { 
 
  const nevreKeres = $('#nev');
  const fajtaKeres = $('#fajta');
  kartyaGeneralas()
  kosarKartyaGeneralas()
  modalJelenites()
nevreKeres.on('input', function() {
  const nev = $(this).val();
  keres(nev);
});
fajtaKeres.on('input', function() {
  const fajok = $(this).val();
  keres(fajok);
});
dataIndexadas()

$('.kosarbatesz').click(function() {
  const amittorol = $(this).closest('div').data("index");
  const removedDiv = $(`div[data-index='${amittorol}']`);
  removedDiv.parents('.card').hide();
  const megjelendiv = $(`div[data-index='${amittorol+12}']`)
  megjelendiv.parents('.cardkosar').show()
})

$('.torles').click( function() {
  const amittorol = $(this).closest('div').data("index");
  const removedDiv = $(`div[data-index='${amittorol}']`);
  removedDiv.parents('.cardkosar').hide();
  const megjelendiv = $(`div[data-index='${amittorol-12}']`)
  megjelendiv.parents('.card').show()
});

});

