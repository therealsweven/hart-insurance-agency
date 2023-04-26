// format phone number
function phoneMask() {
  var num = $(this).val().replace(/\D/g, "");
  $(this).val(
    "(" +
      num.substring(0, 3) +
      ") " +
      num.substring(3, 6) +
      "-" +
      num.substring(6, 10)
  );
}

$('[type="tel"]').keyup(phoneMask);

// handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  const formInput = {
    type: $("#type").val(),
    name: $("#inputName").val().trim(),
    email: $("#inputEmail").val().trim(),
    phone: $("#inputPhone").val().trim(),
    message: $("#inputMessage").val().trim(),
  };
  console.log(formInput);
  const response = await fetch("/api/services/consult", {
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
$("#consultForm").submit(handleSubmit);
