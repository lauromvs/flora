import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 80px;
  background: #305b28;

  footer {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  h1 {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }
`;

export const CartButton = styled.button`
  background: none;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;

  svg {
    margin-right: 15px;
  }
`;
