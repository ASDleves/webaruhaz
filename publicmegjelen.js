import { KUTYALISTA} from "./adat.js";
$(() => {
  const container = $('#card-container');
  const nevreKeres = $('#nev');
  const fajtaKeres = $('#fajta');

  $.each(KUTYALISTA, (i, kutya) => {
    const card = $('<div>').addClass('card');
    const cardBody = $('<div>').addClass('card-body');
    const cim = $('<h2>').addClass('cim').text(kutya.neve);
    const faj = $('<p>').addClass('fajta').text(`Fajta: ${kutya.fajtaja}`);
    const kep = $('<img>').attr('src', kutya.kep).addClass('card-img-top');
    const kor = $('<p>').addClass('card-text').text(`Kor: ${kutya.kora}`);
    const megvizsgal = $('<button>').addClass('openModal').text(`megvizsgál`);
    const kosarba = $('<button>').addClass('kosarbatesz btn btn-success').text(`kosárba tesz`);

    // Add the elements to the card
    cardBody.append(cim, faj, kep, kor, megvizsgal, kosarba);
    card.append(cardBody);
    container.append(card);
  });
  var modal = $("#myModal");

  // Get the button that opens the modal
  var btn = $(".openModal");

  // Get the <span> element that closes the modal
  var span = $(".close")[0];

  // When the user clicks on the button, open the modal and start the slideshow
  btn.click(function() {
    modal.css("display", "block");
    slideshowIndex = 0;
    showSlideshow();
  });

  // When the user clicks on <span> (x), close the modal
  $(span).click(function() {
    modal.css("display", "none");
  });
  $("#prevBtn").on("click", function() {
    showSlideshow(-1); // Change to previous image
  });

  $("#nextBtn").on("click", function() {
    showSlideshow(1); // Change to next image
  });

  // Slideshow logic
  var slideshowIndex = 0;

  function showSlideshow() {
    var images = $(".slideshow").find("img");
    images.css("display", "none");
    slideshowIndex++;
    if (slideshowIndex > images.length) {
      slideshowIndex = 1;
    }
    $(images[slideshowIndex - 1]).css("display", "block");
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
  const torolgomb = $('<br><button>').addClass('torles').text(`Törlés`)
  ujkartyaTartalom.append(divContent);
  ujkartyaTartalom.append(torolgomb)
  ujkartya.append(ujkartyaTartalom);
  $('.kosarbahelyezes').append(ujkartya);
  removedDiv.parents('.card').remove();
  ujkartya.find('.kosarbatesz').remove();
});

$('.torles').on('click', function() {
  const amittorol = $(this).closest('div').data("index");
  const removedDiv = $(`div[data-index='${amittorol}']`);
  const divContent = removedDiv.html();
  let ujkartya = $('<div>').addClass('card');
  let ujkartyaTartalom = $('<div>').addClass('card-body');
  const kosarba = $('<br><button>').addClass('kosarbatesz').text(`kosárba tesz`)
  ujkartyaTartalom.append(divContent);
  ujkartyaTartalom.append(kosarba)
  ujkartya.append(ujkartyaTartalom);
  $('#card-container').append(ujkartya);
  removedDiv.parents('.card').remove();
  ujkartya.find('.torles').remove();
});

});

