import React from 'react'
import './chatBotForm.css'
import { Chatbot } from 'react-chatbot-kit'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import config from './config'

const ChatBotForm = () => {
    return (
        <div className="chat-bot-form">
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
    )
}

export default ChatBotForm
