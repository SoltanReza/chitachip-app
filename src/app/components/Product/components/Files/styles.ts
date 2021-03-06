import styled from 'styled-components/macro';
import DownloadIcon from '../images/download.svg';
export const StyledFiles = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  .file-component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border: 1px solid #f3aa3c;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1em;
    margin: 1em;
    text-align: center;

    .icon-box {
      cursor: pointer;
      background: url(${DownloadIcon});
      background-repeat: no-repeat;
      background-position: center;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: grid;
      place-items: center;
      padding: 1em;
      width: 3em;
      height: 3em;
      &:hover {
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
