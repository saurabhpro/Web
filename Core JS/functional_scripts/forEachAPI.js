const forEachObject = (obj, fn) => {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      //calls the fn with key and value as its argument
      fn(property, obj[property]);
      //obj.property didnt work because its not fixed constant but a vairable
    }
  }
};

let object = { a: 1, b: 2 };
forEachObject(object, (k, v) => console.log('key -' + k + ':' + v));
