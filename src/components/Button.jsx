export default function Button({ children, buttonStyle }) {
    return(
        <>
            <button className={ buttonStyle }>
                { children }
            </button>
        </>
    )
}