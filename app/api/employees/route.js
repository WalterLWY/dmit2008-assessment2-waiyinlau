// Week 5 - Class 2 - Employee Instructor - 2
/* 
        GET HTTP VERB
        Request---> whats comming in (GET)  path or query param
        Response--->json data, (binary, text, stream)

        GET action  give me something
        
       route path http://localhost:3000/api/employees
       request made using path parameters http://localhost:3000/api/employee/542158
       request made using query parameters http://localhost:3000/api/employee?id=542158

        Extract the information
        perform that action

        path params
        page.js/ route.js components
        folder is a segment  folder/folder/id/4

        query params
        route.js components
        folder is a segment  domain/path/path?name=value&name=value


          path params and query params   refining the request ask question
        
        route path http://localhost:3000/api/employees
*/ 
 
async function GET (request, response) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const payload = await res.json()
    return Response.json(payload)  
}

export {GET}

