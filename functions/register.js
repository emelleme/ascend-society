document.forms.fileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = document.querySelector(".result");
  const form = event.target;

  // Create a FormData object to collect form data
  const formData = new FormData(form);

  // Convert FormData to JSON
  const jsonData = {};
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  // Send the form data to the server
  fetch("/register", {
    body: JSON.stringify(jsonData),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      result.innerText = "Success";
    })
    .catch((error) => {
      result.innerText = `Failed: ${error}`;
    });
});
