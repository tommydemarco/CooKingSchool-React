import { useState, useEffect } from 'react';
import axios from 'axios'

export function useConnectAxiosGet(url) {
    const [request, setRequest] = useState({
        isLoading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            isLoading:true, 
            data: null,
            error: false
        })
        //making the request last longer so that the cool loader remains more
        setTimeout(() => {
            axios.get(url)
            .then((request) => {
                if (request.data.length === 1) {
                    setRequest({
                        isLoading: false,
                        data: request.data[0],
                        error: false
                    })
                } else if (request.data.length > 1) {
                    setRequest({
                        isLoading: false,
                        data: request.data,
                        error: false
                    })
                } else {
                   setRequest({
                        isLoading: false,
                        data: null,
                        error: true
                    }) 
                }                
            }).catch(() => {
                setRequest({
                        isLoading: false,
                        data: request.data,
                        error: true
                    })
            })
        }, 1500)
        
    }, [url]);
    return request
}