/** @format */

let employees = [
  { id: 1, name: "john", age: "18", profession: "backend" },
  { id: 2, name: "jack", age: "20", profession: "frontend" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
  { id: 4, name: "jack", age: "25", profession: "fullstack" },
  { id: 5, name: "jack", age: "28", profession: "sde" },
  { id: 6, name: "jack", age: "23", profession: "Tester" },

];

function PrintDeveloperbyMap() {
  employees.map(employee => {
      if (employee.profession === "Tester") {
          console.log(employee);
      }
  });
}


function PrintDeveloperbyForEach() {
  employees.forEach(employee => {
    if (employee.profession === "backend") {
        console.log(employee);
    }
  });
}

function addData() {
  let newEmployee = { id: 7, name: "Asif", age: "20", profession: "M.tech" };
    employees.push(newEmployee);
    console.log(employees);
}

function removeAdmin() {
  //Write your code here, just console.log
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployees = [
    { id: 8, name: "Alice", age: "23", profession: "developer" },
    { id: 9, name: "Mark", age: "30", profession: "designer" },
    { id: 10, name: "Lisa", age: "27", profession: "manager" }
  ];
    let concatenatedArray = employees.concat(newEmployees);
    console.log(concatenatedArray);
}
