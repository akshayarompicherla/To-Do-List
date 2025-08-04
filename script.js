function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  li.innerHTML = `${taskText}
    <button class="delete-btn" onclick="removeTask(this)">✖</button>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
function removeTask(button) {
  const li = button.parentElement;
  li.classList.add("fade-out");
  li.addEventListener("animationend", () => {
    li.remove();
  });
}
