import styled from "styled-components";

const SearchBarDiv = styled.div`
    background-color: #333;
    padding: .6rem 0;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    border-radius: 22px;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    margin: 0 30rem;
`;

const WelcomeMessage = styled.p`
    font-size: 1.3rem;

`;

const AppMain = styled.main`
    margin: 1rem 4rem
`;

const ListAlbum = styled.li`
    list-style-type: disc;
    padding-left: .5rem;
    padding-top: .5rem;
`;

const ListContent = styled.ul`
    padding-top: 1rem;
`;

const SongsTitle = styled.h2`
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    border-bottom: 3px solid white;
`;

export {
    SearchBarDiv,
    WelcomeMessage,
    AppMain,
    ListAlbum,
    ListContent,
    SongsTitle,
};