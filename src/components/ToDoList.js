import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import List from "./List";
import MyButton from "./MyButton";

const getLocalStorage = () => {
  let storage = localStorage.getItem("todoList");
  if (storage) {
    return JSON.parse(storage);
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [toDos, setToDos] = useState(getLocalStorage());
  // const [active, setActive] = useState('')
  const [currentContent, setCurrentContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  const onToggle = useCallback(
    (id) => {
      setToDos(
        toDos.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it))
      );
    },
    [toDos]
  );

  const activelist = toDos.filter((task) => !task.checked).length;
  console.log(activelist);

  const onCreateToDo = (e) => {
    e.preventDefault();
    if (toDos && isEditing) {
      setToDos(
        toDos.map((it) => {
          if (it.id === editId) {
            return { ...it, title: currentContent };
          }
          return it;
        })
      );
      setCurrentContent("");
      setIsEditing(false);
    } else {
      const newItem = {
        title: currentContent,
        id: new Date().getTime().toString(),
      };
      setToDos([newItem, ...toDos]);
      setCurrentContent("");
      setIsEditing(false);
    }
  };

  const onRemoveToDo = (id) => {
    setToDos(toDos.filter((it) => it.id !== id));
  };

  const onEditToDo = (id) => {
    const targetToDo = toDos.find((it) => it.id === id);
    console.log(targetToDo);
    // setEditForm(true)
    setIsEditing(true);
    setEditId(id);
    setCurrentContent(targetToDo.title);

    // setToDos(targetToDo.title);
  };

  const clearList = () => {
    setToDos([]);
  };

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div className="ToDoList">
      <h1>TODOLIST</h1>
      <form onSubmit={onCreateToDo} className="todo_form">
        <input
          autoFocus
          placeholder="오늘의 할 일은?"
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
        />

        <button type="submit" className="input_btn">{isEditing ? "수정" : "작성"}</button>
      </form>
      <div>
        <List
          items={toDos}
          removeItem={onRemoveToDo}
          editItem={onEditToDo}
          onToggle={onToggle}
          activelist={activelist}
          onCreateToDo={onCreateToDo}
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
        />
      </div>
      <div className="btn_family2">
        <MyButton 
          text={"모두 삭제"}
          onClick={clearList} />
        <MyButton
            text={"다이어리 홈으로"}
            onClick={() => navigate("/")}
          />
      </div>
    </div>
  );
};

export default ToDoList;
