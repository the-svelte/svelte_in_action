import {readable} from 'svelte/store';

export const employeesStore = readable([], async set => {
  const res = await fetch('/api/employees.json');
  const {data, status} = await res.json();
  set(data);
  return () => {};
});
