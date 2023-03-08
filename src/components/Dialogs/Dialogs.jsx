import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Anya'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Veronika'},
        {id: 5, name: 'Zhenya'},
        {id: 6, name: 'Vika'}]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}]
    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = messages
        .map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElement}

            </div>
        </div>
    )
}
export default Dialogs;