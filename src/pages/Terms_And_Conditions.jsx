import termsImage from "../assets/bg-shape.png"

const Terms_And_Conditions = () => {
    return ( 
        <>
            <div className="hero min-h-screen opacity-95" style={{ backgroundImage: `url(${termsImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl uppercase">
                        <h1 className="mb-5 text-5xl font-bold">Terms & Conditions</h1>
                        <p className="mb-5 font-semibold">Home - 
                            <span className="text-[#FBEBB5]">Terms and Conditions</span> 
                        </p>
                    </div>
                </div>
            </div> 

            <div className="grid grid-cols-1 md:gap-12 gap-8 md:p-16 p-6">
                <div className="">
                    <h1 className="section-title text-left uppercase ">General Conditions</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div id="privacy-policy">
                    <h1 className="section-title text-left uppercase ">Privacy Policy</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default Terms_And_Conditions;