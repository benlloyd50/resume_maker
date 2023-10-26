
interface CustomInput {
    value: string,
    inputName: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

export default function CustomInput({ value, inputName, setValue }: CustomInput) {
   return (
      <>
          <p>{inputName}</p>
          <input
             type="text"
             value={value}
             onChange={(event) => setValue(event.target.value)}
          />
      </>
   );
}
