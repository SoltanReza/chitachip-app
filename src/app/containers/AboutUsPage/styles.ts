import styled from 'styled-components/macro';
import { BaseLayout } from 'app/components/BaseLayout';

export const StyledAboutUsPage = styled(BaseLayout)``;
export const TextContainer = styled.div`
  background-color: white;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-family: 'DiodrumArabic-Medium';
  }
  h2 {
    padding-right: 5%;
    align-self: flex-start;
  }
`;

export const Container = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 15px;
  padding: 10px 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);

  h3 {
    color: #f8ad4e;
  }
  p {
    color: black;
  }
`;
