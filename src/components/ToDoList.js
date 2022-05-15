import { useState, useRef, useReducer, useEffect} from "react";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr"
import {ImBin} from "react-icons/im"

const getLocalStorage=()=>{
  let storage=localStorage.getItem('todoList')
  if(storage){
    return JSON.parse(storage)
  }else{
    return [];
  }
}

const ToDoList = () => {
  const [toDos, setToDos] = useState(getLocalStorage());
  const [currentContent, setCurrentContent]= useState("")



  const dataId2 = useRef(0);


  const onCreateToDo = (content) => {
    let newItem = {
      currentContent,
      id: dataId2.current,

    };
    dataId2.current += 1;
    setToDos([newItem, ...toDos])
    
  }
  useEffect(()=>{
    window.localStorage.setItem ("todoList", JSON.stringify(toDos))
  }, [toDos])

  const onDeleteToDo = (targetId) => {
    const newToDoList = toDos.filter((it) => it.id !== targetId);

    setToDos(newToDoList)
    
    console.log(toDos)
  }


  return (
    <div className="ToDoList">
      <h2>TODOLIST</h2>

      <input 
        className="ToDoList" autoFocus placeholder="오늘의 할일은?"
        value={currentContent}
        onChange={(e) => setCurrentContent(e.target.value)}/> 
      
      <button onClick={onCreateToDo} >작성</button>
      <div>
            <h4>{toDos.length}개의 할일이 있어요</h4>
                {toDos.map((it) => (
                    <div key={it.id}>
                      <GrCheckbox />{it.currentContent}<ImBin  /></div>
                    //the checkbox is selected change the icon  <GrCheckboxSelected />
                ))}

      </div>
    </div>
  );
};

export default ToDoList;
