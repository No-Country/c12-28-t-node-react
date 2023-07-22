import RegisterCompleted from "../Components/RegisterCompleted";
import Footer from "../components/common/Footer";
import TopBar from "../components/common/TopBar";
import { useState } from "react";


export default function Register() {

    const [isClic,setIsClic] = useState<boolean>(true)

    return (
    <>

        <TopBar />

    { 

            isClic ? (
            <div className="py-8 w-[346px] m-auto">
            <div className="rounded-sm flex flex-col justify-center items-center ">
                <img
                className="rounded-t-[15px] shadow-lg"
                src="https://images.unsplash.com/photo-1546432507-bd9e20b3c78b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                />
                <div className="bg-white-color px-14 py-8 flex flex-col gap-6 items-center justify-center rounded-b-[15px] shadow-sm">
                <h2 className="text-center font-bold text-xl">Cambiar Contraseña</h2>
                <div className="flex flex-col justify-center item-center gap-2">
                    <label className="flex flex-col gap-2">
                    <h3>Introduce tu correo electrónico</h3>
                    <input type="text" required className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"/>
                    </label>
                    <button onClick={() => setIsClic(false)} className="bg-tertiary-color rounded-full ml-8 mr-8 p-2 text-sm text-white"> Aceptar </button>
                </div>
                </div>
            </div>
            </div>
        ) : <RegisterCompleted message={"Se ha enviado un correo electrónico, con instrucciones para cambiar tu contraseña"}/>
        }
        <Footer />
        </>
    );
}
