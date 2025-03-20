import { Component } from "react";

/**
 * Component - это базовый класс для компонентов Реакт,
 * определенных как классы JavaScript. Компоненты классов по прежнему
 * поддерживаются Реакт, но их использование не рекомендуется в новом коде.
 */
export class Greeting extends Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}