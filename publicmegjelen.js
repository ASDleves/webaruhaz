import { KUTYALISTA} from "./adat.js";
$(() => {
    const container = $('#card-container');
    const nevreKeres = $('#nev');
    const fajtaKeres =  $('#fajta')
for (let i = 0; i < KUTYALISTA.length; i++) {
  const kutya = KUTYALISTA[i];
  const card = $('<div>').addClass('card');
  const cardBody = $('<div>').addClass('card-body')
  const cim = $('<h2>').addClass('cim').text(kutya.neve);
  const faj = $('<p>').addClass('fajta').text(`Fajta: ${kutya.fajtaja}`);
  const kor = $('<p>').addClass('card-text').text(`Kor: ${kutya.kora}`);
  const megvizsgal = $('<button>').addClass('megvizsgalas').text(`megvizsgál`)
  const kosarba = $('<br><button>').addClass('kosarbatesz').text(`kosárba tesz`)
  cardBody.append(cim);
  cardBody.append(faj);
  cardBody.append(kor);
  cardBody.append(megvizsgal)
  cardBody.append(kosarba)
  card.append(cardBody);
  container.append(card);
}

function nevkeres(name) {
  const cards = container.find('.card');
  cards.each(function() {
    const knev = $(this).find('.cim');
    if (knev.text().toLowerCase().includes(name.toLowerCase())) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}
function fajtakereses(fajta) {
  const cards = container.find('.card');
  cards.each(function() {
    const kfajta = $(this).find('.fajta');
    if (kfajta.text().toLowerCase().includes(fajta.toLowerCase())) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

nevreKeres.on('input', function() {
  const nev = $(this).val();
  nevkeres(nev);
});
fajtaKeres.on('input', function() {
  const fajok = $(this).val();
  fajtakereses(fajok);
});
$('div').each(function(index) {
  $(this).attr('data-index', index/2);
});
$('.kosarbatesz').on('click', function() {
  const amittorol = $(this).closest('div').data("index");
  const removedDiv = $(`div[data-index='${amittorol}']`);
  const divContent = removedDiv.html();
  let ujkartya = $('<div>').addClass('card');
  let ujkartyaTartalom = $('<div>').addClass('card-body');
  ujkartyaTartalom.append(divContent);
  ujkartya.append(ujkartyaTartalom);
  $('.kosarbahelyezes').append(ujkartya);
  removedDiv.parents('.card').remove();
});
})