import styled from "styled-components";
import '../App.css';
import coffee from '../icon/coffee.jpeg';
import grid from '../icon/grid.png';
import bookmark from '../icon/bookmark.png';
import tag from '../icon/tag.png';
import { useState } from "react";
import Grid from "./Grid";
import CSSAnimation from "./CSSAnimation/CSSAnimation";
import ChartContainer from "./Chart/ChartContainer";
import PaintContainer from "./Paint/PaintContainer";


const MainArea = styled.div`
  width: 90%;
  height: 100%;
  padding: 40px 40px 40px 40px;

  div.text{
    width: 1200px;
    margin : 0 auto;
    p{
      position: relative;
      top: 60px;
      width: 100%;
      height:auto;
      color: black;
      font-weight:600;
      font-size: 61px;
      letter-spacing: 6px;
      line-height: 1.4;

      @media only screen and (max-width: 800px) {
        font-size : 50px
      }

      @media only screen and (max-width: 400px) {
        font-size : 20px
      }
    }
  }

  div.main-header {
    display: flex;
    justify-content: center;
    padding: 0px 0px 40px 0px;
    border-bottom: 1px solid #ababab;
    img {
      border-radius: 50%;
      margin-right: 70px;
    }
    .ul-div ul{
      list-style: none;
      display: flex;
      margin-right: 5px;
    }

    .ul-div li{
      list-style: none;
      float: left;
      margin-right: 30px;
    }

    .user-box{
      display: flex;
      align-items: center;
      button {
        margin-left: 30px;
        height: 40px;
        width: 100px;
        border: none;
        border-radius: 10px;
      }
    }
  }

  .user-profile{
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    width: 60%;
    font-weight: bold;

    .user-box {
      font-size: 2rem;
    }
  }

  .main-middle{
    display: flex;
    justify-content: center;
    color: #acacac;
    margin-bottom: 5px;

    ul{
      list-style: none;
      display: flex;
      margin-right: 5px;
    }
    li{
      list-style: none;
      float: left;
      margin-right: 30px;
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        height: 15px;
        margin-right: 5px;
      }
    }

    .submenu {
    width: 100%;
    padding: 15px 10px;  
    }
    .focused {
      border-top: 2px solid #464646;
      color: #464646;
      transition: 0.3s;
    }
  }
`;

const Render = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: '게시물', img: grid },
    { name: '저장됨', img: bookmark },
    { name: '태그됨', img: tag }
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <MainArea>
        <div className="main-header">
          <div className="img-box">
            <img src={coffee} alt="coffee img" />
          </div>
          <div className="user-profile">
            <div className="user-box">
              user id 
              <button>프로필 편집</button>
            </div>
            <div className="ul-div">
              <ul>
                <li>게시물 1</li>
                <li>팔로워 0</li>
                <li>팔로우 0</li>
              </ul>
            </div>
            <div>Nickname</div>
          </div>
        </div>
        <div className='main-middle'>
          <ul>
            {menuArr.map((el, index) => {
              return (
                <li
                  key={index}
                  className={currentTab === index ? 'submenu focused' : 'submenu'}
                  onClick={() => selectMenuHandler(index)}
                >
                  <img src={el.img} alt={el.img} /> {el.name}
                </li>
              )
            })}
          </ul>
        </div>
          {currentTab === 0 ? <Grid /> : 
            (currentTab === 1 ? 
              <>
                <CSSAnimation />
                <PaintContainer />
              </> : 
            <ChartContainer />)
          }
      </MainArea>
    </>
  );
};

export default Render;