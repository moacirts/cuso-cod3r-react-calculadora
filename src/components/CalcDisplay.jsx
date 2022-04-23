import './CalcDisplay.css'

export default ({value}) => {
    let fontSizeClass = '';
    let displayValue = value.toString()

    if(displayValue.length < 10)
        fontSizeClass = 'normal-font'
    else if (displayValue.length < 13)
        fontSizeClass = 'medium-font'
    else if (displayValue.length < 16)
        fontSizeClass = 'small-font'
    else {
        fontSizeClass = 'normal-font'
        displayValue = parseFloat(value).toExponential(3)
    }
    
    return (
        <div className={`calc-display ${fontSizeClass}`}>{displayValue}</div>
    )
}