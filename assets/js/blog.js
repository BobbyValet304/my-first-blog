const toggleButton = document.getElementById("dark-mode-btn");
const blogSelection = document.getElementById("blog-selection");
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
toggleButton.addEventListener("click", myFunction);
localStorage.getItem("Inputs");

function createBlogs() {
  const blogs = JSON.parse(localStorage.getItem("Inputs"));
  for (let index = 0; index < blogs.length; index++) {
    console.log(blogs[index].username);
    console.log(blogs[index].blogtitle);
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.textContent = "Username:" + blogs[index].username;
    p2.textContent = "Blog Title:" + blogs[index].blogtitle;
    p3.textContent = "Blog Content:" + blogs[index].blogcontent;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    blogSelection.appendChild(div);
  }
}

createBlogs();
