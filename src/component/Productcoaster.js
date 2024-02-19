import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useParams } from 'react-router-dom';

//import image1 from './gallery/error/error1.png';
// import image2 from './gallery/error/error2.png';
// import image3 from './gallery/error/error3.png';
// import image4 from './gallery/error/error4.png';
//import blank from './gallery/error/error5.png';
import c1 from './gallery/coaster/c1.jpg';
import c2 from './gallery/coaster/c2.jpg';
import c3 from './gallery/coaster/c3.jpg';
import c4 from './gallery/coaster/c4.jpg';
import c5 from './gallery/coaster/c5.jpg';
import c6 from './gallery/coaster/c6.jpg';
import n1 from './gallery/namePlate/n1.jpg';
import l1 from './gallery/lamps/l1.jpg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Productcoaster() {

    let { productcoasterId } = useParams();
    const [currentImage, setCurrentImage] = useState('');
    const [currentHeading, setCurrentHeading] = useState('');
    const [currentCaption, setCurrentCaption] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [currentDeletePrice, setCurrentDeletePrice] = useState('');
    const [currentPriceDiscount, setCurrentPriceDiscount] = useState('');
    const [productSizeS, setProductSizeS] = useState('');
    const [productSizeM, setProductSizeM] = useState('');
    const [productSizeL, setProductSizeL] = useState('');
    const [productSizeXL, setProductSizeXL] = useState('');
    const [PriceS, setPriceS] = useState('');
    const [PriceM, setPriceM] = useState('');
    const [PriceL, setPriceL] = useState('');
    const [PriceXL, setPriceXL] = useState('');
    const [PriceDeleteS, setPriceDeleteS] = useState('');
    const [PriceDeleteM, setPriceDeleteM] = useState('');
    const [PriceDeleteL, setPriceDeleteL] = useState('');
    const [PriceDeleteXL, setPriceDeleteXL] = useState('');

    useEffect(() => {
        document.getElementById('sizeSmall').style.color = 'rgb(255, 64, 0)';

    }, []);

    useEffect(() => {
        let mainImage;
        let heading;
        let caption;
        let price;
        let deletePrice;
        let discount;
        let S;
        let M;
        let L;
        let XL;
        let priceS;
        let priceM;
        let priceL;
        let priceXL;
        let priceDeleteS;
        let priceDeleteM;
        let priceDeleteL;
        let priceDeleteXL;

        switch (productcoasterId) {
            case '1':
                mainImage = c1;
                // image1 = f11;
                // image2 = f12;
                // image3 = blank;
                // image4 = blank;
                heading = 'Name Coaster';
                caption = 'Crafted from durable resin, our Name Coaster adds a personalized touch to your table settings, making every sip a stylish experience.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '899';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1499';
                priceDeleteXL = '1599';
                break;
            case '2':
                mainImage = c2;
                // image1 = f21;
                // image2 = f22;
                // image3 = f23;
                // image4 = f24;
                heading = 'Nail Coaster';
                caption = 'Protect your surfaces with these unique coasters made from durable materials, adding an edgy flair to your decor while keeping your tabletops safe.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '899';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1499';
                priceDeleteXL = '1599';
                break;
            case '3':
                mainImage = c3;
                // image1 = f31;
                // image2 = f32;
                // image3 = blank;
                // image4 = blank;
                heading = 'Pizza Coaster';
                caption = 'Add a slice of fun to your dining experience with these whimsical coasters shaped like everyones favorite cheesy indulgence, perfect for pizza lovers and party hosts alike';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '899';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1499';
                priceDeleteXL = '1599';
                break;
            case '4':
                mainImage = c4;
                // image1 = f41;
                // image2 = f42;
                // image3 = blank;
                // image4 = blank;
                heading = 'Name Coaster [2]';
                caption = 'Crafted from durable resin, our Name Coaster adds a personalized touch to your table settings, making every sip a stylish experience.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '899';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1499';
                priceDeleteXL = '1599';
                break;
            case '5':
                mainImage = c5;
                // image1 = f51;
                // image2 = blank;
                // image3 = blank;
                // image4 = blank;
                heading = 'Dining Coaster';
                caption = 'Elevate your dining table decor with these stylish coasters, designed to protect surfaces while adding a touch of sophistication to your meals and gatherings.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '899';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1499';
                priceDeleteXL = '1599';
                break;
            case '6':
                mainImage = c6;
                // image1 = f61;
                // image2 = f62;
                // image3 = f63;
                // image4 = blank;
                heading = 'Coffee Coaster';
                caption = 'Keep your coffee table spotless in style with these chic coasters, perfect for preventing spills and adding a touch of elegance to your coffee time.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '899';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1499';
                priceDeleteXL = '1599';
                break;
            case '7':
                mainImage = n1;
                // image1 = f61;
                // image2 = f62;
                // image3 = f63;
                // image4 = blank;
                heading = 'Name Plate';
                caption = 'Personalize your space with our elegant name plates, crafted with precision to add a touch of sophistication to your home or office decor.';
                price = '1999';
                deletePrice = '2499';
                discount = '20%';
                S = '9*12';
                priceS = '1999';
                priceDeleteS = '2499';
                M = '12*18';
                priceM = '2799';
                priceDeleteM = '3299';
                L = '18*24';
                priceL = '3199';
                priceDeleteL = '3699';
                XL = '18*32';
                priceXL = '3499';
                priceDeleteXL = '3999';
                break;
            case '8':
                mainImage = l1;
                // image1 = f61;
                // image2 = f62;
                // image3 = f63;
                // image4 = blank;
                heading = 'Ocean Lamp';
                caption = 'Immerse yourself in the tranquil ambiance of the sea with our captivating ocean lamp, designed to bring the soothing serenity of underwater beauty to your living space.';
                price = '3499';
                deletePrice = '4499';
                discount = '22%';
                S = '9*12';
                priceS = '3499';
                priceDeleteS = '4499';
                M = '4*4';
                priceM = '1199';
                priceDeleteM = '2199';
                L = '6*6';
                priceL = '2199';
                priceDeleteL = '3199';
                XL = '8*8';
                priceXL = '3099';
                priceDeleteXL = '4099';
                break;
            default:
                // setCurrentImage(image1);
                setCurrentHeading('Error');
                return;
        }
        setCurrentImage(mainImage);
        setCurrentHeading(heading);
        setCurrentCaption(caption);
        setCurrentPrice(price);
        setCurrentDeletePrice(deletePrice);
        setCurrentPriceDiscount(discount);
        setProductSizeS(S);
        setProductSizeM(M);
        setProductSizeL(L);
        setProductSizeXL(XL);
        setPriceS(priceS);
        setPriceM(priceM);
        setPriceL(priceL);
        setPriceXL(priceXL);
        setPriceDeleteS(priceDeleteS);
        setPriceDeleteM(priceDeleteM);
        setPriceDeleteL(priceDeleteL);
        setPriceDeleteXL(priceDeleteXL);
    }, [productcoasterId]);
    const [dataCart, setDataCart] = useState("");
    const [dataBuy, setDataBuy] = useState("");
    const history = useHistory();

    const sendDataCart = async () => {
        const response = await Axios.post('http://localhost:5001/setDataCart', {
            currentPrice: currentPrice,
            currentHeading: currentHeading
        });
        setDataCart(response.data);
        window.location.reload();
    }
const sendDataBuy = async()=>{

    const response =await Axios.post('http://localhost:5001/setDataBuy', {
        currentPrice: currentPrice,
        currentHeading: currentHeading
    });
    setDataBuy(response.data);
    redirect();

}
const redirect=()=>{
    history.push('/order');
};


    const handleSize = (p, dp) => {
        setCurrentPrice(p);
        setCurrentDeletePrice(dp);
    }
    const colorSmall = () => {
        document.getElementById('sizeSmall').style.color = 'rgb(255, 64, 0)';
        document.getElementById('sizeMedium').style.color = '';
        document.getElementById('sizeLarge').style.color = '';
        document.getElementById('sizeExtraLarge').style.color = '';
    }
    const colorMedium = () => {
        document.getElementById('sizeSmall').style.color = '';
        document.getElementById('sizeMedium').style.color = 'rgb(255, 64, 0)';
        document.getElementById('sizeLarge').style.color = '';
        document.getElementById('sizeExtraLarge').style.color = '';
    }
    const colorLarge = () => {
        document.getElementById('sizeSmall').style.color = '';
        document.getElementById('sizeMedium').style.color = '';
        document.getElementById('sizeLarge').style.color = 'rgb(255, 64, 0)';
        document.getElementById('sizeExtraLarge').style.color = '';
    }
    const colorExtraLarge = () => {
        document.getElementById('sizeSmall').style.color = '';
        document.getElementById('sizeMedium').style.color = '';
        document.getElementById('sizeLarge').style.color = '';
        document.getElementById('sizeExtraLarge').style.color = 'rgb(255, 64, 0)';
    }

    return (
        <div>
            <div className="productParent">
                <div className="productGallery">
                    <div className="productGalleryChild">
                        <div className="productImg">
                            <img src={currentImage} alt="" />
                        </div>
                        {/* <div className="productImgChild">
                            <img src={image1} alt="" onMouseOver={() => imageChange('1')} />
                            <img src={image2} alt="" onMouseOver={() => imageChange('2')} />
                            <img src={image3} alt="" onMouseOver={() => imageChange('3')} />
                            <img src={image4} alt="" onMouseOver={() => imageChange('4')} />
                        </div> */}
                    </div>
                </div>
                <div className="productDetail">
                    <div className="productDetailChild">
                        <h3 className="productHeading">{currentHeading}</h3>
                        <p id="productCaption">{currentCaption}</p>
                        <div className="line"></div>
                        <h4 id="productPrice">Rs.{currentPrice}<span id='productPriceCut'> M.R.P: </span><del>Rs.{currentDeletePrice}</del><span id="discountPercent">({currentPriceDiscount} OFF)</span></h4>
                        <p id="tax">inclusive of all taxes</p>
                        <p id="selectSize">SELECT SIZE</p>
                        <div className="size">
                            <div className="sizeS" id='sizeSmall' onClick={() => { handleSize(PriceS, PriceDeleteS); colorSmall() }}><p id='s'>{productSizeS} inch</p><p className="productPriceInside">Rs.{PriceS}</p></div>
                            <div className="sizeS" id='sizeMedium' onClick={() => { handleSize(PriceM, PriceDeleteM); colorMedium() }}><p id='s'>{productSizeM} inch</p><p className="productPriceInside">Rs.{PriceM}</p></div>
                            <div className="sizeS" id='sizeLarge' onClick={() => { handleSize(PriceL, PriceDeleteL); colorLarge() }}><p id='s'>{productSizeL} inch</p><p className="productPriceInside">Rs.{PriceL}</p></div>
                            <div className="sizeS" id='sizeExtraLarge' onClick={() => { handleSize(PriceXL, PriceDeleteXL); colorExtraLarge() }}><p id='s'>{productSizeXL} inch</p><p className="productPriceInside">Rs.{PriceXL}</p></div>
                        </div>
                        <div className="buyCartbtn">
                        <button id='productCart' onClick={sendDataCart}>Add to Cart</button>
                            <button id='productBuy'onClick={sendDataBuy}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productcoaster;
