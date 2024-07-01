import React from 'react'

export class Counter extends React.Component{
    constructor(){
        super()
        // this.contador = 0
        this.state = { contador: 0, name: '', password: ''}

    }

    render(){
        
        return(
            <div style={{marginTop: "20px", marginLeft: "20px"}}>
                <h1>{this.state.contador}</h1>

                <div>
                    <button onClick={()=>{
                    // ! this.contador += 1
                    this.setState({ contador: this.state.contador - 1 })
                }}>Diminuir</button>

                    <button onClick={()=>{
                        this.setState({ contador: this.state.contador + 1 })
                    }}>Aumentar</button>
                </div>

                <form style={{marginTop: "20px"}}>
                    <input type="text" placeholder='nome' value={this.state.name} 
                    onChange={(evento)=>{
                        this.setState({ name: evento.target.value})
                       
                    }}/>

                    <input type="password" placeholder='senha' value={this.state.password} onChange={(evento)=>{
                        this.setState({ password: evento.target.value})
                       
                    }}/>
                    <button type='button'>Enviar</button>
                </form>
                
            </div>
        )
    }
}