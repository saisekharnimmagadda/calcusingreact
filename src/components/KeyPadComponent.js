import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            
            <div className="button">
                <button name="M+" onClick={e => this.props.onClick(e.target.name)} style={{ backgroundColor: 'red', color: 'white' }} >M+</button>
                <button name="Pow" onClick={e => this.props.onClick(e.target.name)} style={{ backgroundColor: 'orange', color: 'white' }} >(x)^2</button>
                <button name="sq" onClick={e => this.props.onClick(e.target.name)} style={{ backgroundColor: 'yellow', color: 'white' }} >sq</button>
                <button name="MR" onClick={e => this.props.onClick(e.target.name)} style={{ backgroundColor: 'blue', color: 'white' }}>MR</button><br/>


                <button name="(" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)} style={{ backgroundColor: 'black', color: 'white' }}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>)</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)} style={{ backgroundColor: 'black', color: 'white' }}>C</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}style={{ backgroundColor: 'black', color: 'white' }}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
