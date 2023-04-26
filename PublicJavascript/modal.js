export function modalJelenites(){
  let modal = $("#myModal");
  let btn = $(".openModal");
  let span = $(".close")[0];

  btn.click(function() {
  let parentDiv = $(this).parent(); // Get the parent div of the clicked button
  let dataIndex = parentDiv.data("index"); // Get the value of the data-index attribute
  modal.css("display", "block");
  showSlideshow(dataIndex);
});

  $(span).click(function() {
    modal.css("display", "none");
    slideshowIndex = 0;
  });

  $("#prevBtn").on("click", function() {
    showSlideshow(-1);
  });

  $("#nextBtn").on("click", function() {
    showSlideshow(1);
  });

  let slideshowIndex = 0;

  function showSlideshow(n) {
    let images = $(".slideshow").find("img");
    images.css("display", "none");
    slideshowIndex += n;
    if (slideshowIndex > images.length) {
      slideshowIndex = 1;
    }
    if (slideshowIndex < 1) {
      slideshowIndex = images.length;
    }
    $(images[slideshowIndex - 1]).css("display", "block");
  }
}