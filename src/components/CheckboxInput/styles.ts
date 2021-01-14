import styled from 'styled-components';

export const Checkmark = styled.span`
  height: 15px;
  width: 15px;
  background-color: #f5f4f6;
  border: 1px solid #dedce1;
  margin-right: 8px;
  transition: all 0.4s;
`;

export const Container = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-left: 8px;
  cursor: pointer;
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 50px;
  margin-top: auto;
  margin-bottom: auto;

  p {
    font-size: 16px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ ${Checkmark} {
    background-color: #ccc;
  }

  input:checked ~ ${Checkmark} {
    background-color: #365df0;
    border: 1px solid #365df0;
  }

  ${Checkmark}:after {
    content: '';
    display: none;
  }

  input:checked ~ ${Checkmark}:after {
    display: block;
  }

  & ${Checkmark}:after {
    width: 11px;
    height: 6px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(315deg) scaleX(-1);
    -ms-transform: rotate(315deg) scaleX(-1);
    transform: rotate(315deg) scaleX(-1);
  }
`;
