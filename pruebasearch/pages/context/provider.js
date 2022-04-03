import { useState } from "react";
import SaludContext from "../context/index";
import apicall from "../api";

export default function SaludProvider({ children }) {

    const [dataProvider, setDataProvider] = useState([]);

    const getData = async (textBusquedad) => {

        let textSearch = textBusquedad;
        if (textSearch) {
    
            textSearch = "=" + textBusquedad;
        } else {
            textSearch = "";
        }

        try {

            const saludResults = await apicall({ url: `${process.env.NEXT_PUBLIC_URL}${textSearch}` });
            setDataProvider(saludResults);
            console.log("estamos en provider", `${process.env.NEXT_PUBLIC_URL}${textSearch}`);

        } catch (error) {
            setDataProvider([]);
        }
    }


    return (
        <SaludContext.Provider value={{ getData, dataProvider }}>
            {children}

        </SaludContext.Provider>

    );

}