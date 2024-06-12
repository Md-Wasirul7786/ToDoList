const subBtn = document.querySelector(".TaskBtn");
const title = document.querySelector("#title");
const desc = document.querySelector("#description");
const delBtn = document.querySelector(".DeleteBtn");
const todo = document.querySelector("#todo");
const aboutLink = document.querySelector("#About-link");
const contents = document.querySelector("#content");
//about Details
function displayAboutDetails() {
  const aboutContentDetails = `
<div id="about-details">
<h1>About Us </h1>
<p>Welcome to our website ! We are  dedicated to providing the best  service possibles. </p>
<p>Our team is composed of experience proffesionals who are passionate about their work. </p>
<p>Contact us for more information. </p>
</div>`;
  contents.innerHTML = aboutContentDetails;
  document.getElementById("about-details").style.display = "block";
}

// store in Local storage and get it to display data
function submitTask() {
  if (title.value === "" && desc.value === "") {
    alert("please enter Title value or Description value");
    return;
  }
  const todotask = {
    title: title.value,
    desc: desc.value,
  };
  // console.log(todotask.title);
  const stringObj = JSON.stringify([todotask.title, todotask.desc]);
  localStorage.setItem("todo", stringObj);
  console.log(stringObj);

  let Taskelment = document.createElement("div");
  Taskelment.classList = "card";
  Taskelment.innerHTML = `<h1>${todotask.title}</h1>
                        <p>${todotask.desc}</p>`;
  todo.appendChild(Taskelment);
  title.value = "";
  desc.value = "";
}
function deleteBtn() {
  localStorage.removeItem("todo");
  console.log("deleted");
}
subBtn.addEventListener("click", submitTask);
delBtn.addEventListener("click", deleteBtn);
aboutLink.addEventListener("click", displayAboutDetails);
