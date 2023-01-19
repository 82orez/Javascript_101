import styled from "styled-components";
import mediaUpsell from '../icon/mediaUpsell.jpeg';
import appStore from '../icon/appStore.png';
import googleStore from '../icon/googleStore.png';

const GridCSS = styled.div `
    .main-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 40px 20px 20px 20px;

    .main-img {
      width: 40%;
      img {
        width: 90%;
      }
    }
    
    .main-post {
      width: 50%;
      text-align: center;
      padding: 0px 20px 30px 20px;
      p{
        margin-top: 20px;
      }
      .icon-store {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        .app-store {
          width: 150px;
          height: 50px;
        }
        .google-store {
          width: 150px;
          height: 50px;
        }
      }
    }

    @media only screen and (max-width: 800px) {
      display: flex;
      flex-direction: column-reverse;
      .main-img {
      width: 100%;
      img {
        width: 90%;
      }

      .main-post {

      }
    }
    }
  }
`

const Grid = () => {
  return (
    <GridCSS>
        <div className="main-section">
            <div className="main-img">
                <img src={mediaUpsell} alt="media-upsell" />
            </div>
            <div id="sample" className="main-post">
                <h3>소중한 순간을 포착하여 공유해보세요.</h3>
                <p>앱을 다운로드하고 첫 사진이나 동영상을 공유해보세요.</p>
                <div className="icon-store">
                    <img src={appStore} className="app-store" alt="appstore icon" />
                    <img src={googleStore} className="google-store" alt="googlestore icon" />
                </div>
            </div>
        </div>
    </GridCSS>
  );
};

export default Grid;