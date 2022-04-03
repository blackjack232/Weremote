import { useEffect, useState, useContext } from "react"
import { Helmet } from "react-helmet-async";
import SaludContext from "../../context";


export default function Search() {
    const [data, setData] = useState([]);
    const [textBusquedad, setTextBusquedad] = useState("");
    const { getData, dataProvider } = useContext(SaludContext);

    const handleClikbusqueda = async () => {

        getData(textBusquedad).catch(null);
        setData(dataProvider);
        // cambioData(dataProvider);


    }


    useEffect(() => {
        getData().catch(null);

        setData(dataProvider);

    }, [])


    console.log("esta es la data en search", dataProvider.data)


    return (
        <>
            <Helmet>
                <html lang="es"/>
                <title>Revista De Buenos Habitos para tú Salud y Belleza</title>
                <link rel="canonical" href="/Search" />
            </Helmet>

            <div className="font-bold underline bg-slate-50  pl-4 pr-4 pt-[110px] ">
                <div className="mb-3 xl:w-96  ">
                    <div className="input-group  flex flex-wrap ">
                        <input type="search"
                            className="form-control w-4  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Buscar cualquier Articulo"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            onChange={({ target: { value } }) => setTextBusquedad(value)} />
                        <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                            type="button"
                            id="button-addon2"
                            onClick={handleClikbusqueda}
                        >
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex font-semibold text-gray-700 pl-6">{dataProvider.size} <p> &nbsp; Resultados</p></div>
            <main className='pt-5 font-bold underline bg-slate-50  ' >
                <div className=" text-3xl  ">


                    <div className="flex flex-wrap flex justify-center ">

                        {dataProvider.data?.map((value, index) => {
                            return (

                                <div key={index} className=" flex justify-center  pt-[20px] pl-3 pr-3">
                                    <div className=" hover:transition-all w-[240px] rounded overflow-hidden shadow-lg ">

                                        <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-full h-[200px] "
                                            src={dataProvider.data[index].featured_media.medium} alt="Sunset in the mountains" />

                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{dataProvider.data[index].categories[0].name}</div>
                                            <p className="text-gray-700 text-base">{dataProvider.data[index].slug}

                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                        }
   
                    </div>
                   
                </div>
            </main>
        </>
    )

}