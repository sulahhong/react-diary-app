import { useState, useRef, useEffect, useCallback} from "react";
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

  const onToggle = useCallback((id) => {
    setToDos(toDos.map((it) => it.id === id ? {...it, checked: !it.checked} : it,),
    )},
    [toDos],
    );

  const onCreateToDo = (e) => {
    e.preventDefault();
    if (toDos && isEditing) {
      setToDos(
        toDos.map((it) => {
          if (it.id === editId) {
            return {...it, title: toDos}
          }
          return it;
        })
      )
    }
    const newItem = {
      title: currentContent,
      id: new Date().getTime().toString(),
    };
    setToDos([newItem, ...toDos])
    setCurrentContent("")
    setIsEditing(false)
  }

  const onRemoveToDo = (id) => {
    setToDos(toDos.filter((it) => it.id !== id))
   
  }

  const onEditToDo = (id) => {
    const targetToDo = toDos.find((it) => it.id === id);
    setIsEditing(true);
    setToDos(targetToDo.title);
  }

  const clearList = () => {
    setToDos([]);
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
            
            <List items={toDos} removeItem={onRemoveToDo} editItem={onEditToDo} onToggle={onToggle} />
      </div>
      <div>
        <h4></h4>
      </div>
      <div><button onClick={clearList}>모두 삭제</button></div>
    </div>
  );
};

export default ToDoList;
