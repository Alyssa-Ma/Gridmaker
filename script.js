let numRows = 0; 
let numCols = 0;
let colorSelected;

//Adds a row
function addRow(){
    let row = document.createElement("Tr"); //creates row
    row.classList.add("R");
    let cell = document.createElement("Td"); //creates the first cell
    cell.classList.add("C");

    row.appendChild(cell);
    document.getElementById("grid").appendChild(row);   //adds it to grid
    numRows++;
}    


//Adds a column
function addColumn(){
   

    alert("Clicked Add Col");
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

