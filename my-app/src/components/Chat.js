import { useEffect, useState } from "react";
import {addDoc, collection, serverTimestamp, onSnapshot, query, where,} from 'firebase/firestore';
import {auth, db} from '../firebase-config.js';
import "../chatstyle.css"
import "../style.css"

export const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef);
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            console.log(messages);
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
        });
        setNewMessage("");
    };

    return (
        
        <div class="message2">
          <span class="New-Updates">
            New Updates
          </span>
          <div class="News_header">
            <div class="News">
                <img src="static/fi-rr-confetti.svg" class="light"/>
                <a class="news_title" id="news" href="/dps">
                    홍연길 감각 수집 (08/26)<br/>
                    <span class="text-style-1">게시물이 열렸습니다!</span>
                </a>
                <span class="alarm">
                    09.02(토)
                </span>
            </div>
                <div className = "messages">
                    {messages.map((message) => (
                        // console.log(message.text)
                        <div className="message" key = {message.id}>
                            <span className="user">{message.user}</span> 
                            {message.text}
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit = {handleSubmit} className="new-message-form">
                <input 
                className="new-message-input" 
                placeholder="메시지를 입력하세요."  
                onChange = {(e) => setNewMessage(e.target.value)}
                value = {newMessage}
                />
                <button className="send-button">
                    전송
                </button>
            </form>
        </div>
    );

};

export default Chat;