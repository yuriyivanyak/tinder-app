import React, {useState} from 'react'
import './chatScreen.css'

import Avatar from '@material-ui/core/Avatar'

const ChatScreen = () => {
    const [input, setInput] = useState();

    const [messages, setMessages] = useState([
        {
            name: 'Mary',
            image: "https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg",
            message: 'Hey! Whats up?'
        },
        {
            name: 'Mary',
            image: "https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg",
            message: 'Chills not skills'
        },
        {
            message: 'Hey! Whats up?'
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH MARY ON 10/11/21   
            </p>
            <div className="chatSreen_mesContainer">
            {
                messages.map((m)=>  m.name ? <div className="chatScreen__message"> 
                <Avatar 
                    className="chatScreen__image"
                    src={m.image}
                    alt={m.name}
                />
                <p className="chatScreen__text">{m.message}</p>
                </div> : <div className="chatScreen__message"> 
                            <p className="chatScreen__textUser">{m.message}</p>
                        </div>)
            }
            </div>
            

            <div className="chatScreen___inputGroup">
                <form className="chatScreen__form">
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text" 
                        placeholder="type a message"
                        className="chatScreen__input"    
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__btn">SEND</button>
                </form>
            </div>
        </div>
        
    )
}

export default ChatScreen
