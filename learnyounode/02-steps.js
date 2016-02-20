var counter = 0;

for (i=2; process.argv.length>i; i++) {
    counter += Number(process.argv[i]);
}

console.log(counter);

