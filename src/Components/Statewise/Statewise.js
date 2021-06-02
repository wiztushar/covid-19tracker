import React,{useState,useEffect} from 'react'
import "./Statewise.css"

const Statewise = () => {

    const [data,setData] = useState([]);

    const getCovidData = async ( ) =>{
       const res=await fetch('https://api.covid19india.org/data.json');
        const actualData= await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

useEffect(() => {
    getCovidData();

}, []);

    return (
        <>
        
       
    <div className="container" >
        <div className="main-heading">
            <h1 className ="mb-3 mt-3 animated "><span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD</h1>
            </div>
            <div className="table-responsive">
                <table className="table m-0 table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
      <th scope="col">Active</th>
      <th scope="col">Last Updated</th>
    </tr>
  </thead>
  <tbody>

        {
            data.map((curElm,ind)=>{
                return(
                    <tr key={ind}>
                    <td >{curElm.state}</td>
      <td>{curElm.confirmed}</td>
      <td>{curElm.recovered}</td>
      <td>{curElm.deaths}</td>
      <td>{curElm.active}</td>
      <td>{curElm.lastupdatedtime}</td>
                    </tr>
                )

            })
        }

    
  </tbody>
</table>

            </div>
            </div>          
        </>
    )
}

export default Statewise
