import { useEffect, useState, useContext } from "react"
import SaludContext from "../../context/index";
import { Helmet } from 'react-helmet-async';


export default function Body() {
    const [data, setData] = useState([]);
    const { getData, dataProvider } = useContext(SaludContext);

    useEffect(() => {
        getData().catch(null);
        setData(dataProvider);

    }, [])



    return (
        <>
            <Helmet>
                <html lang="es"/>
                <title>Revista De Buenos Habitos para tú Salud y Belleza</title>
                <meta
                    name="description"
                    content="Pagina de busquedad de Habitos para tú Salud y Belleza"
                />
                <link rel="canonical" href="/Home"/>
                
            </Helmet>

            <div className=" flex flex-wrap flex justify-center ">

                {dataProvider.data?.map((value, index) => {
                    return (

                        <div key={index} className=" mt-[80px] flex justify-center  pt-[20px] pl-3 pr-3">
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
        </>
    )
}