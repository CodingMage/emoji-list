import React from 'react';

const EmojiDisplay = ({ character }) => {
    return (
        <div className='emojidisplay'>
            <span>{character}</span>
        </div>
    );
};

export default EmojiDisplay;