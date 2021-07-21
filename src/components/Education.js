import React,{ useEffect, useReducer} from 'react'

const reducer = (currentState, action) => {
    switch(action.type){
        case 'universityUpdate':
            return {...currentState, university: action.value };
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
            case 'idInitial':
                return {...currentState, id: action.value};
        default:
            return currentState;
    }
}
const initialState = {university: '', city: '', degree: '', subject: '', fromYear: '', toYear: '', id: null};



function Education(props) {
    const {handler, id} = props;

    const [educationInfo, dispatchEducationInfo] = useReducer(reducer, initialState);
    const {university, city, degree, subject, fromYear, toYear} = educationInfo;

    useEffect( () => {
        dispatchEducationInfo({type:'idInitial', value: id});}, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);



    useEffect( () => {
            handler( prevValues => {
                prevValues = prevValues.filter(value => value.id !== educationInfo.id && value.id !== null);
                return [...prevValues, educationInfo]
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[educationInfo])



    return (
        <React.Fragment>
        <div className="input-container">
            <input type="text" placeholder="University Name" value={university} onChange={e => dispatchEducationInfo({type: 'universityUpdate', value: e.target.value})}/> 
            <input type="text" placeholder="City" value={city} onChange={e => dispatchEducationInfo({type: 'cityUpdate', value: e.target.value})}/>
            <input type="text" placeholder="Degree" value={degree} onChange={e => dispatchEducationInfo({type: 'degreeUpdate', value: e.target.value})}/>
            <input type="text" placeholder="Subject" value={subject} onChange={e => dispatchEducationInfo({type: 'subjectUpdate', value: e.target.value})}/>
            <input type="text" placeholder="From" value={fromYear} onChange={e => dispatchEducationInfo({type: 'fromYearUpdate', value: e.target.value})}/>
            <input type="text" placeholder="To" value={toYear} onChange={e => dispatchEducationInfo({type: 'toYearUpdate', value: e.target.value})}/>
        </div>
        </React.Fragment>
    )
}

export default Education
