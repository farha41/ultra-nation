import React from 'react';

const Country = (props) => {
    const{name,population,region,flag,capital} =props.country
    const flagStyle={
        height:'100px'
    }
   const handleAddCountry = props.handleAddCountry
    return (
        <div>
            <h2>{name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>{population}</p>
            <p>{region}</p>
            <p>{capital}</p>
            <button onClick={() => handleAddCountry(props.country)}>add country</button>

        </div>
    );
};

export default Country;