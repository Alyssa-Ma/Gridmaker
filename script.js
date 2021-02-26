let numRows = 0; 
let numCols = 0;
let colorSelected;

//Adds a row
function addRow(){
    
    numRows++;
    
    let row = document.createElement("Tr"); //creates row
    row.classList.add("R");

    if(numCols === 0){  //incase there are no columns
        numCols++;
    }

    for(let i = 0; i < numCols; i++){
        let cell = document.createElement("Td"); //creates the first cell
        cell.classList.add("C");
        row.appendChild(cell);
        console.log(numCols);
    }

    document.getElementById("grid").appendChild(row);   //adds row to grid
    
}    


//Adds a column
function addColumn(){
    
    numCols++;
    let row;

    if(numRows === 0){  //incase there is no rows we create the first row and add it to grid
        numRows++;
        row = document.createElement("Tr");
        row.classList.add("R");
        document.getElementById("grid").appendChild(row);   
    }

    row = document.getElementsByClassName("R"); //gets all rows

    for(let i = 0; i < numRows; i++){   //loops through all rows and adds a column
        let col = document.createElement("Td"); 
        col.classList.add("C");
        row[i].appendChild(col);
    }   
}

//Removes a row
function removeRow(){

  
    if(numRows > 0)
    {
        if(numRows == 1){
            numCols = 0;
        }
        numRows--;
        let grid = document.getElementById("grid");
        let row = grid.lastElementChild;
        grid.removeChild(row);
    }
    

}

//Remove a column
function removeColumn(){
    alert("Clicked Add Col");
}

//Sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
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

