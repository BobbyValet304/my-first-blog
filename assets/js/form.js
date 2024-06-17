const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const usernameInput = document.querySelector("#username").value;
  const blogtitleInput = document.querySelector("#blogtitle").value;
  const blogcontentInput = document.querySelector("#blogcontent").value;
  const Inputs = {
    username: usernameInput,
    blogtitle: blogtitleInput,
    blogcontent: blogcontentInput,
  };
  localStorage.setItem("Inputs", JSON.stringify(Inputs));
  console.log("This is a test");
});
