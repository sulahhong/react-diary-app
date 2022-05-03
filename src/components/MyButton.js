const MyButton = ({text, type, onClick}) => {
    // 내가 만들지 않은 타입의 버튼이 생성되는 것을 방지
    const btnType = ["positive", "negative"].includes(type) ? type: "default";

    return (
        <button 
            className={["MyButton", `MyButton_${btnType}`].join(" ")} 
            onClick={onClick}
        >
                {text}
        </button>
    )
} 

MyButton.defaultProps = {
    type: "default",
};

export default MyButton; 