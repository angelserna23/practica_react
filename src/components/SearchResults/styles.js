import styled from "styled-components";

const ListContent = styled.ul`
    padding: .5rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /*
    gap: 1rem;
    box-sizing: border-box;
`;

const ListSong = styled.li`
    padding: .5rem 1rem;
    background-color: #d6d6d6ff;
    margin: .5rem .5rem;
    padding-bottom: 1rem;
    border-radius: 18px;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        transform: translateY(-5px);
        background-color: #bebebeff;
    }
`;

const SongTitle = styled.h4`

`;

const SongText = styled.p`
    padding-top: 1rem;
    padding-left: 1rem;
    color: #333;
    font-weight: 600
`;

export {
    ListContent,
    ListSong,
    SongTitle,
    SongText,

};