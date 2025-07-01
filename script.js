const textarea = document.getElementById('text-input');
const counter = document.getElementById('char-count');
const limit = 50;

textarea.addEventListener('input', () => {
  let text = textarea.value;

  // Enforce limit without using `max-length`
  if (text.length > limit) {
    text = text.slice(0, limit);
    textarea.value = text;
  }

  // Update count
  const length = text.length;
  counter.textContent = `Character Count: ${length}/${limit}`;

  // Style when limit is reached
  if (length === limit) {
    counter.classList.add('limit-reached');
  } else {
    counter.classList.remove('limit-reached');
  }
});
