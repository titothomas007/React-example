import React , {Component} from 'react';

// extending the component class from react, same as react.component
class SearchBar extends Component{ 
    // calling components constructor and calling the porps of Componets props
    constructor(props){
        super(props);
        // setting up the state for this componenet. Here term is something we are recording.
        // state can be used only for class based component.
        this.state = {term:''}
    }

    //always render some jsx or else will be thrown with error.
    render(){
        //Calling onChange function using es6 arrow function.
        return (
            <div className="search-bar"> 
                <input
                    // setting the value based on state, controlled value
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;