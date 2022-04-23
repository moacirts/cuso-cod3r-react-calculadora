import './CalcButton.css'

export default props => {
    let classes = 'button'
    classes += ` ${props.operation ? 'operation' : ''}`;
    classes += ` ${props.double ? 'double' : ''}`;
    classes += ` ${props.triple ? 'triple' : ''}`;
    return(
        <button 
            onClick={ e => props.clickFunction && props.clickFunction(props.label) }
            className={classes}
        >
            {props.label}
        </button>
    )
}