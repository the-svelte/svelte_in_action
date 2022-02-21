import {get, writable} from 'svelte/store';

export function pointStore(x, y) {
  const {subscribe, update} = writable({x, y});
  let cache = {x, y};
  return {
    subscribe,
    toString() {
      return `(${cache.x}, ${cache.y})`;
    },
    translate(dx, dy) {
      update(({x, y}) => {
        cache = {x: x + dx, y: y + dy};
        return cache;
      });
    },
  };
}

export function lineStore(start, end) {
  const {subscribe, update} = writable({start, end});
  return {
    subscribe,
    toString() {
      return `line from ${this.start.toString()} to ${this.end.toString()}`;
    },
    translate(dx, dy) {
      update(({start, end}) => {
        start.translate(dx, dy);
        end.translate(dx, dy);
        return {start, end};
      });
    },
  };
}
