import './App.css';
import { Component } from 'react'
//import Home from './components/home'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    return fetch(process.env.API_URL + '/api/books')
      .then(response =>
        response.json()
      )
      .then(data => this.setState({ books: data }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.books}
        </header>



      </div>
    );
  }
}

export default App;
