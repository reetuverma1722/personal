// import React, { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';
// import axios from "react-axios";
// import { DummyData } from '../Dummydata';

// const CountriesTable = () => {

//  const [countries,setCountries]=useState([]);
// //  const getCountries=async()=>{
// //      try {
// //         const response=await axios.get("https://restcountries.com/v3.1/all");
// //         setCountries(response.data);
// //      } catch (error) {
// //         console.log(error);
// //      }

//  }
 
//  const columns=[
// ]


// useEffect(()=>{
//     getCountries();
// },[])

//   return <DataTable columns={columns} data={countries}/>

  
// export default CountriesTable;

// import React, { useEffect, useState } from 'react';
// import DataTable from "react-data-table-component"; // Import the data table library you are using
// import { DummyData } from '../Dummydata';
// function CountriesTable() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchData=()=>{
//         const data=DummyData;
//     }
//     // Fetch country data and set it to the "countries" state
//     // ... your code to fetch country data
//   }, []);

//   const columns = [
//     {
//         name:"Country Name",
//         selector:(row)=>row.name,
//      },
//      {
//         name:"Country Native Name",
//         selector:(row)=>row.nativeName,
//      },
//      {
//         name:"Country Capital",
//         selector:(row)=>row.capital,
//      },
//     // Define columns for your data table
//     // ... your code to define columns
//   ];

//   return <DataTable columns={columns} data={countries} />;
// }

// export default CountriesTable;
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { DummyData } from '../Dummydata';
import "../assets/css/CountriesTable.css";

function CountriesTable() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      // Simulating data fetch
      const data = DummyData;
      setCountries(data);
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: 'Company',
      selector: (row) => row.Company,
      sortable:true,
    },
    {
      name: 'Status',
      selector: (row) => row.Status,
    },
    {
      name: 'Revenue growth YoY',
      selector: (row) => row.growth,
    },
    {
        name: 'Revenue',
        selector: (row) => row.revenue,
      },
      {
        name: 'Headcount',
        selector: (row) => row.Headcount,
      },
    // Add more columns as needed
  ];

  return <DataTable columns={columns} data={countries}  pagination fixedHeader fixedHeaderScrollHeight='400px' selectableRows  selectableRowsHighlight highlightOnHover/>;
}

export default CountriesTable;
