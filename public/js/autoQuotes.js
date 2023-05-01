$("#quoteImageContainer").on("click", function (event) {
  event.stopPropagation();
  console.log(event.target.parentElement.id);
  if (event.target.parentElement.id === "auto") {
    window.location.replace("/quotes/auto");
  } else if (event.target.parentElement.id === "moto") {
    window.location.replace("/quotes/moto");
  } else if (event.target.parentElement.id === "atv") {
    window.location.replace("/quotes/atv");
  } else if (event.target.parentElement.id === "rv") {
    window.location.replace("/quotes/RV");
  } else if (event.target.parentElement.id === "boat") {
    window.location.replace("/quotes/boat");
  } else if (event.target.parentElement.id === "classicCar") {
    window.location.replace("/quotes/classicCar");
  }
});
