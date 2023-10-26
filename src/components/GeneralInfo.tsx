import { useState } from 'react'
import CustomInput from './CustomInput';

export default function GeneralInfo() {
   //TODO: combine into an object
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <>
           <GeneralInfoEntry name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
           <GeneralInfoDisplay name={name} email={email} phoneNumber={phoneNumber}/>
        </>
    )
}

function GeneralInfoDisplay({name, email, phoneNumber}) {
    return (
    <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h2>{phoneNumber}</h2>
    </div>
    )
}

function GeneralInfoEntry({name, setName, email, setEmail, phoneNumber, setPhoneNumber}) {
    return (
    <div>
        <h2>General Info</h2>
        <CustomInput value={name} inputName={"Name"} setValue={setName}/>
        <CustomInput value={email} inputName={"Email"} setValue={setEmail}/>
        <CustomInput value={phoneNumber} inputName={"Phone #"} setValue={setPhoneNumber}/>
    </div>
    );
}

