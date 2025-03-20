/**
 * Context - 
 * контекст компонента класса доступен как this.context. Он доступен только в том случае,
 * если вы указываете, какой контекст вы хотите получить с помощью
 * static get contextTypes() { return { ... } }
 * Компонент класса может считываться только один  контекст за раз
 */

import React from "react";
import ThemeContext from "./themeContext"; // Импортируем ThemeContext


class Button extends React.Component {
    static contextType = ThemeContext; // указываем, что хотим получить контекст ThemeContext
    render() {
        const theme = this.context;
        const className = 'button-' + theme;
        return <button className={className}>Click me!</button>;
    }
}

export default Button;
