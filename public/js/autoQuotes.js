const quoteModal = $("#quoteModal");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

$("#quoteImageContainer").on("click", function (event) {
  event.stopPropagation();
  console.log(event.target.parentElement.id);
  quoteModal.show();
});

//When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  quoteModal.hide();
};

//When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == quoteModal) {
    quoteModal.hide();
  }
};
