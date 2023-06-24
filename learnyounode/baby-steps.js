let sum = 0;
const data = process.argv;
const results = data.forEach((element, index) => {
  if (index > 1) sum += Number(element);
});

console.log(sum);
