export function modalJelenites(){
    let modal = $("#myModal");
    let btn = $(".openModal");
    let span = $(".close")[0];

  btn.click(function() {
    modal.css("display", "block");
    slideshowIndex = 0;
    showSlideshow();
  });

  $(span).click(function() {
    modal.css("display", "none");
  });

  $("#prevBtn").on("click", function() {
    showSlideshow(-1);
  });

  $("#nextBtn").on("click", function() {
    showSlideshow(1);
  });

  let slideshowIndex = 0;

  function showSlideshow() {
    let images = $(".slideshow").find("img");
    images.css("display", "none");
    slideshowIndex++;
    if (slideshowIndex > images.length) {
      slideshowIndex = 1;
    }
    $(images[slideshowIndex - 1]).css("display", "block");
  }
}
