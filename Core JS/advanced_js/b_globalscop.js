function loo() {
  var goo = 1;
  moo();
}

function moo() {
  console.log(goo);
}

loo();

/*Correct, the scope chain lookup rules follow how the code is written on the page. The moo function doesn't see the goo variable either in it's local or outer global scope so the javascript engine throws an error.*/
