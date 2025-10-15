import React from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/img/search.svg";

const SearchBar = ({ value, onChange, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit();
        console.log("Detecta el cambio de click") //Confirmacion de deteccion
    }
    
    return (
        <form onSubmit={handleSubmit} className="search">
            <input 
                className='search__input' 
                placeholder='Who you wanna search?'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit" className="button_submit">
                <img className='search__img' src= {searchIcon} alt="go"/>
            </button>
        </form>
    )
}

export default SearchBar;