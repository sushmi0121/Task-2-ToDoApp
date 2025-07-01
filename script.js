// To-Do List Logic
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = taskInput.value.trim();

  if (task === '') {
    errorMessage.textContent = "Task can't be empty.";
    return;
  }

  errorMessage.textContent = '';

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => taskList.removeChild(li);

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Mark Done';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
    completeBtn.textContent = li.classList.contains('completed') ? 'Undo' : 'Mark Done';
  };

  const btnGroup = document.createElement('div');
  btnGroup.className = 'btn-group';
  btnGroup.appendChild(completeBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  taskInput.value = '';
});

// Contact Form Logic
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload
  alert("Thank you for contacting us, we'll get back to you soon!");
  contactForm.reset();
});
