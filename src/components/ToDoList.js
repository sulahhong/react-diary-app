import { useState, useRef, useEffect} from "react";
import List from "./List";


const getLocalStorage = () => {
  let storage = localStorage.getItem("todoList")
  if (storage) {
    return JSON.parse(storage)
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [toDos, setToDos] = useState(getLocalStorage());
  const [currentContent, setCurrentContent]= useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  



  const onCreateToDo = (content) => {
    const newItem = {
      title: currentContent,
      id: new Date().getTime().toString(),
    };
    setToDos([newItem, ...toDos])
    setCurrentContent("")
  }

  const onRemoveToDo = (id) => {
    setToDos(toDos.filter((it) => it.id !== id))
  }

  const onEditToDo = (id) => {
    const targetToDo = toDos.find((it) => it.id === id);
    setIsEditing(true);
    setEditId(id);
    setToDos(targetToDo.title);
  }

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(toDos))
  }, [toDos])


  return (
    <div>
      <h2>TODOLIST</h2>
    <form onSubmit={onCreateToDo}>
      <input 
        className="ToDoList" autoFocus placeholder="오늘의 할일은?"
        value={currentContent}
        onChange={(e) => setCurrentContent(e.target.value)}/> 
      
      <button type="submit" >{isEditing ? '수정' : '작성'}</button>
      </form>
      <div>
            <h4>{toDos.length}개의 할일이 있어요</h4>
            <List items={toDos} removeItem={onRemoveToDo} editItem={onEditToDo} />

                {/* {toDos.map((it) => (
                    <div key={it.id} className="btn_family">
                      <button><GrCheckbox /></button>
                      {it.currentContent} 
                      <button><GrEdit /></button>
                      <button onClick={()=> console.log(editId)}><ImBin /></button>
                      </div>
                    //the checkbox is selected change the icon  <GrCheckboxSelected />
                ))} */}

      </div>
    </div>
  );
};

export default ToDoList;
