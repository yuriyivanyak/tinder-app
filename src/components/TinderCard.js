import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401'
        },
        {
            name: 'elon mask',
            url: 'data:image/jpeg;base64,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'
        },
    ])


    return (
        <div>

            <div className='tinderCards__cardContainer'>
                    {people.map((character) =>
                    <TinderCard 
                        className='swipe' 
                        key={character.name}>
                            <div
                                style={{ backgroundImage: 'url(' + character.url + ')' }} 
                                className='card'>
                                <h3>{character.name}</h3>
                            </div>
                    </TinderCard>
                    )}
                </div>
        
        </div>
    )
}

export default TinderCards
