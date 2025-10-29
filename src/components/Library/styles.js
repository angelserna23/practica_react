import styled from "styled-components";

export const LibraryWrap = styled.div`
  padding: 1rem;
`;

export const LibraryTitle = styled.h2`
  color: #fff;
  margin: 0 0 1rem 0;
  font-weight: 800;
  letter-spacing: .5px;
`;

export const Empty = styled.p`
  color: #ddd;
  background: rgba(255,255,255,.06);
  padding: 1rem 1.25rem;
  border-radius: 12px;
  border: 1px dashed rgba(255,255,255,.2);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d6d6d6;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform .2s ease, box-shadow .2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,.18);
  }
`;

export const RemoveButton = styled.button`
  background-color: #860000ff;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: .55rem 1rem;
  cursor: pointer;
  transition: transform .2s ease, background-color .2s ease, box-shadow .2s ease;

  &:hover {
    background-color: #bb47e9;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,.22);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
