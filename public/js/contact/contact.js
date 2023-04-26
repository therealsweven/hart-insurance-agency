// handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  const formInput = {
    name: $("#inputName").val().trim(),
    email: $("#inputEmail").val().trim(),
    message: $("#inputMessage").val().trim(),
  };
  console.log(formInput);
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formInput),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    $("#successMessage").show();
    $("#formBody").hide();
  } else {
    alert("Something went wrong, please try again later.");
  }
};

//listen for submit
$("#contactForm").submit(handleSubmit);
