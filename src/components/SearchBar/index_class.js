import React, { Component } from "react";
import PropTypes from "prop-types";
//Image
import searchIcon from '../../images/search-icon.svg';
//Styles
import { Wrapper, Content } from './SearchBar.styles';

class SearchBar extends Component {

    state = { value: '' };
    timeout = null;

    componentDidUpdate(_prepProps, prevState) {
        
    }


        const timer = setTimeout(()=> {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer);



    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                  type='text' 
                  placeholder='Search Movie'
                  onChange={event => setState(event.currentTarget.value)}
                  value={state}
                  />
            </Content>
        </Wrapper>
    
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}


export default SearchBar;