import styled from 'styled-components';

export const Header = styled.header`
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  /*background-color: #bdbdbd;
  border: 2px solid #fff;
  border-top: none;
  border-radius: 0 0 5px 5px; */

  img {
    height: 70px;
    margin-left: 20px;
    padding: 5px 0;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;

  a {
    color: #000;

    & + a {
      margin-left: 20px;
    }
  }
`;
