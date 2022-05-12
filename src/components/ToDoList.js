import { useState, useRef} from "react";


const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [currentContent, setCurrentContent]= useState("")

  const dataId2 = useRef(0);

  const onCreateToDo = (content) => {
    const newItem = {
      currentContent,
      id: dataId2.current,
    };
    dataId2.current += 1;
    setToDos([newItem, ...toDos])
  }

  return (
    <div className="ToDoList">
      <h2>TODOLIST</h2>

      <input 
        className="ToDoList" autoFocus placeholder="오늘의 할일은?"
        value={currentContent}
        onChange={(e) => setCurrentContent(e.target.value)}/> 
      
      <button onClick={onCreateToDo}>작성</button>
      <div>
            <h4>{toDos.length}개의 할일이 있어요</h4>
                {toDos.map((it) => (
                    <div key={it.id}>{it.currentContent}</div>
                ))}

      </div>
    </div>
  );
};

export default ToDoList;
