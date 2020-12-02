function printArray(a) {
  document.write("[ ");
  for (let i = 0; i < a.length; i++) {
    document.write(`${a[i]}`);

    if (i != a.length - 1) {
      document.write(", ");
    }
  }
  document.write(" ]<br />");
}

var arr = [1, 5, 7, 2, 0, -1, 8];
printArray(arr);

arr.push(13);
printArray(arr);

arr.push(17, 12, 42);
printArray(arr);

var el = arr.pop();
printArray(arr);
document.write(el + "<br />");


