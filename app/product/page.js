function ProductPage ({children}){
    return (
        <>
            <header className="text-center pt-28">
                <h2 className="text-medium text-green-800">Single Product Page</h2>
            </header>
            <main className="min-h-screen py-24">
                {children}
            </main>
                    
        </>
    );
}

export default ProductPage