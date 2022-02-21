<script>
  import {employeesStore} from './readableStore0.js';
</script>

<div>
  {#each $employeesStore as employee}
  <p>{employee.employee_name} : {employee.employee_age}</p>
  {/each}
</div>
