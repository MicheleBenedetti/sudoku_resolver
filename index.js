column = (cas_x, cas_y, sudoku) => {
    for (let x=0; x<9; x++){
        if (x === cas_x){
            continue
        }
        if (sudoku[cas_x][cas_y] === 0){
            continue
        }
        if (sudoku[cas_x][cas_y] === sudoku[x][cas_y]){
            return true
        }
    }
    return false
};

main = () => {
    let sudoku = [
        [5, 3, 0, 0, 7, 0, 0, 0, 9], // row 1
        [6, 0, 0, 1, 9, 5, 0, 0, 0], // row 2
        [0, 9, 8, 0, 0, 0, 0, 6, 0], // row 3
        [8, 0, 0, 0, 6, 0, 0, 0, 3], // row 4
        [4, 0, 0, 8, 0, 3, 0, 0, 1], // row 5
        [7, 0, 0, 0, 2, 0, 0, 0, 6], // row 6
        [0, 6, 0, 0, 0, 0, 2, 8, 0], // row 7
        [0, 0, 0, 4, 1, 9, 0, 0, 5], // row 8
        [0, 0, 0, 0, 8, 0, 0, 7, 9] // row 9
    ];
    for(let x=0; x < 9; x++){
        for(let y=0; y < 9; y++){
            console.log("x:" + x.toString() + " " + "y:" + y.toString() + " " + column(x, y, sudoku).toString())
        }
    }
};

main();