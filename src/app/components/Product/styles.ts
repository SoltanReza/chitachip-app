import styled from 'styled-components/macro';

export const StyledProduct = styled.section`
  .cardProduct {
    margin: 0px 20px;
  }

  .productInfo {
    background: #ece8e8;
    border-radius: 9px;
    -webkit-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
  }

  .productTitle {
    display: flex;
    justify-content: center;
  }

  .productAlert {
    margin-top: 1em;
  }

  .alertText {
    color: red;
  }
`;
