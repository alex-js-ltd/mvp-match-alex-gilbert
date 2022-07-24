import styled from 'styled-components';

export const Menu = styled.div`
  display: none;
  top: 32px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: auto;
  overflow: hidden;

  &:hover {
    display: block;
  }
`;

export const Container = styled.div`
  margin-top: 2px;
  height: auto;
  background: #1bc5bd;
  padding-bottom: 5px;
  border-radius: 5px;
`;

export const MenuItem = styled.div`
  height: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 8px;
  padding-top: 8px;
  padding-left: 12px;

  &:hover ${Menu} {
    display: block;
  }
`;

export const Wrapper = styled.div<{ marginLeft?: number; minWidth?: number }>`
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  width: fit-content;
  height: 32px;
  padding-left: 12px;
  padding-right: 37px;
  background: #1bc5bd;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  background-size: 14px 11px;
  background-position: right 12px top 9px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 11L0.937823 0.499999L13.0622 0.5L7 11Z' fill='white'/%3E%3C/svg%3E");
  margin-left: ${(props) => props.marginLeft}px;
  min-width: ${(props) => props.minWidth}px;
  box-sizing: border-box;

  &:hover ${Menu} {
    display: block;
  }
`;
