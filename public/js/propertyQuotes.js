$("#quoteImageContainer").on("click", function (event) {
  event.stopPropagation();
  console.log(event.target.parentElement.id);
});
