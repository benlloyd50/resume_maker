import CustomInput from './CustomInput';

interface GeneralInfo {
    name: string;
    email: string;
    phoneNumber: string;
}

interface GeneralInfoDisplayProps {
    personal: GeneralInfo;
}


export function GeneralInfoDisplay({ personal }: GeneralInfoDisplayProps) {
    return (
    <div className='display__general'>
        <h1>{personal.name}</h1>
        <h2>{personal.email}</h2>
        <h2>{personal.phoneNumber}</h2>
    </div>
    );
}

interface GeneralInfoEntryProps {
    personal: GeneralInfo;
    setPersonal: React.Dispatch<React.SetStateAction<GeneralInfo>>;
}

export function GeneralInfoEntry({ personal, setPersonal }: GeneralInfoEntryProps) {
    function handleKeyChange(key: keyof GeneralInfo, newValue: string) {
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

