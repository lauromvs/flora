import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f5;
  border-radius: 10px;
  width: 1280px;
  margin: 0 auto;
  margin-top: -140px;
`;

export const Form = styled.form`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    font-size: 16px;
    color: #2c2c2c;
    background: #fff;
    border: 1px solid #f0f0f5;
    border-radius: 8px;
    padding: 10px 20px;

    &::placeholder {
      color: #b7b7cc;
    }

    &:hover,
    &:focus {
      border: 1px solid #305b28;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 25px;
    color: #305b28;
  }

  h3 {
    color: #2c2c2c;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 25px;
  }
  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 48px;

    button {
      font-weight: 600;
      border-radius: 8px;
      border: 0;
      background: #db772b;
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
        background: #e9863b;
        border-radius: 0 8px 8px 0;
        margin: 0 auto;
      }

      &:first-child {
        background: none;
        color: #2c2c2c;
        margin-right: 20px;
      }
    }
  }
`;