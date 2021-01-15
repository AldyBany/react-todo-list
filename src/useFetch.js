import {useState, useEffect} from 'react'


const useFetch = (url) =>{

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)



    useEffect(()=>{
        // console.log("hi")
        fetch(url)
        .then(res =>{
             
             if(!res.ok){
                throw Error('Could no fetch the data')
             }
             return res.json()
        })
        .then(data=>{ 
            console.log(data)
            setData(data)
        })
        .catch(err=>{
            setError(err.message)
        })
       
    },[url])

    return {data, error}
}

export default useFetch