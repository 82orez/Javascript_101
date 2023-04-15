import styled from "styled-components";
import '../App.css';

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  margin : auto;
  text-align: center;
  bottom: 0;
  color: #868E96;
  .footer_bottom{
    width:100%;
    padding-top: 30px;
    height: 50px;
  }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px){
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px){
  }
`;

const Footer = () => {
  return (
    <div className='footer'>
      <Wrapper>
        <div className='footer_bottom'>
          <span>© Copyright ⓒ 2022 CodeStates</span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;