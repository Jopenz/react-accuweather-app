import React, { Component } from 'react';

class City extends Component {

    componentDidUpdate(){
        console.log(this.props);
    }


    render() {
        const { name } = this.props

        return (
        <div>Este es el componente de Clase City: { name }</div>
        );
    }
}

export default City;
