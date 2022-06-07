import React,{useState} from "react";
import useFormInput from "./FormCustom";
const FormHook = () => {
    const [fname,bindFname,resetFname] = useFormInput('')
    const [lname,bindLname,resetLname] = useFormInput('')
    return(<form>
        <input type="text" {...bindFname}/>
        <br /><input type="text" {...bindLname} />
        <br /><button onClick={event => {event.preventDefault()
        alert(`Hello ${fname} ${lname}`)
        resetFname()
        resetLname()}}>Submit</button>
    </form>)
}

export default FormHook