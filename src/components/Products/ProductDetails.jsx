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
    const discount = products.map((item) => item.discountPercentage)

    const handleAddToCart = () => {
        console.log('Item successfully added to cart')
    }

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
                                <img className="card-images" src={product.images[1]} alt="" />
                                <img className="card-images" src={product.images[2]} alt="" />
                                <img className="card-images" src={product.images[3]} alt="" />
                            </div>
                        </div>
                        <div className="md:space-y-3 space-y-2"> 
                            <h3 className="text-gray-600 font-medium">Product Details: 
                                <span className="ml-1">{product.brand}</span>
                            </h3>
                            <h3 className="font-semibold md:text-lg">Name: {product.title}</h3>
                            <p className={available ? `text-green-500 card-stock` : `text-red-500 card-stock`}>
                                {available ? <FcCheckmark /> : <FaRegTimesCircle /> }
                                {available ? `Availble` : `Out of stock`}
                            </p>
                            <div className="card-secondary-title">
                                <label htmlFor="description">Description:</label>
                                <p className="card-content">{product.description}</p>
                            </div>
                            <input type="number" placeholder="1" className="input-form w-[6rem]"/>
                            <div className="flex space-x-4 items-baseline">
                                <p className="font-medium text-gray-600">Ksh 
                                    <span className="ml-1">
                                        {Math.floor((product.price - (discount[product.id]/100 * product.price)))*120}
                                    </span>
                                </p>
                                <p className="italic text-sm line-through text-red-400 font-light">Ksh 
                                    <span className="ml-1">{product.price*120}</span>
                                </p>
                            </div>
                            <div>
                                <button onClick={handleAddToCart} className="btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
 
export default ProductDetails;