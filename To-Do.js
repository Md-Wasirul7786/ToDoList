const subBtn = document.querySelector(".TaskBtn");
const title = document.querySelector("#title");
const desc = document.querySelector("#description");
const delBtn = document.querySelector(".DeleteBtn");
//
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
  title.value = "";
  desc.value = "";
}
function deleteBtn() {
  localStorage.removeItem("todo");
  console.log("deleted");
}

subBtn.addEventListener("click", submitTask);
delBtn.addEventListener("click", deleteBtn);
