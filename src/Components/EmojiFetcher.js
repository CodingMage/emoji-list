import React from 'react';
import EmojiDisplay from './EmojiDisplay'
import emojiData from '../emojiData'

const EmojiFetcher = ({ group }) => {

    // eslint-disable-next-line 
    const ListEmoji = emojiData.map(emoji => {
        if (emoji.group === group) {
            return (
                <EmojiDisplay character={emoji.character} />
            )
        }
    })

    return (
        <div className='emoji'>
            {ListEmoji}
        </div>
    );
};

export default EmojiFetcher;