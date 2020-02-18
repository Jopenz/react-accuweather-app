import React, { Component } from 'react';
import { Paper, InputBase } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import * as Actions from './store/actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            search : ''
        };
    }

    handleChange = name => e => {
        this.setState({ [name]: e.target.value});
    }

    handleEnterSearch = e => {
        if(e.key === 'Enter'){
            this.props.searchCity(this.state.search);
        }
    }
    handleClickSearch = e => {
        if(e.key === 'Enter'){
            this.props.searchCity(this.state.search);
        }
    }


    render() {
        const { search } = this.state;
        const { cities } = this.props;
        return (
            <div className='flex w-full h-full'>
                <div className='flex flex-col w-1/3'>
                    <div className='flex w-full p-10'>
                        <Paper style={{ width : 320 }} className='flex m-10 pl-6 justify-between' >
                            <InputBase
                                fullWidth
                                value={search}
                                placeholder="Search City"
                                onChange={this.handleChange('search')}
                                onKeyDown={this.handleEnterSearch}
                                inputProps={{ 'aria-label': 'search city' }}
                            />
                            <IconButton type="submit" className={''} onClick={this.handleClickSearch } aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <div className='flex flex-1'>
                        { cities ? cities.length : null }
                    </div>
                </div>
                <div className='w-2/3'></div>
            </div>
        );
    }
}

const mapStateToProps = ({ home }) =>{
    return {
        cities : home.cities
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchCity : Actions.searchCity,
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);