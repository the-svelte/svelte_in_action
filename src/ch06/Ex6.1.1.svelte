<script>
  import {employeesStore} from './writableStore1.js';
</script>

<div>
  {#each $employeesStore as employee}
  <p>{employee.employee_name} : {employee.employee_age}</p>
  {/each}
</div>
