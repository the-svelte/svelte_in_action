<script>
    import {onMount} from 'svelte';

  let employees = [];
  let message;

  onMount(getEmployees);

  async function getEmployees() {
    const res = await fetch('api/employees.json');
    const json = await res.json();

    if (json.status === 'success') {
      employees = json.data.sort((e1, e2) => e1.employee_name.localeCompare(e2.employee_name));
      message = '';
    } else {
      employees = [];
      message = json.status;
    }
  }
</script>

<table class="table">
  <caption>Employees</caption>
  <thead>
    <tr>
      <td>Name</td>
      <td>Age</td>
    </tr>
  </thead>
  <tbody>
    {#each employees as employee}
      <tr>
        <td>{employee.employee_name}</td>
        <td>{employee.employee_age}</td>
      </tr>
    {/each}
  </tbody>
</table>
{#if message}
  <div>Failed: {message}</div>
{/if}
