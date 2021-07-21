import React,{  useReducer,useEffect} from 'react'

const reducer = (currentState, action) => {
    switch(action.type){
        case 'positionUpdate':
            return {...currentState, position: action.value };
        case 'companyUpdate':
            return {...currentState, company: action.value};
        case 'cityUpdate':
            return {...currentState, city: action.value };

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
const initialState = {position: '', company: '', city: '', fromYear: '', toYear: '', id: null };


function Experience(props) {
    const {handler, id} = props;



    const [experienceInfo, dispatchExperienceInfo] = useReducer(reducer, initialState);
    const {position, company, city, fromYear, toYear} = experienceInfo;


    useEffect( () => {
        dispatchExperienceInfo({type: 'idInitial', value: id});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    useEffect( () => {
        handler( prevValues => {
            prevValues = prevValues.filter(value => value.id !== experienceInfo.id && value.id !== null);
            return [...prevValues, experienceInfo]
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[experienceInfo])


    return (
        <React.Fragment>
        <div className="input-container">
            <input type="text" placeholder="Position" value={position} onChange={e => dispatchExperienceInfo({type: 'positionUpdate', value: e.target.value})}/> 
            <input type="text" placeholder="Company" value={company} onChange={e => dispatchExperienceInfo({type: 'companyUpdate', value: e.target.value})}/>
            <input type="text" placeholder="City" value={city} onChange={e => dispatchExperienceInfo({type: 'cityUpdate', value: e.target.value})}/>
            <input type="text" placeholder="From" value={fromYear} onChange={e => dispatchExperienceInfo({type: 'fromYearUpdate', value: e.target.value})}/>
            <input type="text" placeholder="To" value={toYear} onChange={e => dispatchExperienceInfo({type: 'toYearUpdate', value: e.target.value})}/>
        </div>
        </React.Fragment>
    )
}

export default Experience
