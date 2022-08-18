const input = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

const foo = (data) => {
  const recursion = (d) => {
    if (typeof d === "object") {
      const temp = {};

      Object.keys(d).forEach((key) => {
        temp[key] = recursion(d[key]);
      });

      return temp;
    }
    if (typeof d === "number") {
      return d === 1 ? 0 : 1;
    }
  };

  return recursion(data);
};

console.log(foo(input));
