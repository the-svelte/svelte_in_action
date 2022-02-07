<script>
  let employees = [];
  let message;

  async function getEmployees() {
    const url = '/api/employees.json';
    const res = await fetch(url);
    const json = await res.json();
    if (json.status === 'success') {
      return json.data.sort((e1, e2) => e1.employee_name.localeCompare(e2.employee_name));
    } else {
      throw new Error(json.status);
    }
  }
</script>

{#await getEmployees()}
  <div>Loading employees...</div>
{:then employees}
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
      {:else}
        <tr>
          <td colspan="2">No data...</td>
        </tr>
      {/each}
    </tbody>
  </table>

{:catch message}
  <div class="alert alert-error">Failed to retrieve employees: {message}</div>
{/await}
