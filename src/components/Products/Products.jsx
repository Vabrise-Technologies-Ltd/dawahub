import ProductList from "./ProductList";

const Products = ({products}) => {
    return ( 
        <>
            <div className="md:my-24 my-12 md:p px-2">
                <h1 className="section-title ">Products On Offer</h1>
                <p className="section-subtitle">Find a bright ideal to suit your taste with our great selection</p>
                <div>
                    <ProductList products={products} />
                </div>
            </div>

            <div className="md:my-24 my-12 md:p px-2 md:py-24 py-8 bg-[#FFF9E5]">
                <h1 className="section-title ">Popular Products</h1>
                <p className="section-subtitle">Find a bright ideal to suit your taste with our great selection</p>
                <div>
                    <ProductList products={products} />
                </div>
            </div>

            <div className="md:my-24 my-12 md:p px-2">
                <h1 className="section-title ">New Products</h1>
                <p className="section-subtitle">Find a bright ideal to suit your taste with our great selection</p>
                <div>
                    <ProductList products={products} />
                </div>
            </div>
        </>
     );
}
 
export default Products;