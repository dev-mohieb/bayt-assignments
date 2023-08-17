const testArray = [1, 2, 7, 4, 2, 99];
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function all(array, callback) {
  return array.every((item) => (callback(item) ? true : false));
}

function contains(obj, targetValue) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const keyValue = obj[key];

      if (keyValue === targetValue) {
        return true;
      }

      if (typeof keyValue === "object") {
        if (contains(keyValue, targetValue)) {
          return true;
        } else return false;
      }
    }
  }
}
