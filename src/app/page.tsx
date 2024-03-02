"use client";

import styled from "styled-components";

import background from "@/assets/images/background.svg";
import personal_image from "@/assets/images/personal.jpg";

import { TTag } from "@/lib/types";

import Tags from "@/components/tags";

const skills: TTag[] = [
  { id: 0, name: "Typescript" },
  { id: 1, name: "React JS" },
  { id: 2, name: "React Native" },
  { id: 3, name: "Next.JS" },
  { id: 4, name: "Jest" },
  { id: 5, name: "React Testing Library" },
  { id: 6, name: "Apollo Client" },
  { id: 7, name: "Graphql" },
  { id: 8, name: "Redux" },
  { id: 8, name: "Node.JS" },
  { id: 9, name: "SQL" },
  { id: 10, name: "Git" },
  { id: 11, name: "Netlify" },
  { id: 12, name: "Laravel" },
];

function Home() {
  return (
    <main>
      <Background src={background} />

      <Wrapper>
        <Container>
          <PersonalContainer>
            <Name>I'm Ricardo Malagon</Name>

            <Bio>
              Software engineer with more than 8 years of experience specialized
              in developing web and mobile applications with React. I have
              worked with startups and companies, delivering innovative and
              high-performance solutions. My passion for technology drives me to
              stay up to date with the latest trends and tools, always seeking
              to improve and optimize each project in which I participate.
            </Bio>

            <Tags tags={skills} />
          </PersonalContainer>

          <PersonalImageContainer>
            <PersonalImage src={personal_image} alt="Personal image" />
          </PersonalImageContainer>
        </Container>
      </Wrapper>
    </main>
  );
}

export default Home;

const Wrapper = styled.div`
  margin: 0 auto;
  width: calc(100% - 48px);
  max-width: 1200px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column-reverse;
  }
`;

const PersonalContainer = styled.div`
  margin-top: 120px;
  width: 50%;

  @media (max-width: 920px) {
    margin-top: 40px;
    width: 100%;
  }
`;

const Background = styled.img`
  position: absolute;
  z-index: -1;
  right: 0;

  @media (max-width: 1440px) {
    max-width: 55%;
  }

  @media (max-width: 1024px) {
    max-width: 50%;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

const PersonalImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;

  @media (max-width: 920px) {
    justify-content: center;
    width: 100%;
  }
`;

const PersonalImage = styled.img`
  margin-top: 160px;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const Name = styled.h1`
  font-size: 42px;
`;

const Bio = styled.p`
  font-size: 16px;
  line-height: 28px;
`;
