// Week 5 - Class 2 - Employee Instructor - 2
/* 
           Presentational Component
           jsx + data ==== templating
*/ 
 
function Card ({ name, email, phone, id} ){
    return (
         <aside className="w-[320px] h-[250px] bg-gray-50">
            <header>
                <h2>{name}</h2>
            </header>
            <ul>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{id}</li>
            </ul>
         </aside>
       
    )
 }



 export {Card}