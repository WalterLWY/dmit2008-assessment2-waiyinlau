// Week 5 - Class 1 - Employee Instructor - 1
/* 
      Show all the current employees
      Server Components Rendered/ Built
      Access to the Node.js environment

      Server Components
      JavaScript running on the operating system
      not in the browser window....

      Client
      Running in the browser access to the Web API

      Mocking Up the API
      data structure.... components

*/

// Week 5 - Class 1 - Employee Instructor - 1
// import { readFile } from "fs/promises";

// Mock GET request to the API return all of the things
// employees..   api/employees/departments/pancake
//   departments=pancakes

// Week 5 - Class 2 - Employee Instructor - 2
// Making GET request to the API
// requesting to get all the employee data

import { Card } from "../components/card/Card"

async function getEmployees(){
    // const filePath = `${process.cwd()}/app/data/employees.json`
    // const fileContents = await readFile(filePath, 'utf-8')
    // const employees = JSON.parse(fileContents)
    // return employees

    const res = await fetch (`http://localhost:3000/api/employees`)
    const payload = await res.json()
    return payload  
    }

 async function EmployeesPage ({children}) {

  const employees = await getEmployees()

  return (
    <>
      
    
      <header className="text-center pt-28">
        <h2 className="text-5xl text-slate-900">EmployeesPage Page Component </h2>
      </header>
      <main className=" min-h-screen py-24">
        {
          // employees.map(employee => console.log("employee card compon"))
          employees.map((employee) => <Card key={employee.id}  {...employee} />) 
        }
      </main>
  
     
    </>
  );
}

export default EmployeesPage