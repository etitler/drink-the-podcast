import styled from 'styled-components'

import PageLayout from './components/page-layout';

const StyledH1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const AboutPage = () => (
  <PageLayout>
    <StyledH1>
        Welcome to an About page
    </StyledH1>
  </PageLayout> 
);

export default AboutPage;
