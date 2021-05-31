import styled from 'styled-components/macro';

export const StyledUserFavorite = styled.section`
  .userFavoriteTitle {
    color: #ffb14d;
    font-size: 1.2em;
    font-weight: bold;
  }

  .userFavoriteDescription {
    color: #000;
    font-size: 0.8em;
    margin-top: 0.8em;
  }

  .customers {
    border-collapse: collapse;
    width: 100%;
    margin-top: 1em;
    border-radius: 8px;
    overflow: hidden;
  }

  .customers td,
  .customers th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  .customers tr:nth-child(even) {
    background-color: #f6f6f6;
  }

  .customers tr:hover {
    background-color: #ddd;
  }

  .customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #cccccc;
    color: #000;
  }

  .action {
    display: flex;
    justify-content: space-evenly;
  }

  .actionView {
    background: radial-gradient(
      56.98% 186.2% at 15.71% 50%,
      #ffb14d 0%,
      #ffb14d 32.3%,
      #ffb14d 60.3%,
      #ffb14d 86.6%,
      #ffb14d 100%
    );
    border-radius: 20px !important;
    font-size: 0.8em;
    font-weight: bold;
    padding-right: 1em;
    color: #fff;
  }

  .actionDelete {
    background: #df1e26;
    border-radius: 20px !important;
    font-size: 0.8em;
    font-weight: bold;
    padding-right: 1em;
    color: #fff;
  }
`;
