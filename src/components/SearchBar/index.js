import React from "react";
import searchIcon from "../../assets/img/search.svg";
import { Search, SearchImg, SearchInput, ButtonSubmit } from "./styles";

const SearchBar = ({ value, onChange, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit();
        console.log("Detecta el cambio de click") //Confirmacion de deteccion
    }
    
    return (
        <Search onSubmit={handleSubmit}>
            <SearchInput
                className='search__input' 
                placeholder='Who you wanna search?'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <ButtonSubmit type="submit" >
                <SearchImg src= {searchIcon} alt="go"/>
            </ButtonSubmit>
        </Search>
    )
}

export default SearchBar;