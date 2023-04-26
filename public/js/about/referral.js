// handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  const formInput = {
    clientName: $("#inputName").val().trim(),
    clientEmail: $("#inputEmail").val().trim(),
    friendName: $("#inputFriendName").val().trim(),
    friendEmail: $("#inputFriendEmail").val().trim(),
    message: $("#inputMessage").val().trim(),
  };
  console.log(formInput);
  const response = await fetch("/api/about/refer", {
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
$("#referralForm").submit(handleSubmit);
