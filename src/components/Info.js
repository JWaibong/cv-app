import React, { useContext, useReducer} from 'react'
import { SubmitContext } from './Form';

const initialState = {
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  }
const reducer = (currentState, action) => {
    switch(action.type){
        case 'firstNameUpdate':
            return {...currentState, firstName: action.value };
        case 'lastNameUpdate':
            return {...currentState, lastName: action.value};
        case 'titleUpdate':
            return {...currentState, title: action.value };
        case 'addressUpdate':
            return {...currentState, address: action.value};
        case 'phoneNumberUpdate':
            return {...currentState, phoneNumber: action.value};
        case 'emailUpdate':
            return {...currentState, email: action.value};
        case 'descriptionUpdate':
            return {...currentState, description: action.value};
        
        default:
            return currentState;
    }
}
let sent = false;
function Info() {
      const [personalInfo, dispatchPersonalInfo] = useReducer(reducer, initialState)
      const {firstName, lastName, title, address, phoneNumber, email, description } = personalInfo;

      /*useEffect( ()=> {
          console.log(personalInfo);
      }, [personalInfo])*/
      const [submitted, giveToParent] = useContext(SubmitContext);

      if(submitted && !sent){
          giveToParent([personalInfo]);
          sent = true;
      };
    

    return (
        <React.Fragment>
        <h1 className="form-header"> Personal Information </h1>
        <div className="input-container">
            <input type="text" placeholder="First Name" value={firstName} onChange={e => dispatchPersonalInfo({type: 'firstNameUpdate', value: e.target.value})}/> 
            <input type="text" placeholder="Last Name" value={lastName} onChange={e => dispatchPersonalInfo({type: 'lastNameUpdate', value: e.target.value})}/>
            <input type="text" placeholder="Title" value={title} onChange={e => dispatchPersonalInfo({type: 'titleUpdate', value: e.target.value})}/>
            <input type="text" placeholder="Address" value={address} onChange={e => dispatchPersonalInfo({type: 'addressUpdate', value: e.target.value})}/>
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={e => dispatchPersonalInfo({type: 'phoneNumberUpdate', value: e.target.value})}/>
            <input type="text" placeholder="Email" value={email} onChange={e => dispatchPersonalInfo({type: 'emailUpdate', value: e.target.value})}/>
            <textarea name="description" value={description} placeholder="Description" onChange={e => dispatchPersonalInfo({type: 'descriptionUpdate', value: e.target.value})}> </textarea>
        </div>

        </React.Fragment>
    )
}

export default Info
