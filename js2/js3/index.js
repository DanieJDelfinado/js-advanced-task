import getUserInput from "./modules.js";
import { Calculator, convertToJson, saveToLocalStorage, getFromLocalStorage, isPositive, operateOnNumbers, fetchData } from "./modules.js"

// Main Program
document.addEventListener("DOMContentLoaded", async () => {
    // User Input
    const number = getUserInput();
    
    // Ternary Operator
    const isPositiveNumber = isPositive(number);

    // Classes
    const resultAddition = Calculator.add(5, 3);
    const resultSubtraction = Calculator.subtract(10, 7);

    // JSON
    const jsonData = { key: "value" };
    const jsonString = convertToJson(jsonData);

    // Web Storage
    saveToLocalStorage("savedData", jsonString);
    const retrievedData = getFromLocalStorage("savedData");

    // Higher Order Functions
    const sum = operateOnNumbers(4, 6, (a, b) => a + b);
    const difference = operateOnNumbers(8, 3, (a, b) => a - b);

    // Fetch API (Async/Await)
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
    const fetchedData = await fetchData(apiUrl);

    // Display Results
    console.log("User Input:", number);
    console.log("Is Positive Number:", isPositiveNumber);
    console.log("Result Addition:", resultAddition);
    console.log("Result Subtraction:", resultSubtraction);
    console.log("JSON String:", jsonString);
    console.log("Retrieved Data from Local Storage:", retrievedData);
    console.log("Sum:", sum);
    console.log("Difference:", difference);
    console.log("Fetched Data:", fetchedData);
});

const loadFromAPIButton = document.getElementById("loadFromAPI");
const clearTableButton = document.getElementById("clearTable");
const dataTable = document.getElementById("dataTable");
const tblTHsLabels = ["User ID", "Task ID", "Title", "Status"];

loadFromAPIButton.addEventListener("click", () => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => response.json())
        .then(data => {
            // Clear existing table content
            dataTable.innerHTML = "";
               
            const tblHeaderRow = document.createElement("tr");

            // Create table header cells for each label
            tblTHsLabels.forEach(label => {
                const tblTH = document.createElement("th");
                tblTH.textContent = label;
                tblTH.style.border = "2px solid black"
             
                tblHeaderRow.appendChild(tblTH);
              
            });
    
            // Append the header row to the table
            const tableHeader = document.createElement("thead");
            tableHeader.appendChild(tblHeaderRow);
            dataTable.appendChild(tableHeader);
            // Populate table with fetched data
            data.forEach(item => {
                const row = document.createElement("tr");
                const userIdCell = document.createElement("td");
                const idCell = document.createElement("td");
                const titleCell = document.createElement("td");
                const completedCell = document.createElement("td");
                const tblHeader = document.createElement("thead");
                
               
                userIdCell.textContent = item.userId;
                idCell.textContent = item.id;
                titleCell.textContent = item.title;
                completedCell.textContent = item.completed;
                  
                userIdCell.style.borderRight = "2px solid black"
                userIdCell.style.padding = "10px"
               
                idCell.style.borderRight = "2px solid black"
                idCell.style.padding = "10px"
               
                titleCell.style.borderRight = "2px solid black"
                titleCell.style.padding = "10px"
               
                completedCell.style.borderRight = "2px solid black"
                completedCell.style.padding = "10px"

                userIdCell.style.borderBottom = "2px solid black"
                userIdCell.style.padding = "10px"
               
                idCell.style.borderBottom = "2px solid black"
                idCell.style.padding = "10px"
               
                titleCell.style.borderBottom = "2px solid black"
                titleCell.style.padding = "10px"
               
                completedCell.style.borderBottom = "2px solid black"
                completedCell.style.padding = "10px"
                completedCell.textContent = item.completed ? "Completed" : "Not Completed";
                completedCell.style.color = item.completed ? "green" : "red";
                row.appendChild(userIdCell);
                row.appendChild(idCell);
                row.appendChild(titleCell);
                row.appendChild(completedCell);

                dataTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error fetching data from API:", error);
        });
});

// Add event listener to clearTable button
clearTableButton.addEventListener("click", () => {
    // Clear table content
    dataTable.innerHTML = "";
});