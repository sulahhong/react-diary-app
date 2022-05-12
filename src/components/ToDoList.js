import { useState, useRef} from "react";


const ToDoList = ({todoList}) => {
  const [toDos, setToDos] = useState([]);

  const dataId2 = useRef(0);

  const onCreateToDo = (content) => {
    const newItem = {
      content,
      id: dataId2.current,
    };
    dataId2.current += 1;
    setToDos([newItem, ...toDos])
  }

  return (
    <div className="ToDoList">
      <h2>TODOLIST</h2>

      <input className="ToDoList" autoFocus placeholder="오늘의 할일은?"/> 
      <button>작성</button>
      <div>
            <h4>{todoList.length}개의 할일이 있어요</h4>
                {todoList.map((it) => (
                    <div key={it.id}>{it.content}</div>
                ))}
      </div>
    </div>
  );
};

export default ToDoList;
