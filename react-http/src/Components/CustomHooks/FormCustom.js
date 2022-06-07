import React,{useState} from 'react'

const useFormInput = (initialValue) => {
    const [value,setValue] = useState(initialValue)

    let reset = () => {
        setValue(initialValue)
    }

    let bind = {
        value,
        onChange: event => setValue(event.target.value)
    }
    return [value,bind,reset]

}

export default useFormInput