import {writable} from 'svelte/store';

export const employeesStore = writable([], async set => {
  const res = await fetch('/api/employees.json');
  const {data, status} = await res.json();
  set(data);
  return () => {};
});
