import React, { useContext } from 'react';
import {
  Animator,
  batch,
  Fade,
  Move,
  ScrollContainer,
  ScrollPage,
  // eslint-disable-next-line prettier/prettier
  Sticky
} from 'react-scroll-motion';
import { UserContext } from '../../../provider';
import Header from '../Header';
import ImageContainer from '../ImageContainer';
import Section from '../Section';
import { Container } from './styles';

function ProfileContainer() {
  const { state } = useContext(UserContext);
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <Container editMode={state.editMode}>
      <ScrollContainer>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <Header />
          </Animator>
        </ScrollPage>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <div />
          </Animator>
        </ScrollPage>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <Section
              text={[
                `I have more than three years' experience in software development.`,
                'Experienced Full Stack Engineer (Frontend focused) trained in React, Next, Node, HTML, CSS, SCSS, StyledComponents, Javascript, Typescript, Redux, MobX, React Native, Expo, Nest, Cypress, Jest, react-testing-library',
              ]}
              images={<ImageContainer />}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <div />
          </Animator>
        </ScrollPage>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <Section
              text={[
                'I built an application that is running worldwide and managing different features for several countries operating in a multi-language environment.',
                'I led a Tech Team building a Mobile App from zero to Beta Testing stage.',
              ]}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <div />
          </Animator>
        </ScrollPage>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <Section
              text={[
                'My strongest skills are create micro-interactions, animations and functional interfaces as well as performance improvements.',
                'I like to exchange knowledge with my co-workers to reach new heights in research and development. ',
              ]}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <div />
          </Animator>
        </ScrollPage>
        <ScrollPage key={Math.random()}>
          <Animator animation={FadeUp}>
            <Section text={['UX/UI enthusiast', 'Not a good drawer.']} />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Container>
  );
}

export default ProfileContainer;
