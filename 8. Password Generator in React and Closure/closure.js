function outerFunction() {
  const first_name = "john";
  const last_name = "doe";

  function logName() {
    console.log(first_name + " " + last_name);
  }

  return logName;
}

const myFunc = outerFunction();

myFunc(); // "john doe"
