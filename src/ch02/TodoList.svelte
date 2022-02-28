<script>
  import Todo from './Todo.svelte';

  let lastId = 0;

  const createTodo = (text, done = false) => ({id: ++lastId, text, done});

  let todoText = '';

  let todos = [
    createTodo('learn Svelte', true),
    createTodo('Build a Sveltew'),
  ];

  $: uncompletedCount = todos.filter(t => !t.done).length;
  $: status = `${uncompletedCount} of ${todos.length} remaining`;

  function addTodo() {
    todos = todos.concat(createTodo(todoText));
    todoText = '';
  }

  function archiveCompleted() {
    todos = todos.filter(t => !t.done);
  }

  function deleteTodo(todoId) {
    todos = todos.filter(t => t.id !== todoId);
  }

  function toggleDone(todo) {
    const {id} = todo;
    todos = todos.map(t => (t.id === id ? {...t, done: !t.done}: t));
  }
</script>

<div>
  <h2>To Do List</h2>
  <div>
    {status}
    <button on:click={archiveCompleted}>Archive Completed</button>
  </div>
  <form on:submit|preventDefault>
    <input data-testid="todo-input" bind:value={todoText} placeholder="enter new todo here" />
    <button disabled={!todoText} on:click={addTodo}>Add</button>
  </form>
  <ul>
    {#each todos as todo}
      <Todo
        {todo}
        on:delete={() => deleteTodo(todo.id)}
        on:toggleDone={() => toggleDone(todo)}
      />
    {/each}
  </ul>
</div>
