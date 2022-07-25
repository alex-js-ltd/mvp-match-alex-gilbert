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
    background-size: 11px 12px;
    background-position: right 12px top 9px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='12' viewBox='0 0 11 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 11.52C11 11.7855 10.8034 12 10.56 12H0.440001C0.196625 12 0 11.7855 0 11.52V5.22H11V11.52ZM0.440001 1.08H2.75V0.12C2.75 0.054 2.7995 0 2.86 0H3.63C3.6905 0 3.74 0.054 3.74 0.12V1.08H7.26V0.12C7.26 0.054 7.3095 0 7.37 0H8.14C8.2005 0 8.25 0.054 8.25 0.12V1.08H10.56C10.8034 1.08 11 1.2945 11 1.56V4.2H0V1.56C0 1.2945 0.196625 1.08 0.440001 1.08Z' fill='white'/%3E%3C/svg%3E");
  }

  .DateRangePickerInput {
    display: flex;
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
