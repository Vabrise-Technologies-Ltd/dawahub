import { Link } from "react-router-dom";

const BottomNav = () => {
    return ( 
        <>
            <div className="bg-[#FBEBB5] p-4">
                <div className="md:flex justify-around items-center font-medium text-gray-800">
                    <Link className="" to='/drugs'>
                        Drugs
                    </Link>
                    <Link className="" to='/beautyskincare'>
                        Beauty & Skin Care 
                    </Link>
                    <Link className="" to='/medicaldevices'>
                        Medical Devices 
                    </Link>
                    <Link className="" to='/beautyskincare'>
                        Personal Care 
                    </Link>
                    <Link className="" to='/beautyskincare'>
                        Snacks & Drinks
                    </Link>
                    <Link className="" to='/beautyskincare'>
                        Vitamins & Suppliments
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default BottomNav;