import React from 'react';
import "../assets/css/Section.css"
import CountriesTable from './CountriesTable';
import Header from './Header';
import Filter from './Filter';

const Section = () => {
  return (
    <>
      <Header /><section className='main-container'>
        <div className='sidebar-left' style={{ paddingLeft: "30px", paddingTop: "30px", paddingRight: "50px" }}>
          <Filter />

        </div>
        <div className='sidebar-right'>
          <CountriesTable />

        </div>

      </section>

    </>


  )
}

export default Section;