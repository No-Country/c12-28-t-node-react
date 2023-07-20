import fotoUser from "../../assets/foto-de-perfil.png"
import { faClockRotateLeft, faHouse, faArrowRightFromBracket, faCartShopping, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";

function SideBarNav() {
    const sideBarNavRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (sideBarNavRef.current) {
            const sideBarNavWidth = sideBarNavRef.current.clientWidth;
            sideBarNavRef.current.style.right = `-${sideBarNavWidth}px`;
        }
      }, []);

    return (
        <aside ref={sideBarNavRef} id="SideBarNav" className="bg-primary-color-light max-w-1/3 fixed p-3 top-0 flex flex-col justify-between h-screen items-center">
            <div className="flex">
                <img className="rounded max-w-[100px] max-h-[100px] overflow-hidden" src={fotoUser}></img>
                <div className="text-h3 ml-3 h-full flex-col justify-center hidden md:flex">
                    <h4 className="font-bold">Ernesto Cabañas</h4>
                    <h6>ernestocabañas@gmail.com</h6>
                </div>
            </div>
            <nav className="flex flex-col text-nav-items">
                <NavItem 
                    marginTop={false}
                    targetUrl="#" 
                    iconComponent={
                        <FontAwesomeIcon className="text-primary-color" icon={faUser} />
                    }
                    linkName="Perfil" 
                />
                <NavItem 
                    targetUrl="#" 
                    iconComponent={
                        <FontAwesomeIcon className="text-primary-color" icon={faClockRotateLeft} />
                    }
                    linkName="Historial" 
                />
                <NavItem 
                    targetUrl="#"
                    iconComponent={
                        <FontAwesomeIcon className="text-primary-color" icon={faCartShopping} />
                    }
                    linkName="Carrito"
                />
                <NavItem 
                    targetUrl="#"
                    iconComponent={
                        <FontAwesomeIcon className="text-primary-color" icon={faHeart} />
                    }
                    linkName="Favoritos"
                />
                <NavItem 
                    targetUrl="#"
                    iconComponent={
                        <FontAwesomeIcon className="text-primary-color" icon={faHouse} />
                    }
                    linkName="Inicio"
                />
            </nav>
            <button className="text-nav-items">
                <FontAwesomeIcon className="text-primary-color" icon={faArrowRightFromBracket} />
                <span className="ml-3 font-light hidden md:inline-block">Cerrar sesión</span>
            </button>
        </aside>
    );

    function NavItem({ targetUrl, linkName, iconComponent, marginTop=true }: { targetUrl: string, linkName: string, iconComponent: JSX.Element, marginTop?: boolean }) {
        return (
            <a className={ marginTop ? "mt-5 font-light" : "font-light"} href={targetUrl}>
                {iconComponent}
                <span className="ml-3 hidden md:inline-block">{linkName}</span>
            </a>
        );
    }
}

export default SideBarNav