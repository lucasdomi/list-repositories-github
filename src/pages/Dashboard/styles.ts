import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 700px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.colors.primary};
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: '#a8a8b3';
    }
  }

  button {
    height: 70px;
    width: 210px;
    background: ${(props) => props.theme.colors.buttonSubmit};
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      ${(props) =>
        props.theme.colors.buttonSubmit &&
        css`
          background: ${shade(0.2, props.theme.colors.buttonSubmit)};
        `}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: ${(props) => props.theme.colors.backgroundCard};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 16px;

      strong {
        font-size: 20px;
        color: ${(props) => props.theme.colors.primary};
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
