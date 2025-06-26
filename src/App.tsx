import { useState, useEffect } from 'react'; // Importe useEffect se for usar para persistência
import './App.css';

// Definindo um tipo para as tarefas, que são strings
type Task = string;

// Definindo um tipo para o estado de edição
interface EditTaskState {
  enable: boolean;
  task: Task | ''; // A task pode ser uma string (a tarefa sendo editada) ou uma string vazia
}

export default function App() {
  const [input, setInput] = useState<string>("");

  // Usamos uma função para inicializar o estado de `tasks`
  // carregando do localStorage, se existir
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("@xavoso");
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks) as Task[];
      } catch (e) {
        console.error("Erro ao parsear tarefas do localStorage:", e);
        return []; // Retorna um array vazio em caso de erro de parsing
      }
    }
    return [
      'Estudar React com TypeScript',
      'Comprar pão meio dia',
      'Estudar inglês à noite'
    ];
  });

  const [editTask, setEditTask] = useState<EditTaskState>({
    enable: false,
    task: ''
  });

  // Usamos useEffect para salvar as tarefas no localStorage sempre que elas mudarem
  // Isso garante persistência e evita loops de renderização
  useEffect(() => {
    localStorage.setItem('@xavoso', JSON.stringify(tasks));
  }, [tasks]); // O efeito é executado sempre que o array 'tasks' muda

  function hEdit(item: Task) { // Tipando 'item' como Task (string)
    setInput(item);
    setEditTask({
      enable: true,
      task: item
    });
  }

  function handleRegister() {
    if (!input.trim()) { // Usar .trim() para verificar se o input não está vazio ou só com espaços
      alert('Por favor, adicione uma tarefa!');
      return;
    }

    if (editTask.enable) {
      hSaveEdit();
      return;
    }

    // Adiciona a nova tarefa
    setTasks(prevTasks => [...prevTasks, input]);
    setInput('');
    // O localStorage.setItem já está no useEffect, então não precisa aqui.
  }

  function hSaveEdit() {
    const findIndexTask = tasks.findIndex(task => task === editTask.task);

    if (findIndexTask === -1) { // Lidar com o caso de a tarefa não ser encontrada
      console.warn("Tarefa a ser editada não encontrada.");
      setEditTask({ enable: false, task: '' });
      setInput('');
      return;
    }

    const allTasks = [...tasks];
    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEditTask({
      enable: false,
      task: ''
    });
    setInput('');
    // O localStorage.setItem já está no useEffect, então não precisa aqui.
  }

  function bExcluir(item: Task) { // Tipando 'item' como Task (string)
    const removeTask = tasks.filter(task => task !== item);
    setTasks(removeTask);
    // O localStorage.setItem já está no useEffect, então não precisa aqui.
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input
        placeholder="Digite o nome da tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleRegister}>
        {editTask.enable ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
      </button>

      <hr />

      {tasks.length === 0 && (
        <p>Nenhuma tarefa adicionada ainda. Adicione uma nova!</p>
      )}

      {tasks.map((item, index) => (
        // Usar index como key é aceitável para listas simples que não mudam de ordem
        // e onde os itens não são adicionados/removidos do meio.
        // Para listas mais complexas, um ID único seria melhor.
        <section key={index}>
          <span>{item}</span>
          <button onClick={() => hEdit(item)}>Editar</button>
          <button onClick={() => { bExcluir(item) }}>Excluir</button>
        </section>
      ))}
    </div>
  );
}