const isNumber = (value) => typeof value === "number";

const add = (...params) => {
  let result = 0;

  if (params.length === 1)
    throw new Error("There should be at least 2 parameters");

  params.forEach((p) => {
    if (!isNumber(p)) {
      throw new Error("Param is not a number");
    } else {
      result += p;
    }
  });

  return result;
};

module.exports = { add };
