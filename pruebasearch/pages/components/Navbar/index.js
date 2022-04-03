
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'


export default function Navbar({ estadoMen }) {

    const [estadoMenuu, setEstadoMenu] = useState(true);

    const handlePageCategory = () => {

        if (estadoMenuu) {
            setEstadoMenu(false);
            estadoMen(estadoMenuu);

        } else {
            setEstadoMenu(true);
            estadoMen(estadoMenuu);
        }


    }



    return (
        <div className='fixed top-0 left-0 right-0 bg-white p-6 px-4 sm:px-6 lg:px-8  '>
            <nav className=" flex items-center justify-between sm:h-10 " aria-label="Global" >
                <div className=" items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="items-center justify-between w-full md:w-auto">

                        <div className="-mr-2 flex items-center ">
                            {estadoMenuu ?
                                (<button
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-00 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={handlePageCategory}>
                                    <MenuIcon className="h-8 w-8" aria-hidden="true" />
                                </button>)
                                : (<button
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-00 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={handlePageCategory}>
                                    <span className="sr-only">Open main menu</span>
                                    <XIcon className="h-8 w-8" aria-hidden="true" />
                                </button>)}
                        </div>
                    </div>
                </div>
                <div className="md:ml-10 flex">
                    <img src="/icono.png"
                        className='w-9 flex'
                    />

                    <span className=" flex pl-2 font-medium text-2xl  text-indigo-600 hover:text-indigo-500 ">
                        Cuida tú Salud
                    </span>


                </div>
                <div className="-mr-2 flex items-center ">
                    <button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-00 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={handlePageCategory}
                    >
                        <span className="sr-only">Open main menu</span>
                        <SearchIcon className="h-8 w-8" aria-hidden="true" />
                    </button>


                </div>
            </nav>

        </div>
    )
}