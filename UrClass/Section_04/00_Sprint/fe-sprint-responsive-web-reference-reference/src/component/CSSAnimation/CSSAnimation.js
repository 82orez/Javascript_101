import styled from 'styled-components';
import cat1 from '../../img/cat1.jpeg';
import cat2 from '../../img/cat2.jpeg';
import cat3 from '../../img/cat3.jpeg';
import cat4 from '../../img/cat4.jpeg';
import cat5 from '../../img/cat5.png';
import cat6 from '../../img/cat6.jpeg';
import cat7 from '../../img/cat7.jpeg';
import cat8 from '../../img/cat8.jpeg';


const FigureCSS = styled.div`
    padding: 50px;
    display: grid;
    align-items: center;
    justify-content: center;

    .figure-container {
        width: 685px;
        margin: 20px auto;
        overflow: hidden;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
        border: 7px solid rgba(255,255,255,0.6);
    }

    .figure-container figure {
        position: absolute;
        top: 0;
        left: 50px; /* width of visible piece */
        width: 335px;
        box-shadow: 0 0 0 1px rgba(255,255,255,0.6);
        transition: all 0.3s ease-in-out;
    }

    .figure-container > figure {
        position: relative;
	    left: 0 !important;
    }

    .figure-container img {
        display: block;
        width: 100%;
    }

    .figure-container input {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px; /* just cover visible part */
        height: 100%;
        cursor: pointer;
        border: 0;
        padding: 0;
        opacity: 0;
        z-index: 100;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .figure-container input:checked{
        width: 5px;
        left: auto;
        right: 0px;
    }

    .figure-container input:checked ~ figure {
        left: 335px;
        transition: all 0.7s ease-in-out;
    }

    .figure-container figcaption {
        width: 100%;
        height: 100%;
        background: rgba(87, 73, 81, 0.1);
        position: absolute;
        top: 0px;
        transition: all 0.2s linear;

        span {
            position: absolute;
            top: 40%;
            margin-top: -30px;
            right: 20px;
            left: 20px;
            overflow: hidden;
            text-align: center;
            background: rgba(87, 73, 81, 0.3);
            line-height: 20px;
            font-size: 18px;
            opacity: 0;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-weight: 700;
            padding: 20px;
            color: #fff;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
        } 
    }

    .figure-container input:checked + figcaption, .figure-container input:checked:hover + figcaption{
	    background: rgba(87, 73, 81, 0);
    }

    .figure-container input:checked + figcaption span {
        transition: all 0.4s ease-in-out 0.5s;
        opacity: 1;
        top: 50%;
    }

    .figure-container #selector-last:checked + figcaption span {
        transition-delay: 0.3s;
    }

    .figure-container input:hover + figcaption {
        background: rgba(87, 73, 81, 0.03);
    }

    .figure-container input:checked ~ figure input{
        z-index: 1;
    }

    .p-div {
        background-color: rgba(195, 240, 108, 0.3);
        text-align: center;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-div:hover {
        background-color: rgba(195, 240, 108, 1);
        transition: all 0.4s ease-in-out 0.5s;
    }

    @media screen and (max-width: 720px) {
        .figure-container { 
            width: 540px; 
        }
        
        .figure-container figure { 
            left: 40px; 
            width: 260px; 
        }
        
        .figure-container input { 
            width: 40px; 
        }
        
        .figure-container input:checked ~ figure { 
            left: 260px; 
        }
        
        .figure-container figcaption span { 
            font-size: 16px; 
        }
    }

    @media screen and (max-width: 520px) {
		.figure-container {
            width: 320px;
        }
	
        .figure-container figure { 
            left: 20px; 
            width: 180px; 
        }
        
        .figure-container input { 
            width: 20px; 
        }
        
        .figure-container input:checked ~ figure { 
            left: 180px; 
        }
        
        .figure-container figcaption span { 
            font-size: 12px; 
            letter-spacing: 2px; 
            padding: 10px; 
            margin-top: -20px; 
        } 

    }
`

const CSSAnimation = () => {
       return (
        <>
            <FigureCSS>
                <div className='figure-container'>
                    <figure>
                        <img src={cat1} alt="cat1" />
                        <input type="radio" name="radio-set" defaultChecked />
                        <figcaption><span>lovely</span></figcaption>
                        <figure>
                            <img src={cat2} alt="cat2" />
                            <input type="radio" name="radio-set" />
                            <figcaption><span>awesome</span></figcaption>
                            <figure>
                                <img src={cat3} alt="cat3" />
                                <input type="radio" name="radio-set" />
                                <figcaption><span>brilliant</span></figcaption>
                                <figure>
                                    <img src={cat4} alt="cat4" />
                                    <input type="radio" name="radio-set" />
                                    <figcaption><span>perfect</span></figcaption>
                                    <figure>
                                        <img src={cat5} alt="cat5" />
                                        <input type="radio" name="radio-set" />
                                        <figcaption><span>wonderful</span></figcaption>
                                        <figure>
                                            <img src={cat6} alt="cat6" />
                                            <input type="radio" name="radio-set" />
                                            <figcaption><span>cuty</span></figcaption>
                                            <figure>
                                                <img src={cat7} alt="cat7" height="250px" />
                                                <input type="radio" name="radio-set" />
                                                <figcaption><span>smart</span></figcaption>
                                                <figure>
                                                    <img src={cat8} alt="cat8" height="250px" />
                                                    <input id="selector-last" type="radio" name="radio-set" />
                                                    <figcaption><span>excellent</span></figcaption>
                                                </figure>
                                            </figure>
                                        </figure>
                                    </figure>
                                </figure>
                            </figure>
                        </figure>
                    </figure>
                </div>
                <div className='p-div'>
                    <p>CSS Animation</p>
                </div>
            </FigureCSS>
        </>
    )
}

export default CSSAnimation;

