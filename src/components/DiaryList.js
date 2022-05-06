const DiaryList = ({ diaryList }) => {
    return (
        <div>
            {diaryList.map((it) => (
                <div key={it.id}>{it.content}</div>
            ))}
        </div>
    );
};

//default props 
DiaryList.defaulrprops = {
    diaryList: [],
}; 


export default DiaryList;