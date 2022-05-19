import React from "react";
import { GrCheckbox, GrCheckboxSelected, GrEdit } from "react-icons/gr"
import {ImBin} from "react-icons/im"

const List = ({ items, onRemoveToDo, editItem }) => {
    return (
        <div>
            {items.map((item)=> {
                const {id, title} = item;
                return (
                    <div key={id} className="btn_family">
                        <button>
                            <GrCheckbox />
                        </button>
                        {title}
                        <button 
                            type="button"
                            onClick={() => editItem(id)}>
                            <GrEdit />
                        </button>
                        <button
                            type="button"
                            onClick={() => onRemoveToDo(id)}>
                                <ImBin />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default List ;