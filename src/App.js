import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
            recal: "",
        }
    }

    onClick = button => {
        if(button==="M+"){
            this.state.recal=this.state.result
            alert('Your result stored');
        }
        else if(button==="MR"){

            this.setState({
                result: this.state.result + this.state.recal
                
            })
            
            alert('Your previously stored result is called');
        }
        else if(button==="Pow"){

            this.setState({
                result: this.state.result * this.state.result
                
            })
            
        }
        else if(button==="sq"){

            this.setState({
                result: Math.sqrt(this.state.result )
            })
            
        }

        else if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
