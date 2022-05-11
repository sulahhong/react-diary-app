import { useState, useReducer, useRef, useEffect } from "react";

const dummy = [
  {
    id: 1,
    content: "집에가기", 
    priority: "중요",
    checked: true,
  },
]

console.log(dummy)

const reducer2 = (state, action) => {
  let newState2 = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE" : {
      newState2 = [action.data, ...state]
      break;
    }
    case "REMOVE" : {
      newState2 = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "TOGGLE" : {
      newState2 = state.map((it) => it.id === action.data.id ? {...action.data} : it);
      break;
    }
    default:
    return state;
  }

  // localStorage.setItem("todo", JSON.stringify(newState2));

  return newState2
}




const ToDoList = ({ id, content, priority, checked}) => {
  const [data, dispatch] = useReducer(reducer2, [dummy]);

  useEffect(() => {
    const localData2 = localStorage.getItem("todo");
    if (localData2) {
      const todoList = JSON.parse(localData2).sort((a, b) => parseInt(b.id) - parseInt(a.id));
      dataId.current = parseInt(todoList[0].id) + 1;

      dispatch({ type: "INIT", data: todoList});
    };
  },[]);


  const dataId = useRef(0);
  const todoRef = useRef();

  //CREATE
  const onCreate2 = (content, priority, checked) => {
    dispatch({
      type:"CREATE",
      data: {
        id: dataId.current,
        content,
        priority,
        checked,
      },
    });
    dataId.current += 1;
  }

  //REMOVE
  const onRemove2 = (targetId) => {
    dispatch({ type: "REMOVE", targetId});
  };

  //TOGGLE
  const onToggle2 = (targetId, content, priority, checked) => {
    dispatch({
      type: "TOGGLE",
      data: {
        id: targetId,
        content,
        priority,
        checked,
      },
    });
  };


  return (
    <div className="ToDoList">
      <h2>TODOLIST</h2>

      <input className="ToDoList" autoFocus placeholder="오늘의 할일은?"/> 
      <button onClick={onCreate2}>작성</button>
      <div>
        {content}
      </div>
    </div>
  );
};

export default ToDoList;
