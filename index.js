const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter"); 

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
 totalCounterEl.innerText = textareaEl.value.length + " Characters";
}
