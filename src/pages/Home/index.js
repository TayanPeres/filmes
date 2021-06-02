import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmes: []
        }
        this.loadFilmes = this.loadFilmes.bind(this)
    }
    componentDidMount() {
        this.loadFilmes()
        
    }
    loadFilmes() {
        // //Url da ApI: https://sujeitoprogramador.com/r-api/?api=filmes/
        let url ='https://sujeitoprogramador.com/r-api/?api=filmes'
        fetch(url)
        //se o r(response).json deu sucesso, 
        .then((r) => r.json())
        //entao vai ter o json inteiro, toda api
        .then((json) => {
            //salvar dentro da state filmes.
            this.setState({filmes: json })

        })
    }
    render() {
        return (
            <div className="container">
                <div className="lista-filmes">
                    { this.state.filmes.map((filme) => {
                        return (
                            <article key={filme.id} className="filme">
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt="capa" />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
               
            </div>
        )
    }

}
export default Home