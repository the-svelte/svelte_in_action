import {writable, derived} from "svelte/store";

export const cartStore = writable([]);

export const totalPrice = derived(
  cartStore,
  store => store.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const shippingPrice = derived(
  totalPrice,
  total => total === 0 ? 0 : total < 10 ? 2 : total < 30 ? 6 : 10
);
