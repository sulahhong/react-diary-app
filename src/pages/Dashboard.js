import { useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import ToDoList from "../components/ToDoList";


const Dashboard = () => {
    const [curDate2, setCurDate2] = useState(new Date());
    const headText2 = `${curDate2.getFullYear()}년 ${curDate2.getMonth() + 1}월 ${curDate2.getDate()}일`




    const increaseDay = () => {
        setCurDate2(
            new Date(curDate2.getFullYear(), curDate2.getMonth(), curDate2.getDate() +1)
        );
    };

    const decreaseDay = () => {
        setCurDate2(
            new Date(curDate2.getFullYear(), curDate2.getMonth(), curDate2.getDate() -1)
        );
    };

    return (
        <div>
            {/* <MyHeader
                headText={headText2}  
                leftChild={<MyButton text={"<"} onClick={decreaseDay} />}
                rightChild={<MyButton text={">"} onClick={increaseDay} />}  
            /> */}
            
            <ToDoList />
        </div>
    )
}

export default Dashboard;