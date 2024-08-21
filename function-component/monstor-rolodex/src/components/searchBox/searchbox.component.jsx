import { Component } from "react";
import "./search-box-styles.css"

class SearchBox extends Component {
        render(){
            return(
                <input
                 type="search"
                placeholder={this.props.placeholder} 
                onChange={this.props.onSearchHandler}
                className={`search-box ${this.props.className}`}/>
            )
        }
}

export default SearchBox
