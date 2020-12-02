function printArray(a) {
  document.write("[ ");
  for (let i = 0; i < a.length; i++) {
    document.write(`${objToString(a[i])}`);

    if (i != a.length - 1) {
      if (typeof a[i] == "object") {
        document.write("<br />");
      } else {
        document.write(", ");
      }
    }
  }
  document.write(" ]<br />");
}

function objToString(obj) {
  if (typeof obj == "object") {
    let objStr = "";
    for (let prop in obj) {
      objStr+= `, ${prop}: ${obj[prop]}`;
    }

    return objStr.substr(2);
  }

  return obj;
}

var arr = [1, 5, 7, 2, 0, -1, 8];
printArray(arr);

arr.push(13);
printArray(arr);

var l = arr.push(17, 12, 42);
printArray(arr);
document.write(l + "<br />");

var el = arr.pop();
printArray(arr);
document.write(el + "<br />");

arr.unshift(1, 2, 3);
printArray(arr);

var el1 = arr.shift();
printArray(arr);
document.write(el1 + "<br />");

arr.sort();
printArray(arr);

arr.sort((a, b) => {
  return a - b;
});
printArray(arr);

var people = [
  {
    name: "Anna",
    gender: "female",
    age: 21
  },
  {
    name: "Boris",
    gender: "male",
    age: 45
  },
  {
    name: "Misha",
    gender: "male",
    age: 45
  },
  {
    name: "Olga",
    gender: "female",
    age: 45
  },
  {
    name: "Elena",
    gender: "female",
    age: 19
  },
];
printArray(people);

people.sort((el1, el2) => {
  var ageComp = el1.age - el2.age;
  if (ageComp != 0) {
    return ageComp;
  }

  return -el1.name.localeCompare(el2.name);
});
printArray(people);

var peopleWithSkinColor = people.map((el) => {
  if (el.gender == "female") {
    el.skin = "black";
  } else {
    el.skin = "orange";
  }

  return el;
});
printArray(peopleWithSkinColor);

let numbers = [5, 3, 1, 4, 2];
let squares = numbers.map((a) => {
  return a**2; // a*a
}).sort((a, b) => {
  return a - b;
});
printArray(numbers);
printArray(squares);
