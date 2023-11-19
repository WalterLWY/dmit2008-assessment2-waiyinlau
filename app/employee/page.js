// Week 5 - Class 1 - Employee Instructor - 1

function EmployeePage ({children}){
    return (
        <>
            <header className="text-center pt-28">
                <h2 className="text-5xl text-slate-900">Single Item Page</h2>
            </header>
            <main className="min-h-screen py-24">
                {children}
            </main>
                    
        </>
    );
}

export default EmployeePage