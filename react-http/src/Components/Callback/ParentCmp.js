import React, { useState,useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
const ParentCmp = () => {
    const [age,setAge] = useState(21)
    const [salary,setSalary] = useState(20000)
    let incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1)
    },[age])
    let incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 5000)
    },[salary] )
    return(<div>
        <Title></Title>
        <Count text="age" output = {age} ></Count>
        <Button buttonHandler={incrementAge}>Increment Age</Button>
        <Count text="salary" output = {salary} ></Count>
        <Button buttonHandler={incrementSalary}>Increment Salary</Button>
    </div>)
}

export default ParentCmp