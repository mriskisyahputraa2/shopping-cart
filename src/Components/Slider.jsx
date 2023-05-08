import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;

  // ini adalah feature yang di sediakan oleh styled-components
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100&;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;

function Slider() {
  return (
    <>
      <Container>
        <Arrow direction="left">
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Wrapper>
        <Arrow direction="right">
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </>
  );
}

export default Slider;
