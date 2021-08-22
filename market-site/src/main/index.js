import React from 'react';
import './index.css';
import axios from "axios";

function MainPage() {
  //네트워크 통신으로 결과를 받아서 동적으로 정보 제공하기 위해 axios 사용
  //terminal 창에서 npm install axios 설치
  //package.json 에서 axios 확인
  //비동기 처리 함수이기 때문에 then 사용
  const [products, setProducts] = React.useState([]);
  React.useEffect(
    function(){
      axios.get("https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products")
      .then(function(result) {
        const products = result.data.products;
        setProducts(products); //네트워크 통신(axios 부분)이 다시 발생한다. => React.useEffect를 사용해서 네트워크 통신 한번만 발생하게 한다. 
      }).catch(function(error) {
          console.error('에러 발생: ', error);
      });
    },[]);
  return (
  <div>
    <div id="header">
        <div id="header-area">
            <img src="images/icons/logo.png" alt="logo" />
        </div>
    </div>
    <div id="body">
        <div id="banner">
            <img src="images/banners/banner1.png" alt="banner"/>
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {
            products.map(function(product, index) {
              console.log(product);
              return (
                <div className="product-card" key={index}>
                  <div>
                    <img className="product-img" src={product.imageUrl} alt="product"/>
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-seller">
                      <img className="product-avatar" src="images/icons/avatar.png" alt="avatar"/>
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </div>
              );
            })
          }
          </div>
    </div>
    <div id="footer"></div>
  </div>
  );
}

export default MainPage;