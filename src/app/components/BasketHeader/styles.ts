import styled from 'styled-components/macro';

export const StyledBasketHeader = styled.section`
  display: none;
  flex-direction: column;
  background: #fff;
  z-index: 99999;
  position: absolute;
  width: 50%;
  padding: 1em;
  top: 2.8em;
  border-radius: 10px;
  box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.73);

  @media screen and (max-width: 640px) {
    left: 40%;
  }
  .headerBasket {
    margin-top: -1.5em;
    margin-bottom: -2em;
    color: #000;
  }
  .basketItem {
  }
  .imgProduct {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 70px;
    width: 70px;
  }

  .bodyBasketCard {
    display: flex;
  }
  .bodyBasket {
    height: 265px;
    overflow-y: auto;
  }

  .action {
    display: flex;
    flex-direction: row;
  }

  .footerBasket {
    display: flex;
    justify-content: space-between;
  }

  .buy {
    color: #fff;
    background: #ff9800;
    border-radius: 5px;
    padding: 0px 0.5em;
    font-size: 0.9em;
    cursor: pointer;
  }
  .showAllProduct {
    font-size: 0.9em;
    cursor: pointer;
  }
`;
