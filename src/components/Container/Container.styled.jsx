import styled from '@emotion/styled';

const Smartphone = styled.div`
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 760px;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  overflow: hidden;
  padding-bottom: 20px;

  box-shadow: 5px 5px 10px 2px #3d3d3d;

  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
  }

  /* The circle on the bottom of the device */
  &::after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 15px;
  padding-top: 70px;
  width: 100%;
  height: 100%;
  overflow: auto;

  color: #ffffff;
  text-shadow: 1px 1px 2px black;
  background: linear-gradient(
    111.1deg,
    rgb(0, 40, 70) -4.8%,
    rgb(255, 115, 115) 82.7%,
    rgb(255, 175, 123) 97.2%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
`;

export { Smartphone, Content };
