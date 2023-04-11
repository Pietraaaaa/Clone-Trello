+
// função para adicionar nova lista
function addList() {
	// obter o elemento de lista de quadros
	const lists = document.getElementById('lists');
	// criar o novo elemento de lista
	const newList = document.createElement('div');
	newList.classList.add('list');
	// criar o elemento de título
	const title = document.createElement('h2');
	title.textContent = `Lista ${lists.childElementCount + 1}`;
	// criar o elemento de lista de tarefas
	const taskList = document.createElement('ul');
	taskList.classList.add('task-list');
	taskList.id = `list${lists.childElementCount + 1}`;
	// adicionar a nova lista ao elemento de lista de quadros
	newList.appendChild(title);
	newList.appendChild(taskList);
	// criar o botão para adicionar tarefas
	const addTaskBtn = document.createElement('button');
	addTaskBtn.classList.add('add-task-btn');
	addTaskBtn.textContent = 'Adicionar Tarefa';
	addTaskBtn.setAttribute('onclick', `addTask('list${lists.childElementCount + 1}')`);
	// adicionar o botão à nova lista
	newList.appendChild(addTaskBtn);
	// adicionar a nova lista ao elemento de lista de quadros
	lists.appendChild(newList);
}

// Selecione o botão "Excluir"
const btnExcluir = document.querySelector('.excluir-quadro');

// Adicione um manipulador de eventos de clique ao botão "Excluir"
btnExcluir.addEventListener('click', function() {
  // Selecione o elemento de quadro correspondente
  const quadro = document.querySelector('list');
  
  // Remova o elemento de quadro correspondente usando a função removeChild()
  quadro.parentNode.removeChild(list);
});