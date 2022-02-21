import { readable } from 'svelte/store';

let value = 0;

export const tensStore = readable(
  value,
  set => {
    const token = setInterval(()=> {
      value += 10;
      set(value);
    }, 1000);
    return () => clearInterval(token);
  }
);
