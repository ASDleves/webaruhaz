import { KUTYALISTA } from "../AdminJavascript/adat.js";

export function kartyaGeneralas(){
    const container = $('#card-container');
    $.each(KUTYALISTA, (i, kutya) => {
        const card = $('<div>').addClass('card');
        const cardBody = $('<div>').addClass('card-body');
        const cim = $('<h2>').addClass('cim').text(kutya.neve);
        const faj = $('<p>').addClass('fajta').text(`Fajta: ${kutya.fajtaja}`);
        const kor = $('<p>').addClass('card-text').text(`Kor: ${kutya.kora}`);
        const kep = $('<img>').attr('src', kutya.kep).addClass('card-img-top');
        const megvizsgal = $('<button>').addClass('openModal').text(`megvizsgál`);
        const kosarba = $('<br><button>').addClass('kosarbatesz btn btn-success').text(`kosárba tesz`);
        cardBody.append(cim, faj, kor, kep, megvizsgal, kosarba);
        card.append(cardBody);
        container.append(card);
      });
}

export function kosarKartyaGeneralas(){
    const kosarcontainer = $('#kosarbahelyezes')
    $.each(KUTYALISTA, (i, kutya) => {
        const card = $('<div>').addClass('card cardkosar');
        const cardBody = $('<div>').addClass('card-body');
        const cim = $('<h2>').addClass('cim').text(kutya.neve);
        const faj = $('<p>').addClass('fajta').text(`Fajta: ${kutya.fajtaja}`);
        const kor = $('<p>').addClass('card-text').text(`Kor: ${kutya.kora}`);
        const kep = $('<img>').attr('src', kutya.kep).addClass('card-img-top');
        
        const megvizsgal = $('<button>').addClass('openModal').text(`megvizsgál`);
        const torles = $('<br><button>').addClass('torles').text(`Törlés`);
    
        cardBody.append(cim, faj, kor, kep, megvizsgal, torles);
        card.append(cardBody);
        kosarcontainer.append(card);
        $('.cardkosar').hide();
      });

}
export function dataIndexadas(){
    $('div').each(function(index) {
        $(this).attr('data-index', index/2);
      });
      
}