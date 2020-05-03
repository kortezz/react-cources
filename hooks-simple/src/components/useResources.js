import {useEffect, useState} from "react";
import axios from "axios";


const useResources = resource => {

    const [resources, setResources] = useState([]);

    useEffect(() => {
        // fetchList(resource);
        (async (resource) => {
            const  response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );

            setResources(response.data);
        })(resource)
    }, [resource])

    // const fetchList = async (resource) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    //
    //     setResources(response.data);
    // }

    return resources;

};

export default useResources;