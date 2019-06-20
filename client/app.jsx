import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Memes from './components/memes/memes.jsx';
import Motivational from './components/motivational/motivational.jsx';
import Random from './components/random/random.jsx';
import Trivia from './components/trivia/trivia.jsx';
import styles from '../client/app.module.css';
import Title from './components/title/title.jsx'
import Bar from './components/bar/bar.jsx'
import axios from 'axios';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:'',
      url: null
    }

    this.handleClickMeme = this.handleClickMeme.bind(this);
    this.handleClickDidYouKnow = this.handleClickDidYouKnow.bind(this);
    this.handleClickMotivational = this.handleClickMotivational.bind(this);
    this.handleClickShuffle = this.handleClickShuffle.bind(this);
  }


  handleClickMeme() {
    axios.get('https://sv443.net/jokeapi/category/Miscellaneous?blacklistFlags=nsfw,religious,political')
      .then(({ data }) => {
        if(data.type === "twopart") {
          this.setState({
            message: `${data.setup}\n${data.delivery}`,
            url: null,
          })
        } else {
          this.setState({
            message: data.joke,
            url: null
          })
        } 
    })
  }

  handleClickDidYouKnow() {
    axios.get('/api/quotes')
      .then(didYouknowResult => {
        const phrase = didYouknowResult.data.phrase.charAt(0).toUpperCase() +  didYouknowResult.data.phrase.slice(1).toLowerCase();
        const url = didYouknowResult.data.url;
        this.setState({
          message: `${phrase}`,
          url: url 
        })
      })
      .catch(err => {
        console.log(err, 'error retriving data in client');
      })
  }

  handleClickMotivational() {
    axios.get('/api/quotes')
      .then(motivationalPhrase => {
        const phrase = motivationalPhrase.data.motivational.charAt(0).toUpperCase() + motivationalPhrase.data.motivational.slice(1).toLowerCase();
        this.setState({
          message: phrase,
          url: null
        })
      })
      .catch(err => {
        console.log(err, 'error retrieving data in client');
      })
  }

  handleClickShuffle() {
    const shuffle =  Math.floor(Math.random() * 2);

    if(shuffle === 0) {
      this.handleClickMeme();
    } else if (shuffle === 1) {
      this.handleClickDidYouKnow();
    } else if (shuffle === 2) {
      this.handleClickMotivational();
    }
  }

  render() {
    return (
      <div className={styles.container}>  
        <div className={styles.title}>
          <Bar/>
        </div>
        <div>
          <Title/>
        </div>
        <div className={styles.options}>
        <Motivational onClick={this.handleClickMotivational}/>
        <Memes onClick={this.handleClickMeme}/>
        <Trivia onClick={this.handleClickDidYouKnow}/>
        <Random onClick={this.handleClickShuffle}/>
        </div>
        <div className={styles.containerMessage}>
          <div className={styles.message}>
             {this.state.message}
          </div>
          <div className={styles.url}>
            {this.state.url && (
            <a href={this.state.url}>Learn more</a>
            )}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));