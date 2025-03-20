import React, { useState } from "react";


/**
 * Component - это базовый класс для компонентов Реакт,
 * определенных как классы JavaScript. Компоненты классов по прежнему
 * поддерживаются Реакт, но их использование не рекомендуется в новом коде.
 */
interface GreetingProps {
    name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

export function Counter() {
    const [name, setName] = useState('Tailor');
    const [age, setAge] = useState(42);

    function handleNameChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setName(e.target.value);
    }
    function handleAgeChange(e: React.MouseEvent<HTMLButtonElement>) {
        setAge(age + 1);


    }
    return (
        <>
            <label htmlFor='exampleField'>пример поля ввода:</label>
            <input id='exampleField' type='text' name="exampleField"
                value={name}
                onChange={handleNameChange}
            />
            <button onClick={handleAgeChange}>
                Increment age
            </button>
            <p>Hello, {name}. You are {age}.</p>
        </>
    )
};


export default Greeting;
