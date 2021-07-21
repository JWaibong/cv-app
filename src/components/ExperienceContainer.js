import React, { useEffect, useState } from 'react'
import Experience from './Experience';
import uniqid from 'uniqid';

function ExperienceContainer() {
    const [experiences, setExperiences] = useState([]);

    useEffect( () => {
        setExperiences(prevExperiences => {
        const id = uniqid();
        return [...prevExperiences, 
        <React.Fragment key={id}> 
            <Experience/>
            <button onClick={e => {
                e.preventDefault();
                deleteButtonClickHandler(e.target.value);
             }} value={id}> Delete </button>
        </React.Fragment>]})
    },[]);



    const addClickHandler = (e) => {
        e.preventDefault();
        setExperiences(prevExperiences => {
            const id = uniqid();
            return [...prevExperiences, 
                <React.Fragment key={id}> 
                    <Experience/>
                    <button onClick={e => {
                e.preventDefault();
                deleteButtonClickHandler(e.target.value);
             }} value={id}> Delete </button>
                </React.Fragment>] 
        });
    }

    const deleteButtonClickHandler = (id) => {
        setExperiences(prevExperiences => prevExperiences.filter(exp => exp.key !== id ));
    }

    return (
        <div>
            {experiences}
            <button onClick={addClickHandler}> Add </button>
        </div>
    )
}

export default ExperienceContainer
