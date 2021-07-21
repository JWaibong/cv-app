import React,{useEffect, useReducer} from 'react'


const reducer = (currentState, action) => {
    switch(action.type){
        case 'positionUpdate':
            return {...currentState, position: action.value };
        case 'companyUpdate':
            return {...currentState, company: action.value};
        case 'cityUpdate':
            return {...currentState, city: action.value };
        case 'degreeUpdate':
            return {...currentState, degree: action.value};
        case 'subjectUpdate':
            return {...currentState, subject: action.value};
        case 'fromYearUpdate':
            return {...currentState, fromYear: action.value};
        case 'toYearUpdate':
            return {...currentState, toYear: action.value};
        default:
            return currentState;
    }
}
const initialState = {position: '', company: '', city: '', degree: '', subject: '', fromYear: '', toYear: ''};



function Experience() {

    const [experienceInfo, dispatchExperienceInfo] = useReducer(reducer, initialState);
    const {position, company, city, degree, subject, fromYear, toYear} = experienceInfo;





    return (
        <React.Fragment>
        <div className="input-container">
            <input type="text" placeholder="Position" value={position} onChange={e => dispatchExperienceInfo({type: 'positionUpdate', value: e.target.value})}/> 
            <input type="text" placeholder="Company" value={company} onChange={e => dispatchExperienceInfo({type: 'companyUpdate', value: e.target.value})}/>
            <input type="text" placeholder="City" value={city} onChange={e => dispatchExperienceInfo({type: 'cityUpdate', value: e.target.value})}/>
            <input type="text" placeholder="Degree" value={degree} onChange={e => dispatchExperienceInfo({type: 'degreeUpdate', value: e.target.value})}/>
            <input type="text" placeholder="Subject" value={subject} onChange={e => dispatchExperienceInfo({type: 'subjectUpdate', value: e.target.value})}/>
            <input type="text" placeholder="From" value={fromYear} onChange={e => dispatchExperienceInfo({type: 'fromYearUpdate', value: e.target.value})}/>
            <input type="text" placeholder="To" value={toYear} onChange={e => dispatchExperienceInfo({type: 'toYearUpdate', value: e.target.value})}/>
        </div>
        </React.Fragment>
    )
}

export default Experience
