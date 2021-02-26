let numRows = 0; 
let numCols = 0;
let colorSelected;

//Adds a row
function addRow(){
    numRows++;
    
    let row = document.createElement("Tr"); //creates row
    row.classList.add("R");

    

    for(let i = 0; i < numCols + 1; i++){
        let cell = document.createElement("Td"); //creates the first cell
        cell.classList.add("C");
        row.appendChild(cell);
        console.log(numCols);
    }

    document.getElementById("grid").appendChild(row);   //adds it to grid
    
}    


//Adds a column
function addColumn(){
    let row = document.getElementsByClassName("R");

    for(let i = 0; i < numRows; i++){
        let col = document.createElement("Td"); 
        col.classList.add("C");
        row[i].appendChild(col);
    }
    numCols++;
}

//Removes a row
function removeRow(){
    alert("Clicked Remove Row");
}

//Remove a column
function removeColumn(){
    alert("Clicked Add Col");
}

//Sets global var for selected color
function selected(){
    colorSelected = document.ggetElementById("selectedID").value;
    console.log(colorSelected);
}

//fills cell clicked with color
function fill(){
    alert("fill");
}

//fills all uncolored cells
function fillU(){
    alert("fillU");
}

//Clears color of all cells
function clearAll(){
    alert("clearAll");
}

