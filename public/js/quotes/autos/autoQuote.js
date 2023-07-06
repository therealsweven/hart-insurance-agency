// handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  // Object of form data
  var quoteInfo = {
    vehicles: {
      vehicle1: {
        VIN: $("#primaryVIN").val(),
        year: $("#primaryYear").val(),
        make: $("#primaryMake").val(),
        model: $("#primaryModel").val(),
        workSchoolYN: $("#primaryWorkSchoolYN").val(),
        workSchoolDistance: $("#primaryWorkSchoolDistance").val(),
        annualMileage: $("#primaryAnnualMileage").val(),
        leasedYN: $("#primaryLeasedYN").val(),
        collisionDeductible: $("#primaryCollisionDeductible").val(),
        compDeduct: $("#primaryCompDeduct").val(),
      },
      vehicle2: {
        VIN: $("#secondaryVIN").val(),
        year: $("#secondaryYear").val(),
        make: $("#secondaryMake").val(),
        model: $("#secondaryModel").val(),
        workSchoolYN: $("#secondaryWorkSchoolYN").val(),
        workSchoolDistance: $("#secondaryWorkSchoolDistance").val(),
        annualMileage: $("#secondaryAnnualMileage").val(),
        leasedYN: $("#secondaryLeasedYN").val(),
        collisionDeductible: $("#secondaryCollisionDeductible").val(),
        compDeduct: $("#secondaryCompDeduct").val(),
      },
      vehicle3: {
        VIN: $("#car3VIN").val(),
        year: $("#car3Year").val(),
        make: $("#car3Make").val(),
        model: $("#car3Model").val(),
        workSchoolYN: $("#car3WorkSchoolYN").val(),
        workSchoolDistance: $("#car3WorkSchoolDistance").val(),
        annualMileage: $("#car3AnnualMileage").val(),
        leasedYN: $("#car3LeasedYN").val(),
        collisionDeductible: $("#car3CollisionDeductible").val(),
        compDeduct: $("#car3CompDeduct").val(),
      },
      vehicle4: {
        VIN: $("#car4VIN").val(),
        year: $("#car4Year").val(),
        make: $("#car4Make").val(),
        model: $("#car4Model").val(),
        workSchoolYN: $("#car4WorkSchoolYN").val(),
        workSchoolDistance: $("#car4WorkSchoolDistance").val(),
        annualMileage: $("#car4AnnualMileage").val(),
        leasedYN: $("#car4LeasedYN").val(),
        collisionDeductible: $("#car4CollisionDeductible").val(),
        compDeduct: $("#car4CompDeduct").val(),
      },
    },
    operators: {
      op1: {
        name: $("#primaryName").val(),
        DL: $("#primaryDL").val(),
        gender: $("#primaryGender").val(),
        DOB: $("#primaryDOB").val(),
        marriedYN: $("#primaryMarriedYN").val(),
        employment: $("#primaryEmployment").val(),
      },
      op2: {
        name: $("#secondaryName").val(),
        DL: $("#secondaryDL").val(),
        DOB: $("#secondaryDOB").val(),
      },
      op3: {
        name: $("#op3Name").val(),
        DL: $("#op3DL").val(),
        DOB: $("#op3DOB").val(),
      },
      op4: {
        name: $("#op4Name").val(),
        DL: $("#op4DL").val(),
        DOB: $("#op4DOB").val(),
      },
    },
    additional: {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      address1: $("#address1").val(),
      address2: $("#address2").val(),
      city: $("#city").val(),
      state: $("#state").val(),
      zip: $("#zip").val(),
      country: $("#country").val(),
      email: $("#inputEmail").val(),
      phone: $("#inputPhone").val(),
      contactMethod: $('input[name="flexRadio"]:checked').val(),
      message: $("#inputMessage").val(),
    },
  };
  console.log(quoteInfo);
  const response = await fetch("/api/quote", {
    method: "POST",
    body: JSON.stringify(quoteInfo),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    $("#submitMessage").show();
    $("#formBody").hide();
  } else {
    alert("Something went wrong, please try again later.");
  }
};

//listen for submit
$("#autoQuoteForm").submit(handleSubmit);
