export default function Title({ children, titleStyle }) {
    return(
        <div className={ titleStyle }>
            { children }
        </div>
    )
}