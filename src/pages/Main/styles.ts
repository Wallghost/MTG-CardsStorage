import styled from 'styled-components';

export const Content = styled.div`
  margin: 30px auto 0 auto;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.div`
  cursor: pointer;
  width: 50px;
  height: 100px;
  margin-top: 30px;
  flex-direction: row;
  margin: 20px 200px 200px 0;
`;
