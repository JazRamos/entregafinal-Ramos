import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (  
        <div className="flex-auto container mx-auto grid gap-x-0 grid-cols-6">
                        <Link to={"/"}>
                <button className="px-6 py-2 bg-red-300 hover:bg-red-400">Home</button>
                        </Link>
                        <Link to={"/category/lapiceras"}>
                <button className="px-6 py-2 bg-orange-300 hover:bg-orange-400">Lapiceras</button>
                        </Link>
                        <Link to={"/category/cuadernos"}>
                <button className=" px-6 py-2 bg-yellow-300 hover:bg-yellow-500">Cuadernos</button>
                        </Link>
                        <Link to={"/category/resaltadores"}>
                <button className="px-6 py-2 bg-lime-300 hover:bg-lime-500">Resaltadores</button>
                        </Link>
                        <Link to={"/category/lapices"}>
                <button className="px-6 py-2 bg-blue-300 hover:bg-blue-400">Lapices</button>
                        </Link>
                    
           
            <div>
                <CartWidget />
                <p className="">2</p>
            </div>
    </div>
    );
};
