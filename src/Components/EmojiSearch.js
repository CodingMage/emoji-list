import React, { useState } from 'react';
import EmojiDisplay from './EmojiDisplay'
import emojiData from '../emojiData'


const EmojiSearch = () => {
    const [name, setName] = useState('')
    // const [emojis, setEmojis] = useState([])
    let testemoji = []

    for (let i = 0; i < emojiData.length; i++) {
        if (emojiData[i].slug.search(name) > 1) {
            // console.log(emojiData[i].character);
            testemoji.push(emojiData[i].character)

        }
    }

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            {/* {ListEmoji} */}
            <div className="emoji search">

                {
                    testemoji.map(emoji => <EmojiDisplay character={emoji} />)
                }
            </div>
        </div>
    );
};

export default EmojiSearch;