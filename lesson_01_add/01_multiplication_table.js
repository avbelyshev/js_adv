for (let i = 0; i < 11; i++) {
    let line = (i === 0) ? ' ' : `${i}`;
    line = line.padStart(4)
    for (let j = 1; j < 11; j++) {
        if (i === 0) {
            line += `${j}`.padStart(4);
        } else {
            line += `${i * j}`.padStart(4);
        }
    }
    console.log(line);
}
