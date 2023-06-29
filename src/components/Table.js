// import React from 'react'

// const Table = () => {
//   return (
//     <div>
//  <Table size="sm">
//   <thead>
//     <tr>
//         <th></th>
//         <th>Company</th>
//         <th>Status</th>
//         <th>Revenue Growth YoY</th>
//         <th>Revenue</th>
//         <th>Headcount</th>
//     </tr>
//   </thead>
//  </Table>

//     </div>
//   )
// }

// export default Table;










{/* <Table size="sm" >

<thead>

  <tr>

    <th>

      <Checkbox />{" "}

    </th>

    <th>Company</th>

    <th>Status</th>

    <th>Revenue Growth YoY</th>

    <th>Revenue</th>

    <th>Headcount</th>

  </tr>

</thead>

<tbody >



  {

    geoMarker && geoMarker?.length > 0 ? geoMarker?.map((d, i) => (

      <tr key={i}>

        <td>

          <Checkbox />

        </td>

        <td>

          <div className="detailItem">

            <div className="icons">

              <i className="fa fa-building-o" aria-hidden="true"></i>

            </div>

            <div className="detail">

              <em onClick={() => handleClick(d)}>

                {d?.fields?.bq_company_name}

              </em>

              <p>

                {d?.fields?.bq_naics_sector_name}

                <br />

                BQ ID: {d?.fields?.bq_revenue_mr}

                <br />

                Founded: {d?.fields?.bq_year_founded || "0000"}

                <br />

                amazon.com

              </p>

              <p className={"add"}>

                <span className={"icons"}>

                  <OverlayTrigger

                    overlay={

                      <Tooltip id="tooltip">

                        Click on pin drop to center this location on map

                      </Tooltip>

                    }

                    placement="top"

                    delayShow={300}

                    delayHide={150}

                  >

                    <i

                      style={{ cursor: "pointer" }}

                      onClick={() => handlemapDetails(d)}

                      className="fa fa-map-marker"

                      aria-hidden="true"

                    ></i>

                  </OverlayTrigger>




                  <i

                    className="fa fa-street-view"

                    aria-hidden="true"

                  ></i>

                </span>

                {d?.fields?.bq_company_address1_line_1},

                {d?.fields?.bq_company_address1_city},{" "}

                {d?.fields.bq_company_address1_state_name}

              </p>

            </div>

          </div>

        </td>

        <td>{d?.fields?.bq_company_isactive ? "Active" : "InActive"}</td>

        <td>9.5%</td>

        <td>${millify(d?.fields?.bq_revenue_mr)}</td>

        <td>1M</td>

      </tr>

    )) :

      result?.length > 0 ? result?.map((d, i) => (

        <tr key={i + "o"}>

          <td>

            <Checkbox />

          </td>

          <td>

            <div className="detailItem">

              <div className="icons">

                <i className="fa fa-building-o" aria-hidden="true"></i>

              </div>

              <div className="detail">

                <em onClick={() => handleClick(d)}>

                  {d?.fields?.bq_company_name}

                </em>

                <p>

                  {d?.fields?.bq_naics_sector_name}

                  <br />

                  BQ ID: {d?.fields?.bq_revenue_mr}

                  <br />

                  Founded: {d?.fields?.bq_year_founded || "0000"}

                  <br />

                  {d?.fields?.bq_company_website}

                </p>

                <p className={"add"}>

                  <span className={"icons"}>

                    <OverlayTrigger

                      overlay={

                        <Tooltip id="tooltip">

                          Click to search around this address location.

                        </Tooltip>

                      }

                      placement="top"

                      delayShow={300}

                      delayHide={150}

                    >

                      <i

                        style={{ cursor: "pointer" }}

                        onClick={() => handlemapDetails(d)}

                        className="fa fa-map-marker"

                        aria-hidden="true"

                      ></i>

                    </OverlayTrigger>




                    <i

                      className="fa fa-street-view"

                      aria-hidden="true"

                    ></i>

                  </span>

                  {d?.fields?.bq_company_address1_line_1},{" "}

                  {d?.fields?.bq_company_address1_city},{" "}

                  {d?.fields.bq_company_address1_state_name}

                </p>

              </div>

            </div>

          </td>

          <td>{d?.fields?.bq_company_isactive ? "Active" : "InActive"}</td>

          <td>9.5%</td>

          <td>${millify(d?.fields?.bq_revenue_mr)}</td>

          <td>1M</td>

        </tr>

      )) : <div className="nodata">

        <img src={img} alt="img" />

        <h2>No Records Found</h2>

      </div>

  }

</tbody>

</Table><Table size="sm" >

<thead>

  <tr>

    <th>

      <Checkbox />{" "}

    </th>

    <th>Company</th>

    <th>Status</th>

    <th>Revenue Growth YoY</th>

    <th>Revenue</th>

    <th>Headcount</th>

  </tr>

</thead>

<tbody >

  
  {

    geoMarker && geoMarker?.length > 0 ? geoMarker?.map((d, i) => (

      <tr key={i}>

        <td>

          <Checkbox />

        </td>

        <td>

          <div className="detailItem">

            <div className="icons">

              <i className="fa fa-building-o" aria-hidden="true"></i>

            </div>

            <div className="detail">

              <em onClick={() => handleClick(d)}>

                {d?.fields?.bq_company_name}

              </em>

              <p>

                {d?.fields?.bq_naics_sector_name}

                <br />

                BQ ID: {d?.fields?.bq_revenue_mr}

                <br />

                Founded: {d?.fields?.bq_year_founded || "0000"}

                <br />

                amazon.com

              </p>

              <p className={"add"}>

                <span className={"icons"}>

                  <OverlayTrigger

                    overlay={

                      <Tooltip id="tooltip">

                        Click on pin drop to center this location on map

                      </Tooltip>

                    }

                    placement="top"

                    delayShow={300}

                    delayHide={150}

                  >

                    <i

                      style={{ cursor: "pointer" }}

                      onClick={() => handlemapDetails(d)}

                      className="fa fa-map-marker"

                      aria-hidden="true"

                    ></i>

                  </OverlayTrigger>




                  <i

                    className="fa fa-street-view"

                    aria-hidden="true"

                  ></i>

                </span>

                {d?.fields?.bq_company_address1_line_1},

                {d?.fields?.bq_company_address1_city},{" "}

                {d?.fields.bq_company_address1_state_name}

              </p>

            </div>

          </div>

        </td>

        <td>{d?.fields?.bq_company_isactive ? "Active" : "InActive"}</td>

        <td>9.5%</td>

        <td>${millify(d?.fields?.bq_revenue_mr)}</td>

        <td>1M</td>

      </tr>

    )) :

      result?.length > 0 ? result?.map((d, i) => (

        <tr key={i + "o"}>

          <td>

            <Checkbox />

          </td>

          <td>

            <div className="detailItem">

              <div className="icons">

                <i className="fa fa-building-o" aria-hidden="true"></i>

              </div>

              <div className="detail">

                <em onClick={() => handleClick(d)}>

                  {d?.fields?.bq_company_name}

                </em>

                <p>

                  {d?.fields?.bq_naics_sector_name}

                  <br />

                  BQ ID: {d?.fields?.bq_revenue_mr}

                  <br />

                  Founded: {d?.fields?.bq_year_founded || "0000"}

                  <br />

                  {d?.fields?.bq_company_website}

                </p>

                <p className={"add"}>

                  <span className={"icons"}>

                    <OverlayTrigger

                      overlay={

                        <Tooltip id="tooltip">

                          Click to search around this address location.

                        </Tooltip>

                      }

                      placement="top"

                      delayShow={300}

                      delayHide={150}

                    >

                      <i

                        style={{ cursor: "pointer" }}

                        onClick={() => handlemapDetails(d)}

                        className="fa fa-map-marker"

                        aria-hidden="true"

                      ></i>

                    </OverlayTrigger>




                    <i

                      className="fa fa-street-view"

                      aria-hidden="true"

                    ></i>

                  </span>

                  {d?.fields?.bq_company_address1_line_1},{" "}

                  {d?.fields?.bq_company_address1_city},{" "}

                  {d?.fields.bq_company_address1_state_name}

                </p>

              </div>

            </div>

          </td>

          <td>{d?.fields?.bq_company_isactive ? "Active" : "InActive"}</td>

          <td>9.5%</td>

          <td>${millify(d?.fields?.bq_revenue_mr)}</td>

          <td>1M</td>

        </tr>

      )) : <div className="nodata">

        <img src={img} alt="img" />

        <h2>No Records Found</h2>

      </div>

  }

</tbody>

</Table> */}