// Write your code here
import {Component} from 'react'

import DesignationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  // ,IntialDestinationsList: destinationsList

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    // console.log()
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    console.log(searchInput)

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              className="form-control"
              onChange={this.onChangeSearchInput}
              placeholder="search"
              value={searchInput}
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="Designation-list">
            {searchResults.map(eachItem => (
              <DesignationItem
                key={eachItem.id}
                destinationDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
