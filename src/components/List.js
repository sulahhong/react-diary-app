import React from "react";
import { GrCheckbox, GrCheckboxSelected, GrEdit } from "react-icons/gr"
import {ImBin} from "react-icons/im"

const List = ({ items, removeItem, editItem, onToggle }) => {
    
    return (
        <div>
            <h4>{items.length}개의 할일이 있어요</h4>
            {items.map((item)=> {
                const {id, title, checked} = item;
                return (
                    <div key={id} className="btn_family">
                        <button onClick={() => onToggle(id)}>
                            {checked ? <GrCheckboxSelected /> :<GrCheckbox /> }
                            
                        </button>
                        {title}
                        <button 
                            type="button"
                            onClick={() => editItem(id)}>
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