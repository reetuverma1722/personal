import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import DummyData from "../Dummydata";
import "../assets/css/CountriesTable.css";
import Searchbox from './Searchbox';
import Dropdown from './Dropdown';

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

  const columns = [ {
  selector:(row)=>row.heart
  },
    {
      selector:(row)=>row.icon
    },
    {
      name: 'Company',
      selector: (row) => row.Company,
      // sortable:true,
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

  return( <><div>
 <Searchbox/>
  </div>
   <div>
 <Dropdown/>
   </div>
  <div className='table'>
   <DataTable columns={columns} data={countries}  pagination fixedHeader fixedHeaderScrollHeight='500px' selectableRows  selectableRowsHighlight highlightOnHover/>;
  </div></>
)}

export default CountriesTable;
