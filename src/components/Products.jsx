import ProductList from "./ProductList";

const Products = () => {
    return ( 
        <>
            <div className="md:my-24 my-12 md:px-16 px-4">
                <h1 className="section-title ">New Products</h1>
                <p className="section-subtitle">Find a bright ideal to suit your taste with our great selection</p>
                <div>
                    <ProductList />
                </div>
            </div>
        </>
     );
}
 
export default Products;