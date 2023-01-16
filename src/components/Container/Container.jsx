import { Smartphone, Content } from './Container.styled';

const Container = ({ children }) => {
  return (
    <Smartphone>
      <Content>{children}</Content>
    </Smartphone>
  );
};

export default Container;
