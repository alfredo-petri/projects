import { useState, useEffect } from "react";

// inicio custom hook

export const useFetch = (url) =>{
    const [data, setData] = useState(null);

    //inicio adicionando Post ao hook
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState (false);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig ({
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }
    }
    //fim adicionando Post ao hook


    useEffect(()=> {
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();

            setData(json);
        };
        
        fetchData(); 
    
        //refatoranto codigo hook post
        //}, [url]);

    }, [url, callFetch]);

    // inicio post
    useEffect(()=> {

        const httpRequest = async ()=> {
            if (method === "POST") {
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
                const json = await res.json ();
    
                setCallFetch(json)
            }
        }

        httpRequest()

    }, [config, method, url]) 
    //fim post

    //código refatorado post
    //return {data};

    return {data, httpConfig};
}