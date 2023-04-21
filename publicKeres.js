export function keres(name) {
    const container = $('#card-container');
    const cards = container.find('.card');
    cards.each(function() {
      if( name === nev){
        const keres = $(this).find('.cim');
      if (keres.text().toLowerCase().includes(name.toLowerCase())) {
        $(this).show();
      } else {
        $(this).hide();
      }
      }else{
        const kfajta = $(this).find('.fajta');
      if (kfajta.text().toLowerCase().includes(name.toLowerCase())) {
        $(this).show();
      } else {
        $(this).hide();
      }
      }
    });
  }
  