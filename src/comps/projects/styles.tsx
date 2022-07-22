import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 17px;
  height: auto;
  border-radius: 10px;
  background: #f1fafe;
`;

export const TitleContainer = styled.div<{
  paddingTop: number;
  paddingLeft: number;
}>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #011f4b;
  padding-top: ${(props) => props.paddingTop}px;
  padding-left: ${(props) => props.paddingLeft}px;
  padding-bottom: 34px;
  display: flex;
`;
