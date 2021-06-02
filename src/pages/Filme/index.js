import React, {Component } from 'react' 
import './filme.css'

class Filme extends Component {
    constructor(props) {
    super(props)
    this.state = {
        filme: []
    }
}
 componentDidMount() {
     //pegando o id
     const  { id } = this.props.match.params
     let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
     //
     fetch(url)
     .then((r) => r.json())
     //se caiu , filme unico
     .then((json ) => {
         this.setState({filme: json})
         console.log(json)
     })

 }
    render() {
        return (
            <div className="filme-info">
                <h1>{this.state.nome}</h1>
                <img src={this.state.foto} alt="foto" />
                
                {this.state.filme.length !==  0 && 
                <h3>Sinopse</h3>
    }
                    {this.state.filme.sinopse}
            </div>
        )
    }
}
export default Filme