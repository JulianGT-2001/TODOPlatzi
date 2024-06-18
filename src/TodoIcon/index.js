import './TodoIcon.css'

const iconTypes = {
    "check": (color) => 
    <svg className="Icon-svg"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    fill={color}
    >
    <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
    <path d="M10.97 4.97a.235.235 0 00-.02.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.06L6.97 11.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-1.071-1.05z" />
    </svg>,
    "delete": (color) => 
    <svg className="Icon-svg"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    fill={color}
    >
    <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M368 368L144 144M368 144L144 368"
    />
    </svg>
};

function TodoIcon(props) {
    return (
        <span className={`Icon-container Icon-container-${props.type}`} onClick={props.onClick}>
            {iconTypes[props.type](props.color)}
        </span>
    )
}

export { TodoIcon };