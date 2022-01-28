<div class="parent">
  I am the parent.
  <div id="me" class="child" style="color: red;">
    I am the child
  </div>
</div>

<style>
/* 0.1.0.0 */
#me {
  color: orange;
}

/* 0.0.2.0 */
.parent > .child {
  color: yellow;
}

/* 0.0.2.0 */
.parent .child {
  color: green;
}

/* 0.0.1.0 */
.child {
  color: blue;
}

/* 0.0.1.0 */
.parent {
  color: purple;
}
</style>
