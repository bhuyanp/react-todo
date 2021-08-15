
const Button = ({title}) => {
    return (
        <button>{title}</button>
    )
}

Button.defaultProps = {
    title:"Add"
}

export default Button
