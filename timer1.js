// node timer1.js 10 3 5 15 9 
const test = process.argv.slice(2);
for (const time of test) {
  if (time >= 0) {
    setTimeout(() => {
      process.stdout.write(`going off after ${time} seconds\n`);
    }, time * 1000);
  }
}
