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
  
    if(numRows > 0) //prevents from deleting when there are no rows
    {
        if(numRows == 1){   //when graph is completely deleted reset numCols
            numCols = 0;
        }
        numRows--;
        let grid = document.getElementById("grid");
        let row = grid.lastElementChild;    //get last row of grid
        grid.removeChild(row);  //remove the element
    }
   
}

//Remove a column
function removeColumn(){
    
    let row;
    

    if(numCols == 1){   //special case when at last column
        
        let grid = document.getElementById("grid");

        for(let i = 0; i < numRows; i++){   //go through all rows and delete them
            let row = grid.lastElementChild;
            grid.removeChild(row);
        }

        numRows = 0;
        numCols--;
    }

    if(numCols > 0){
        numCols--;
        row = document.getElementsByClassName("R"); //gets all rows
        
        for(let i = 0; i < numRows; i++){   //loops through all rows and removes a column
            let col = row[i].lastElementChild
            row[i].removeChild(col);
        }   

    }
    
    
}

//Sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//event listener for moving mouse over grid in case of click
document.getElementById("grid").addEventListener("mouseover", colorCell);

//color in cell
function colorCell()
{
    //set row to tr
    let rows = document.getElementsByTagName("Tr");
    //for each element of the row
    for(const element of rows)
    {
        //set col to td
        let cols = element.getElementsByTagName("Td");
        //loop through the cols
        for(let i = 0; i < numCols; i++)
        {
            //single cell of a column
            let cell = cols[i];
            //if the cell is clicked, color in the cell with the current color selected
            cell.onclick = function(colorCell)
            {
                cell.style.background = colorSelected;
            }
        }
    }
}

//fills all cells with selected color
function fill(){
    let row = document.getElementsByTagName("Tr");  // grab row element
    for(const element of row) {     // in each "tr" element
        let col = element.getElementsByTagName("Td");   // grab column element
        for(let i = 0; i < numCols; i++) {       // iterate through each column
            col[i].style.background = colorSelected;   // setting each column cell to the selected color
        }
    }
}

//fills all uncolored cells
function fillU(){
    alert("fillU");
}

//Clears color of all cells
function clearAll(){
    alert("clearAll");
}

//for hexcolor
function getInput()
{
    //set color to hex value
    colorSelected = document.getElementById("ColorInput").value;
    //testing
    console.log(colorSelected);
}
