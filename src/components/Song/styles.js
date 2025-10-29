import styled from "styled-components";

export const Card = styled.div`
  background: #f3f3f3;
  border-radius: 16px;
  padding: 0.75rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
`;

export const SongTitle = styled.h4`
  margin: 0 0 .25rem 0;
  font-weight: 700;
`;

export const SongMeta = styled.p`
  margin: 0;
  color: #333;
  font-weight: 600;
`;

export const SongAlbum = styled.span`
  color: #6a1b9a;
`;

export const Small = styled.small`
  display: block;
  margin-top: .5rem;
  opacity: .8;
`;
