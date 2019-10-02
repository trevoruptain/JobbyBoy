import React from 'react';

const Up = ({ bottom, left }) => {
    const handleScroll = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div id="up" onClick={ handleScroll } style={ { bottom, left } }>⬆️</div>
    );
}

export default Up;