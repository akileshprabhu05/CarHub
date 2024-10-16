"use client";
import React, { useState } from 'react'
import SearchManufacture from './SearchManufacture';

const SearchBar = () => {
  const [manufacturer,SetManufacturer]=useState('');  
  const handleSearch = () => {

  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__items'>
            <SearchManufacture 
                manufacturer={manufacturer}
                SetManufacturer={SetManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar