import React, { useState, useRef, useEffect, useCallback} from "react";
import { GrCheckbox, GrCheckboxSelected, GrEdit } from "react-icons/gr"
import {ImBin} from "react-icons/im"

const List = ({ items, removeItem, editItem, onToggle, activelist, onCreateToDo, currentContent, setCurrentContent }) => {
    
    // const [editForm, setEditForm] = useState(false)

    const edit =(id)=>{
        editItem(id)
        // setEditForm(true)
    }

    return (
        <div>
            <h4>{activelist}개의 할일이 있어요</h4>
            {items.map((item)=> {
                const {id, title, checked} = item;
                return (
                    <div key={id} className="btn_family">
                        <button onClick={() => onToggle(id)}>
                            {checked ? <GrCheckboxSelected /> :<GrCheckbox /> }
                            
                        </button>
                        <div>{title}
                        {/* {editForm? (
                            <form onSubmit={onCreateToDo}>
                            <input 
                              className="ToDoList" autoFocus placeholder="오늘의 할일은?"
                              value={currentContent}
                              onChange={(e) => setCurrentContent(e.target.value)}/> 
                            
                            <button type="submit" >수정</button>
                            </form>
                        ): (title)} */}
                        </div>

                        <button 
                            type="button"
                            onClick={() => edit(id)}>
                            <GrEdit />
                        </button>
                        <button
                            type="button"
                            onClick={() => removeItem(id)}>
                                <ImBin />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default List ;