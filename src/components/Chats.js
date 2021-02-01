import React from 'react'
import './Chats.css'
import Chat from './Chat'

const Chats = () => {
    return (
        <div className="chats"> 
            <Chat 
                name="Mary"
                message="Hi! Nice to meet you!"
                timestamp="40 min ago"
                profilePic="https://img.freepik.com/free-photo/travel-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-wtih-trendy-hat-sunglass-smiling-blue-pastel-background-copy-space_1258-852.jpg?size=626&ext=jpg&ga=GA1.2.576942572.1599955200"
            />
            <Chat 
                name="Alice"
                message="Hi!!"
                timestamp="40 min ago"
                profilePic="https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg"
            />
            <Chat 
                name="Mary"
                message="Hi! Ok! )))"
                timestamp="40 min ago"
                profilePic="..."
            />
            <Chat 
                name="Mary"
                message="Hi! Nice to meet you!"
                timestamp="40 min ago"
                profilePic="..."
            />
            <Chat 
                name="Mary"
                message="Hi! Nice to meet you!"
                timestamp="40 min ago"
                profilePic="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            />
        </div>
    )
}

export default Chats
