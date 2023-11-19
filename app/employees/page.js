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
import { readFile } from "fs/promises";

// Mock GET request to the API return all of the things
// employees..   api/employees/departments/pancake
//   departments=pancakes
async function getEmployees(){
    const filePath = `${process.cwd()}/app/data/employees.json`
    const fileContents = await readFile(filePath, 'utf-8')
    const employees = JSON.parse(fileContents)
   
    return employees
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
          employees.map(employee => console.log("employee card compon"))
        }
      </main>
  
     
    </>
  );
}

export default EmployeesPage