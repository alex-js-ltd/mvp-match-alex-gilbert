import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;
  height: auto;
  border-radius: 5px;

  input {
    height: 32px;
    padding: 0px;
    margin: 0;
    background: #1bc5bd;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: white;
    padding-left: 12px;
    border-radius: 5px;
    overflow: hidden;
  }

  * {
    border: 0px solid white;
  }

  input:focus {
    border-bottom: 0px solid #dbdbdb;
  }

  .DateRangePickerInput_arrow_svg {
    display: none;
  }

  .DateRangePickerInput_arrow_svg_1 {
    display: none;
  }

  .DateInput {
    margin-left: 23px;
  }

  .DateRangePicker_picker {
    padding-right: 100px;
  }
`;
