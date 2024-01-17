function printHash() {
  process.stdout.write("#");
}

const intervalId = setInterval(printHash, 1000);

// Stop printing after 5 seconds (5000 milliseconds)
setTimeout(() => {
  clearInterval(intervalId);
  console.log(); // Add a newline at the end
}, 5000);
