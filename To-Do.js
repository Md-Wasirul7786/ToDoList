const subBtn = document.querySelector(".TaskBtn");
const title = document.querySelector("#title");
const desc = document.querySelector("#description");
const delBtn = document.querySelector(".DeleteBtn");
const todo = document.querySelector("#todo");
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
  Taskelment.classList="card";
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
