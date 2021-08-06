import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import Select from 'react-select'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import axios from 'axios';

import './Search.css';

const Search = () => {
    const [love, setLove] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [submit, setSubmit] = useState('');

    useEffect(() => {
    const getCharac = () => {
    axios
        .get('https://miadil.github.io/starwars-api/api/all.json')
        .then(res => setLove(res.data)
        );
    }
    getCharac();
}, []);

    const handleTarget = (event) => {
        setFiltered(event.target.value)
    }

    const handleSubmit = () => {
        setSubmit(!submit)

    }

    const filtering = (array, item) => {
        
        const finalArray = [... new Set(array.map(gender => Object.entries(gender)
            .filter(g => g.includes(item))
            .map(m => m[1]))
            .map(f => f.toString()))];
    return finalArray;
    }



    return (
        <>
        <Header />
        <NavBar />
        <div className='parent-search'>
            <h2 className= 'preferences'>Enter your preferences</h2>
            <div className='child-search'>
                <label className='label' htmlFor="gender"><span>Gender</span></label>
                <select className='select' name="gender" id="gender" onClick={handleTarget}>
                    {filtering(love, 'gender').map (e => (
                        <option className='option' value={e}>{e}</option>
                    ))}
                </select>
                
                <label className='label' htmlFor="planet"><span>Planet</span> </label>
                <select className='select' name="planet" id="planet" onClick={handleTarget}>
                    {filtering(love, 'homeworld').map (e => (
                        <option className='option' value={e}>{e}</option>
                    ))}
                </select>
                
                <label className='label' htmlFor="height"><span>Height</span> </label>
                <select className='select' name="height" id="height" onClick={handleTarget}>
                    {filtering(love, 'height').map (e => (
                        <option className='option' value={e}>{e}</option>
                    ))}
                </select>

                <label className='label' htmlFor="eye-color"><span>Eye Color</span> </label>
                <select className='select' name="eye-color" id="eye-color" onClick={handleTarget}>
                    {filtering(love, 'eyeColor').map (e => (
                        <option className='option' value={e}>{e}</option>
                    ))}
                </select>

                <label className='label' htmlFor="hair-color"><span>Hair Color</span> </label>
                <select className='select' name="hair-color" id="hair-color" onClick={handleTarget}>
                    {filtering(love, 'hairColor').map (e => (
                        <option className='option' value={e}>{e}</option>
                    ))}
                </select>

                <label className='label' htmlFor="cybernetics"><span>Cybernetics</span> </label>
                <select className='select' name="cybernetics" id="cybernetics" onClick={handleTarget}>
                    {filtering(love, 'cybernetics').map (e => (
                        <option className='option' value={e}>{e}</option>
                    ))}
                </select>

                <button className='filter-submit' onClick={handleSubmit}  >SUBMIT</button>    
            </div>
        </div>
        </>
    )
}

export default Search;
