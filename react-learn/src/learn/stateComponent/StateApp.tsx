import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
    //let index = 0;
    /**
     * Когда вы вызываете useState, вы сообщаете React, что хотите,
     * чтобы этот компонент что-то запомнил
     * Единственным аргументом для состояния является начальное
     * значение индекс переменной. В этом примере устанавливается в 0
     */
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of{sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'hide' : 'Show'} details
            </button>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    )
}