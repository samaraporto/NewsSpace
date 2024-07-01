import React from 'react'
import {NavBar} from './components/NavBar/NavBar'
import { Article } from './components/Article/Article'
import {Counter} from './components/Counter/Counter'

import './styles/App.css'

import articleImg1 from "./assets/images/article1.jpeg"
import articleImg2 from "./assets/images/article2.jpeg"
import articleImg3 from "./assets/images/article3.jpeg"

//Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do metodo render

//Componente funcional é uma função que retona HTML

class App extends React.Component{
  constructor(){
    super()
    this.state={showCounter: false}
  }

  render(){
    return(
      <>
        <NavBar/>
          <Counter/>

        <section id="articles">

          <Article title="Designing DashBoard" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis facere cupiditate. Consequuntur aliquam soluta possimus officia, veritatis itaque dolores ex harum modi delectus quisquam corporis commodi nostrum nemo tenetur?" img={articleImg1}
          />

          <Article title="Vibrant Portraint of 2020" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis facere cupiditate. Consequuntur aliquam soluta possimus officia, veritatis itaque dolores ex harum modi delectus quisquam corporis commodi nostrum nemo tenetur?" provider="SpaceNews" img={articleImg2}
          />

          <Article title="36 days of death" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis facere cupiditate. Consequuntur aliquam soluta possimus officia, veritatis itaque dolores ex harum modi delectus quisquam corporis commodi nostrum nemo tenetur?" provider="SpaceNews" img={articleImg3}
          />
        </section>
      </>
    )
  }
}

export default App;
