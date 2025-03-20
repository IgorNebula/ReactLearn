import React from "react";


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

export default Greeting;