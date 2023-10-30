
interface CustomInput {
    value: string,
    inputName: string,
    setValue: (value: string) => void,
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
