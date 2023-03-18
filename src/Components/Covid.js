import React,{useEffect, useState} from 'react'

const Covid = () => {
    const [data,setData] = useState([]);
    const  getCovidData= async ()=>{
        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
           const actualData = await res.json();
           console.log(actualData.JH);
           setData(actualData.JH)
        } catch (error) {
                console.log("data invalid");
        }
       
    }; 

    useEffect(() => {
      getCovidData();
    }, []);
    
  return (
    <>
        <h1>🔴LIVE</h1>
        <h2>COVID-19 CRONAVIRUS TRACKER</h2>
        <h3>{data.i}</h3>
        

    </>
  )
}

export default Covid