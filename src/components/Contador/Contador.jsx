import React from 'react'

export class Contador extends React.Component{
    constructor(){
        super()
        this.state = {contador:0}
        console.log('construindo  a  classe')
    }

    UNSAFE_componentWillMount(){
        console.log('o nosso componete sera montado')
      }
      //metodo chamado sempre que uma prop ou um estado é atualizado
      shouldComponentUpdate(){
        // if(this.state.contador === 2)return false
        return true
      }

      UNSAFE_componentWillUpdate(){
        console.log('will update')
      }
      componentDidUpdate(){
        console.log('did update')
      }
      componenteWillUnmount(){
        console.log('o componnete sera desmontado')

        document.removeEventListener('scroll', this.consoleScroll())
      }

      consoleScroll(){
        console.log('rolando a pagina')
      }

    render(){
        console.log('renderizando')
        return(
            <div>
                <h1>{this.state.contador}</h1>

                <button onClick={()=>this.setState({contador: this.state.contador+1})}>Aumentar</button>

                <button onClick={()=>this.setState({contador: this.state.contador-1})}>Diminuir</button>
            </div>
        )
    }
    componentDidMount(){
        console.log('foi montado')

        document.addEventListener('scroll', this.consoleScroll())
      }
}