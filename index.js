
subMatrix = (matrice, block_start_x, block_start_y, block_end_x, block_end_y) => {
    let subMat = [];
    for (let y = block_start_y; y<block_end_y+1; y++){
        let tmp_aray = [];
        for (let x = block_start_x; x<block_end_x+1; x++) {
            tmp_aray.push(matrice[y][x])
        }
        subMat.push(tmp_aray)
    }
    return subMat
};

column = (cas_x, cas_y, sudoku) => {
    for (let y=0; y<9; y++){
        if (y === cas_y){
            continue
        }
        if (sudoku[cas_y][cas_x] === 0){
            continue
        }
        if (sudoku[cas_y][cas_x] === sudoku[y][cas_x]){
            return true
        }
    }
    return false
};

checkBlocco = (cas_y, cas_x, matrice) => {
    let block_start_x;
    let block_start_y;
    let block_end_x;
    let block_end_y;
    // find subsection x
    if (cas_x === 0 || cas_x === 1 || cas_x === 2){
        block_start_x = 0;
        block_end_x = 2
    }
    else if (cas_x === 3 || cas_x === 4 || cas_x === 5){
        block_start_x = 3;
        block_end_x = 5
    }
    else if (cas_x === 6 || cas_x === 7 || cas_x === 8){
        block_start_x = 6;
        block_end_x = 8
    }

    // find subsection y
    if (cas_y === 0 || cas_y === 1 || cas_y === 2){
        block_start_y = 0;
        block_end_y = 2
    }
    else if (cas_y === 3 || cas_y === 4 || cas_y === 5){
        block_start_y = 3;
        block_end_y = 5
    }
    else if (cas_y === 6 || cas_y === 7 || cas_y === 8){
        block_start_y = 6;
        block_end_y = 8
    }

    let subMat = subMatrix(matrice, block_start_x, block_start_y, block_end_x, block_end_y);
};

main = () => {
    let sudoku = [
        [5, 3, 0, 0, 7, 0, 0, 0, 9], // row 1
        [6, 3, 0, 1, 9, 5, 0, 0, 0], // row 2
        [0, 9, 8, 0, 0, 0, 0, 6, 0], // row 3
        [8, 0, 0, 0, 6, 0, 0, 0, 3], // row 4
        [4, 0, 0, 8, 0, 3, 0, 0, 1], // row 5
        [7, 0, 0, 0, 2, 0, 0, 0, 6], // row 6
        [0, 6, 0, 0, 0, 0, 2, 8, 0], // row 7
        [0, 0, 0, 4, 1, 9, 0, 0, 5], // row 8
        [0, 0, 0, 0, 8, 0, 0, 7, 9] // row 9
    ];
    for(let y=0; y < 9; y++){
        for(let x=0; x < 9; x++){
            console.log("y:" + y.toString() + " " +"x:" + x.toString() + " " + column(x, y, sudoku).toString())
        }
    }

    checkBlocco(8, 7, sudoku)

};

main();