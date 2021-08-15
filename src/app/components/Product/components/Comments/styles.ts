import styled from 'styled-components/macro';

export const StyledComments = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .comment-box {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 14fr;
    width: 100%;
    height: fit-content;
    padding: 1em;
    margin-bottom: 1em;
    .text-container {
      display: flex;
      /* justify-content: center; */
      align-items: center;
    }
    p {
      text-align: right;
    }
    .img-wrapper {
      margin-left: 1em;
      text-align: center;
    }
    img {
      border-radius: 50%;
      width: 100%;
    }
  }
`;
