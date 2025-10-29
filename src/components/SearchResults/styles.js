import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const ListContent = styled.ul`
  padding: .5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columnas en desktop */
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

const SongAddDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SongLink = styled(RouterLink)`
  color: #860000ff;
  font-weight: 600;

  &:hover {
    color: #4a0366ff;
    transition: all .2s ease;
  }
`;

const SongText = styled.p`
  padding-top: 1rem;
  padding-left: 1rem;
  color: #333;
  font-weight: 600;
`;

const SongAddButton = styled.button`
  background-color: #860000ff;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all .2s ease-in;
  margin-top: 1rem;

  &:hover {
    background-color: #bb47e9;
    transform: translateY(-2px);
  }
`;

export {
  ListContent,
  ListSong,
  SongTitle,
  SongText,
  SongLink,
  SongAddDiv,
  SongAddButton,
};
