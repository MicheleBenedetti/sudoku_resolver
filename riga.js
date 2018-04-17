
riga = (x, y, sudoku) => {
    let flag = false;
    for (let riga of sudoku) {
        for (let num of riga) {
            if (sudoku[x][y] == num){
                flag = true;
            }
        }
    }
    return flag;
};
