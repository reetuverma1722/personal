
import React from 'react'
import Table from "react-bootstrap/Table";
import DummyData from '../Dummydata';
import millify from 'millify';
import "../assets/css/CountriesTable.css";
import Dropdown from "../components/Dropdown"
import Searchbox from './Searchbox';

const CountriesTable = () => {
  return (<>
    <div>
    <Searchbox/>
   <Dropdown/>
    </div>
    <div className='tableWrap1 '>
      <Table size='sm'>
        <thead style={{display:"flex", justifyContent:"space-evenly"}}>
          <th  >
    <input type='checkbox'/>
          </th>
          <th>Company</th>
          <th>Status</th>
          <th>Revenue Growth YoY</th>
          <th>Revenue</th>
          <th>Headcount</th>
        </thead>
        {
          console.table()
        }
        <tbody >

          {DummyData[0].root.children?.map((d, i) => (
        

            <tr key={i + "o"}>
            
              <td > 
                <div className="detailItem"  style={{display:"flex", justifyContent:"space-evenly"}}>
  <div className='icons'>
  <input type='checkbox'/>

  
  </div>
                  <div className="icons" style={{display:"flex", justifyContent:"center",alignItems:"revert"}}>
                  <i className="fa-regular fa-heart"></i>
                    <i className="fa fa-building-o" aria-hidden="true"></i>

                  </div>

                  <div className="detail">
  <h1 style={{fontSize:"20px", color:"#2cb8e2"}}> Amazon com .in</h1>
                    <em>

                      {d?.fields?.bq_company_name}

                    </em>

                    <p>

                      {d?.fields?.bq_naics_sector_name}

                      <br />

                      BQ ID: {d?.fields?.bq_revenue_mr}

                      <br />

                      Founded: {d?.fields?.bq_year_founded || ""}

                      <br />

                      {d?.fields?.bq_company_website}

                    </p>

                    <p >

                      <span className={"icons"}>




                        <i

                          style={{ cursor: "pointer" }}



                          className="fa fa-map-marker"

                          aria-hidden="true"

                        ></i>

                        <i
                          className="fa fa-street-view"
                          aria-hidden="true"
                        ></i>

                      </span>

                      {d?.fields?.bq_company_address1_line_1},{" "}

                      {d?.fields?.bq_company_address1_city},{" "}

                      {d?.fields?.bq_company_address1_state_name}

                    </p>

                  </div>

                </div>

              </td>

              <td>{d?.fields?.bq_company_isactive ? "Active" : "InActive"}</td>

              <td>9.5%</td>

              <td>${millify(d?.fields?.bq_revenue_mr)}</td>

              <td>1M</td>

            </tr>
          ))}

        </tbody>
      </Table>
    </div></>
  )
}

export default CountriesTable