const CTA = () => {
    const details = [
        {title: "Free Delivery", content: "For all oders over $50, consectetur adipim scing elit."},
        {title: "90 Days Return", content: "If goods have problems, consectetur adipim scing elit."},
        {title: "Secure Payment", content: "100% secure payment, consectetur adipim scing elit."},
    ]

    return ( 
        <>
            <div className="md:p-16 p-6 md:mt-24 mt-8 md: grid md:grid-cols-3 md:gap-8 gap-4 bg-[#FAF4F4]">
                {details.map((item) => (
                    <div>
                        <h2 className="md:text-2xl text-lg font-semibold text-gray-800">{item.title}</h2>
                        <p className="text-gray-500 font-light md:text-base text-sm">{item.content}</p>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default CTA;