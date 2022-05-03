import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

//COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || ""; 이미지 파일이 불러와지지 않을 때 

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader 
          headText={"App"}
          leftChild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 클릭됨")} />
          } 
          rightChild={
            <MyButton text={"오른쪽 버튼"} onClick={() => alert("오른쪽 클릭됨")}/>
          }
        />
        <h2>haha</h2>

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭됨")}
          type={"positive"}
        />

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭됨")}
          type={"negative"}
        />

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭됨")}
          type={"default"}
        />


        {/* <img src={process.env.PUBLIC_URL + `/asset/emotion1.png`} /> */}
        {/*  public 폴더 안에 이미지를 불러올 때 */}

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


