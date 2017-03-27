import React, {Component} from "react"
import Search from "./Search"
import $ from "jquery"

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      movies: []
    }
  }

  onSearchInput (evt) {
    this.setState({
      query: evt.target.value
    })
  }

  onSubmitQuery(evt){
    evt.preventDefault();
    // console.log(this.state.query)
    this.setState({
      query: this.state.query
    }, () => {
      event.preventDefault()
      let url = `http://www.omdbapi.com/?s=${this.state.query}`
      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      })
      .done((response) => {
        const movies = response.Search
        this.setState({
          movies,
          query: ""
        })
        console.log( response.Search )
      })
      // .forEach((movie) => {
      //   this.setState({
      //     movies: this.state.movies.forEach((movie) => {
      //       movie.Title
      //     })
      //   })
      // })
    })
  }

  render(){
    return (
      <div>
        <Search
          handleSearchInput={ (evt) => this.onSearchInput(evt) }
          handleSubmitQuery={ (evt) => this.onSubmitQuery(evt) }
          movies={this.state.movies}
        />
      </div>
    )
  }
}

export default SearchContainer
