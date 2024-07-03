import React from 'react'


import './styles.css'

// quando vc passa uma propriedade para dentro de um componete em class
// this.props = {
//     title = 'exemplo'
// }

export function Article({title, provider, description, img , url}) {
    //em classe
    //basta uasar o: this.props. na classe o atributo passado ja estara na classe
    //
        return(
            <article id="article">
                <img src={img} alt="" />
                <div className="article-infos">
                    <h2>{title}</h2>
                    <h3>{provider}</h3>

                    <p>
                        {description}
                    </p>
                    <a href={url}>{url}</a>
                </div>
            </article>
        )
    }
