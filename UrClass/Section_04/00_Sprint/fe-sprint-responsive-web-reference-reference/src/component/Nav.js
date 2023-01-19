import styled from 'styled-components';
import '../App.css';
import Instagram_logo from '../icon/Instagram_logo.png'
import home from '../icon/home.png';
import send from '../icon/send.png';
import post from '../icon/post.png';
import compass from '../icon/compass.png';
import heart from '../icon/heart.png';
import search from '../icon/search.png';
import { ReactComponent as TopIcon } from '../icon/top_icon.svg';

const TopButton = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #bfd780;
  box-shadow: 2px 4px 7px 1px #00000012;
  bottom: 25px;
  right: 16px;
  padding-top: 3px;
  z-index: 10;
  display: block;
  &.hidden{
    display: none;
  }
  svg {
    padding: 12px 18px;
    opacity: 0.9;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 10px;
  margin: auto;
  display: inline-flex;
  justify-content: center;

  .logo-wrapper {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .insta_logo {
      margin-top: 5px;
      height: 30px;
    }
    .logo-input {
      background-color: #f1f1f1;
      height: 35px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding : 5px 5px 5px 5px;

      img { 
        height: 20px;
        filter: opacity(0.4) drop-shadow(0 0 0 white);
      }
      input {
        width : 300px;
        border: none;
        background: transparent;
      }
    }

    .logo-icon-wrapper {
      .logo_icon {
        height: 20px;
        margin-left: 20px;
      }
    }

    @media screen and (max-width: 800px) {
      .logo-input {
        display: none;
      }
    }
  }



  //삼성폰용
  @media only screen and (max-width: 400px) {
    .logo-icon-wrapper {
      display: none;
    }
  }

  //태블릿용
  @media only screen and (max-width: 1200px) {
    .logo {
      padding: 12px 14px 12px 0;
      .logo_icon {
        margin-top: 5px;
        height: 30px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <>
      <TopButton>
        <TopIcon ></TopIcon>
      </TopButton>
      <div className="header">
        <Wrapper>
          <div className='logo-wrapper'>
            <div className="logo">
              <img src={Instagram_logo} className="insta_logo" alt="instagram logo" />
            </div>
            <div className='logo-input'>
              <img src={search} alt="search icon" />
              <input />
            </div>
              <div className='logo-icon-wrapper'>
                <img src={home} className="logo_icon" alt="home icon" />
                <img src={send} className="logo_icon" alt="send icon" />
                <img src={post} className="logo_icon" alt="post icon" />
                <img src={compass} className="logo_icon" alt="compass icon" />
                <img src={heart} className="logo_icon" alt="heart icon" />
              </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;