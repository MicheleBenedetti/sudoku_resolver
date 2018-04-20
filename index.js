checkRow = (cas_y, cas_x, sudoku) => {
    let row = sudoku[cas_y];
    let found = 0;
    for (let num of row) {
        if (sudoku[cas_y][cas_x] === num){
            found++
        }
        if (found > 1){
            return true
        }
    }
    return false
};

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

checkColumn = (cas_y, cas_x, sudoku) => {
    for (let y=0; y<9; y++){
        if (y === cas_y){
            continue
        }
        if (sudoku[cas_y][cas_x] === sudoku[y][cas_x]){
            return true
        }
    }
    return false
};

sub_mat_dimensions = (num) => {
    if (num === 0 || num === 1 || num === 2){
        return [0, 2]
    }
    else if (num === 3 || num === 4 || num === 5){
        return [3, 5]
    }
    else if (num === 6 || num === 7 || num === 8){
       return [6, 8]
    }
};

checkBlock = (cas_y, cas_x, matrice) => {
    let [block_start_x, block_end_x] = sub_mat_dimensions(cas_x);
    let [block_start_y, block_end_y] = sub_mat_dimensions(cas_y);

    let f=0;
    for (let y = block_start_y; y < block_end_y + 1; y++) {
        for (let x = block_start_x; x < block_end_x+1; x++) {
            if (matrice[y][x] === matrice[cas_y][cas_x]) {
                f++
            }
            if (f > 1){
                return true
            }
        }
    }
    return false
};

main = () => {
    let sudoku = [
        [5, 3, 0, 0, 7, 0, 5, 0, 9], // row 1
        [6, 3, 0, 1, 9, 5, 0, 1, 0], // row 2
        [0, 9, 8, 0, 0, 7, 0, 6, 0], // row 3
        [8, 0, 0, 0, 6, 0, 0, 0, 3], // row 4
        [4, 0, 0, 8, 0, 3, 0, 0, 1], // row 5
        [7, 0, 0, 0, 2, 0, 0, 0, 6], // row 6
        [0, 6, 0, 0, 0, 0, 2, 8, 0], // row 7
        [0, 0, 0, 4, 1, 9, 0, 0, 5], // row 8
        [0, 0, 0, 0, 8, 0, 0, 7, 9] // row 9
    ];
    for(let y=0; y < 9; y++){
        for(let x=0; x < 9; x++){
            if (sudoku[y][x] !== 0) {
                console.log("column");
                console.log("y:" + y.toString() + " " + "x:" + x.toString() + " " + checkColumn(y, x, sudoku).toString());
                console.log("block");
                console.log("y:" + y.toString() + " " + "x:" + x.toString() + " " + checkBlock(y, x, sudoku).toString());
                console.log("row");
                console.log("y:" + y.toString() + " " + "x:" + x.toString() + " " + checkRow(y, x, sudoku).toString())

            }
        }
    }

};

main();
