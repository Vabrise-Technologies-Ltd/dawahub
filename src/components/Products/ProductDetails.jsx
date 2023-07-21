import { useParams } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc"
import { FaRegTimesCircle } from "react-icons/fa"
const ProductDetails = ({products, loading, error}) => {
    const { id } = useParams()
    const paramId = Number(id)
    console.log(products)

    let product = {}
    if (product) {
        let arr = products.filter((item) => item.id == paramId)
        product = arr[0]
    } else {
        product = {}
    }

    const available = products.map((item) => item.stock)
    // console.log(available)
    

    return ( 
        <>
            {/* {loading ? <p>Loading products</p> : <p>{error}</p>} */}
            <div className="md:m-32 m-4">
            {loading ? (
                <p className="md:text-2xl font-light text-green-500">Loading products...</p>
                ) : (
                    <p className="text-red-500 md:text-4xl text-xl font-bold">{error}</p>
                )}

                {product && (
                    <div className="grid md:grid-cols-2 md:gap-16 gap-8">
                        <div>
                            <img className="card-thumbnail" src={product.thumbnail} alt="" />
                            <div className="flex justify-start items-center space-x-6 my-8">
                                <img className="image-list" src={product.images[1]} alt="" />
                                <img className="image-list" src={product.images[2]} alt="" />
                                <img className="image-list" src={product.images[3]} alt="" />
                            </div>
                        </div>
                        <div className="md:space-y-4 space-y-2"> 
                            <h2>Product Details: </h2>
                            <h3>Brand: {product.brand}</h3>
                            <h3>Name: {product.title}</h3>
                            <div className="card-secondary-title">
                                <label htmlFor="description">Description:</label>
                                <p className="card-content">{product.description}</p>
                            </div>
                            <p className={available ? `text-green-500 card-stock` : `text-red-500 card-stock`}>
                                {available ? <FcCheckmark /> : <FaRegTimesCircle /> }
                                {available ? `Availble` : `Out of stock`}
                            </p>
                            <div>
                                <p>KSH {product.price*140}</p>
                                <p>Discount: {product.discountPercentage}%</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
 
export default ProductDetails;