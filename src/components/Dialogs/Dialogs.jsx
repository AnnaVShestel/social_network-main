import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    debugger
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElement = props.state.messages.map(m => <Message id={m.id} message={m.message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;