import { Component } from 'react';
import './Calculator.css'

import CalcButton from '../components/CalcButton'
import CalcDisplay from '../components/CalcDisplay'

const initialState = {
    displayValue: '0',
    reuslt: null,
    clearDisplay: false,
    operation: null,
    firstOperationValue: null,
    secondOperationValue: null,
}

class Calculator extends Component {

    state = { ...initialState }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    setOperation = (operationSignal) => {
        let operation = '';
        const firstOperationValue = this.state.displayValue
        const secondOperationValue = this.state.displayValue
        switch (operationSignal) {
            case '+':
                operation = 'calcSum'
                break;
            case '-':
                operation = 'calcSubtraction'
                break;
            case '/':
                operation = 'clacDivision'
                break;
            case '*':
                operation = 'clacMultiplication'
                break;

            default:
                break;
        }
        this.setState({ operation, firstOperationValue, secondOperationValue, clearDisplay: true });
    }

    makeOperation = () => {
        const result = this[this.state.operation](this.state.firstOperationValue, this.state.secondOperationValue)
        this.setState({ result, firstOperationValue: result, displayValue: result, clearDisplay: true })
    }

    calcSum = (a, b) => {
        return parseFloat(a) + parseFloat(b)
    }

    calcSubtraction = (a, b) => {
        return parseFloat(a) - parseFloat(b)
    }

    clacDivision = (a, b) => {
        if (parseFloat(b) === 0)
            return 'ERROR'
        return parseFloat(a) / parseFloat(b)
    }

    clacMultiplication = (a, b) => {
        return parseFloat(a) * parseFloat(b)
    }

    addDigit = (digit) => {
        const currentDisplayValue = this.state.displayValue
        let clearDisplay = currentDisplayValue === '0' || this.state.clearDisplay

        if (digit === '.' && currentDisplayValue.includes('.'))
            return
        else if (digit === '.')
            clearDisplay = false

        const newDisplayValue = (clearDisplay ? '' : currentDisplayValue) + digit

        this.setState({
            displayValue: newDisplayValue,
            secondOperationValue: newDisplayValue,
            clearDisplay: false
        })
    }

    render() {
        return (
            <div className='calculator'>
                <CalcDisplay value={this.state.displayValue} />
                <CalcButton label="AC" clickFunction={this.clearMemory} triple />
                <CalcButton label="/" clickFunction={this.setOperation} operation />
                <CalcButton label="7" clickFunction={this.addDigit} />
                <CalcButton label="8" clickFunction={this.addDigit} />
                <CalcButton label="9" clickFunction={this.addDigit} />
                <CalcButton label="*" clickFunction={this.setOperation} operation />
                <CalcButton label="4" clickFunction={this.addDigit} />
                <CalcButton label="5" clickFunction={this.addDigit} />
                <CalcButton label="6" clickFunction={this.addDigit} />
                <CalcButton label="-" clickFunction={this.setOperation} operation />
                <CalcButton label="1" clickFunction={this.addDigit} />
                <CalcButton label="2" clickFunction={this.addDigit} />
                <CalcButton label="3" clickFunction={this.addDigit} />
                <CalcButton label="+" clickFunction={this.setOperation} operation />
                <CalcButton label="0" clickFunction={this.addDigit} double />
                <CalcButton label="." clickFunction={this.addDigit} />
                <CalcButton label="=" clickFunction={this.makeOperation} operation />
            </div>
        )
    }
}

export default Calculator