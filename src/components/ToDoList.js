import { useState, useRef} from "react";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr"
import {ImBin} from "react-icons/im"

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

  const onDeleteToDo = (targetId) => {
    const newToDoList = toDos.filter((it) => it.id !== targetId);
    setToDos(newToDoList)
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
                    <div key={it.id}><GrCheckbox />{it.currentContent} <ImBin onClick={onDeleteToDo}/></div>
                    //the checkbox is selected change the icon  <GrCheckboxSelected />
                ))}

      </div>
    </div>
  );
};

export default ToDoList;
