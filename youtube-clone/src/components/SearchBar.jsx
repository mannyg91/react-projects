import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material'; 
import{ Search } from '@mui/icons-material'

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //if something has been typed in
    if(searchTerms) {

    }
  }


  return (
    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 } //margin only applied to small devices
        }}
    >
        <input
            className="search-bar"
            placeHolder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar