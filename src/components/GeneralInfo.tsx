import CustomInput from './CustomInput';

export function GeneralInfoDisplay({ personal }) {
    return (
    <div className='display__general'>
        <h1>{personal.name}</h1>
        <h2>{personal.email}</h2>
        <h2>{personal.phoneNumber}</h2>
    </div>
    );
}

export function GeneralInfoEntry({ personal, setPersonal }) {
    function handleKeyChange(key, newValue) {
        setPersonal({ ...personal, [key]: newValue});
    }

    return (
    <div className='entry__general'>
        <h2>General Info</h2>
        <CustomInput value={personal.name} inputName={"Name"} setValue={(value) => handleKeyChange("name", value)}/>
        <CustomInput value={personal.email} inputName={"Email"} setValue={(value) => handleKeyChange("email", value)}/>
        <CustomInput value={personal.phoneNumber} inputName={"Phone #"} setValue={(value) => handleKeyChange("phoneNumber", value)}/>
    </div>
    );
}

