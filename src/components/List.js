import React, { useState, useRef, useEffect, useCallback } from "react";
import { GrCheckbox, GrCheckboxSelected, GrEdit } from "react-icons/gr";
import { ImBin } from "react-icons/im";

const List = ({
  items,
  removeItem,
  editItem,
  onToggle,
  activelist,
  onCreateToDo,
  currentContent,
  setCurrentContent,
}) => {

  const edit = (id) => {
    editItem(id);
  };

//   const onClick = (id) => {
//     setIsChecked(!Ischecked)
//   }

  return (
    <div className="List">
      <h4>{activelist}개의 할일이 있어요 :)</h4>
      {items.map((item) => {
        const { id, title, checked } = item;
      
        return (
          <div key={id} className="btn_family">
            <button className="btn1" onClick={() => onToggle(id)}>
              {checked ? <GrCheckboxSelected /> : <GrCheckbox />}
            </button>
            <div
                className={checked ? "List_title_1" : "List_title"}   
            >
              <p>{title}</p>
            </div>
            <div className="btn2">
            <button className="editbtn" type="button" onClick={() => edit(id)}>
              <GrEdit />
            </button>
            <button className="delbtn" type="button" onClick={() => removeItem(id)}>
              <ImBin />
            </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
