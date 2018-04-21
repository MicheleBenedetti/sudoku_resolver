
slittamento = (sudoku) => {
    let possible_coloumns = {}
    for (let riga of sudoku){
        for (let num of riga){
            if (num in riga.slice(0,3)){
                if (num in sudoku[riga + 1].slice(3,6) || num in sudoku[riga + 2].slice(3,6)){
                    possible_coloumns.add(6,7,8);
                }else if (num in sudoku[riga + 1].slice(6,9) || num in sudoku[riga + 2].slice(6,9)){
                    possible_coloumns.add(3,4,5);
                }
            }
            else if (num in riga.slice(3,6)){
                if (num in sudoku[riga + 1].slice(0,3) || num in sudoku[riga + 2].slice(0,3)){
                    possible_coloumns.add(6,7,8);
                }else if (num in sudoku[riga + 1].slice(6,9) || num in sudoku[riga + 2].slice(6,9)){
                    possible_coloumns.add(0,1,2);
                }
            }
            else if (num in riga.slice(6,9)){
                if (num in sudoku[riga + 1].slice(0,3) || num in sudoku[riga + 2].slice(0,3)){
                    possible_coloumns.add(3,4,5);
                }else if (num in sudoku[riga + 1].slice(3,6) || num in sudoku[riga + 2].slice(3,6)){
                    possible_coloumns.add(0,1,2);
                }
            }
        }
    }
    return possible_coloumns;
}