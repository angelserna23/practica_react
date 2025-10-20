import styled from "styled-components"

const Search = styled.form`
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

const SearchImg = styled.img`
    cursor: pointer;
    padding: 0 1rem;
`;

const SearchInput = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-weight: 600;
    border-right: 1px solid #121212;
    padding-right: 1.5rem;
    padding: 0 4rem;
    text-align: center;
`;

const ButtonSubmit = styled.button`
    background-color: transparent;
    border: none;
`;

export {
    Search,
    SearchImg,
    SearchInput,
    ButtonSubmit,
};