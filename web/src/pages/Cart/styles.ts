import styled, { css } from 'styled-components';

interface IActionContainerProps {
  minusDisable: boolean;
  plusDisable: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 60vh;
  margin: 0 auto;
  padding: 80px 0;
  margin-top: -140px;
  border-radius: 8px;

  background: #efeff3;

  display: flex;
  flex-direction: column;

  p {
    color: #305b28;
    margin-left: auto;
    margin-right: 110px;
    font-size: 20px;
  }
  strong {
    color: #305b28;
    margin-left: auto;
    margin-right: 110px;
    font-size: 24px;
  }
`;

export const Product = styled.div`
  display: flex;
  background: #fff;
  border-radius: 5px;
  margin: 0 110px;
  margin-bottom: 40px;
  flex-direction: row;
  height: 200px;

  &:last-child {
    margin-bottom: 0;
  }
  img {
    height: 100%;
    width: 200px;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
  }
`;

export const ProductContent = styled.div`
  font-size: 16px;
  margin-left: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: #305b28;
    font-size: 28px;
    font-weight: 600;
  }
  h2 {
    color: #db772b;
    font-size: 24px;
    margin-top: 15px;
  }
  p {
    color: #2c2c2c;
    font-size: 20px;
  }
`;

export const ActionContainer = styled.div<IActionContainerProps>`
  color: #e9863b;
  width: 115px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  margin-left: auto;
  margin-right: 60px;
  div {
    margin-top: 45px;
  }
  button {
    height: 36px;
    width: 36px;
    background: none;
    border: 0;
    color: #e9863b;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 90px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #e9863b;
      color: #fff;
      border-radius: 8px;
    }
  }
  #minusButton {
    ${props =>
    props.minusDisable &&
    css`
        background: #e4e4eb;
        color: #969696;
        cursor: default;
      `};
  }
  #plusButton {
    ${props =>
    props.plusDisable &&
    css`
        background: #e4e4eb;
        color: #969696;
        cursor: default;
      `};
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;

  div {
    display: flex;
    justify-content: flex-end;

    button {
      font-weight: 600;
      border-radius: 8px;
      margin-left: 40px;
      border: 0;
      background: #305b28;
      color: #fff;

      display: flex;
      flex-direction: row;
      align-items: center;

      .text {
        padding: 16px 24px;
      }

      .icon {
        display: flex;
        padding: 16px 16px;
        background: #4e7248;
        border-radius: 0 8px 8px 0;
        margin: 0 auto;
      }

      &:first-child {
        background: none;
        color: #2c2c2c;
      }
    }
  }
`;
