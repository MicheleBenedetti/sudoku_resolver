
let sudoku = [
        [5, 3, 0, 0, 7, 0, 0, 0, 9], // row 0
        [6, 3, 0, 1, 9, 5, 0, 0, 0], // row 1
        [0, 9, 8, 0, 0, 0, 0, 6, 0], // row 2
        [8, 0, 0, 0, 6, 0, 0, 0, 3], // row 3
        [4, 0, 0, 8, 0, 3, 0, 0, 1], // row 4
        [7, 0, 0, 0, 2, 0, 0, 0, 6], // row 5
        [0, 6, 0, 0, 0, 0, 2, 8, 0], // row 6
        [0, 0, 0, 4, 1, 9, 0, 0, 5], // row 7
        [0, 0, 0, 0, 8, 0, 0, 7, 9] // row 8
    ];

document.writeln("<table>");
for (let r = 0; r < 9; r++){
	document.writeln("<tr>");
	for (let c = 0; c < 9; c++){
		let num = sudoku[r][c];

		if (c === 0) {
			document.writeln("<th class=r"+(r+1).toString()+"c1>"+num+"</th>")
		} else if (c === 1 || c === 3 || c === 4 || c === 6 || c === 7) {
			document.writeln("<th class=r"+(r+1).toString()+"c1>"+num+"</th>")
		} else if (c === 2 || c === 5) {
			document.writeln("<th class=r"+(r+1).toString()+"c1>"+num+"</th>")
		}
		
	}
	document.writeln("</tr>")
}
document.writeln("</table>");

