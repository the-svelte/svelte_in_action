import {derived} from 'svelte/store';
import {dogStore} from './dogStore';

export const bigDogsStore = derived(dogStore, $dogStore =>
  Object.values($dogStore).filter(dog => dog.size === 'large')
);
