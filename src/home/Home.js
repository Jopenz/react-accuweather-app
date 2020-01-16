import React, { Component } from 'react';
import { Paper, InputBase } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='flex flex-col w-full h-full'>
                <div className='flex justify-center content-center items-center'>
                    <Paper style={{ width : 320 }} className='flex m-20 pl-6 justify-between' >
                        <InputBase
                            fullWidth
                            placeholder="Search City"
                            inputProps={{ 'aria-label': 'search city' }}
                        />
                         <IconButton type="submit" className={''} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <div className='flex flex-1'></div>
            </div>
        );
    }
}

export default Home;