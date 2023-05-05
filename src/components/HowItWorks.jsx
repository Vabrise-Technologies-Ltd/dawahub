import data from "../data/counties.json"

const HowItWorks = () => {
    data.counties.map((item) => {
        console.log(item.name)
        console.log(item.code)
    })

    return ( 
        <>
            <div className="md:my-24 my-12 md:px-16 px-4">
                <h1 className="section-title ">Products On Offer</h1>
                <p className="section-subtitle">Find a bright ideal to suit your taste with our great selection</p>
                <div>
                    {/* {data.counties.map((item) => )} */}
                </div>
            </div>
        </>
     );
}
 
export default HowItWorks;