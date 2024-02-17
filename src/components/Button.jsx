export default function Button({ children, buttonStyle, onClick }) {
    return(
        <>
            <button className={ buttonStyle } onClick={onClick}>
                { children }
            </button>
        </>
    )
}