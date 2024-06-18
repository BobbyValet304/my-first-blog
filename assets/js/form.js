const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let blogs = [];
  const usernameInput = document.querySelector("#username").value;
  const blogtitleInput = document.querySelector("#blogtitle").value;
  const blogcontentInput = document.querySelector("#blogcontent").value;
  const Inputs = {
    username: usernameInput,
    blogtitle: blogtitleInput,
    blogcontent: blogcontentInput,
  };
  if (!usernameInput || !blogtitleInput || !blogcontentInput) {
    alert("Please fill in all the fields!");
  } else {
    let currentInputs = JSON.parse(localStorage.getItem("Inputs")) || [];
    currentInputs.push(Inputs);

    localStorage.setItem("Inputs", JSON.stringify(currentInputs));
    window.location.href = "./blog.html";
    console.log("This is a test");
  }
});
