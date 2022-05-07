import { useState } from "react";


const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
    { value: "all", name: "모두"},
    { value: "good", name: "좋은 감정만"},
    { value: "bad", name: "안좋은 감정만"},
];

const ControlMenu = ({ value, onChange, optionList }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {optionList.map((it, idx) => (
                <option key={idx} value={it.value}>
                    {it.name}
                </option>
            ))}
        </select>
    );
};


const DiaryList = ({ diaryList }) => {
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("all");

    // 선택된 리스트로 정렬하는 함수
    const getProcessedDiaryList = () => {
        const filterCallBack = (item) => {
            if (filter === "good") {
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            };
        };
        //비교 함수
        const compare = (a, b) => {
            if (sortType === "latest") {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        };

        const copyList = JSON.parse(JSON.stringify(diaryList))
        // 배열을 copy하여 배열을 JSON화 문자열로 변경 -> 다시 배열로 복호화 
        // 값만 들어오기 때문에 배열을 제대로 받을 수 있음

        const filteredList = filter === "all" ? copyList : copyList.filter((it)=> filterCallBack(it))

        const sortedList = filteredList.sort(compare);
        return sortedList;
    };

    return (
        <div>
            <ControlMenu
                value={sortType}
                onChange={setSortType}
                optionList={sortOptionList}
            />
            <ControlMenu
                value={filter}
                onChange={setFilter}
                optionList={filterOptionList}
            />
            {getProcessedDiaryList().map((it) => (
                <div key={it.id}>{it.content} {it.emotion}</div>
            ))}
        </div>
    );
};

//default props 
DiaryList.defaulrprops = {
    diaryList: [],
}; 


export default DiaryList;