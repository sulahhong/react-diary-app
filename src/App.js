import { useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE" : {
      // const newItem = {
        // ...action.data,
        // newState = [newItem, ...state]; } 
        // 아래와 똑같은 내용 
        newState = [action.data, ...state]
        break;
    }
    case "REMOVE" : {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT" : {
      newState = state.map((it) => it.id === action.data.id ? {...action.data} : it);
      break;
    }
    default:
    return state;
  }
  return newState
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  
  const dataId = useRef(0);

  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
       date: new Date(date).getTime(),
       content,
       emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary/:id' element={<Diary />} />
          {/* <Route path='/diary' element={<Diary />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


