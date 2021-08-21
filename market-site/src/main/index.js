import './index.css';
import axios from "axios";

function MainPage() {
  //네트워크 통신으로 결과를 받아서 동적으로 정보 제공하기 위해 axios 사용
  //terminal 창에서 npm install axios 설치
  //package.json 에서 axios 확인
  //비동기 처리 함수이기 때문에 then 사용
  axios.get("https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products")
    .then(function(result) {
      console.log(result);
    }).catch(function(error) {
        console.error('에러 발생: ', error);
    });
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
        <div id="product-list"></div>
          <div className="product-card">
            <div>
              <img className="product-img" src="images/products/keyboard1.jpg" alt="product"/>
            </div>
            <div className="product-contents">
              <span className="product-name">
                키보드
              </span>
              <span className="product-price">
                50000원
              </span>
              <div className="product-seller">
                <img className="product-avatar" src="images/icons/avatar.png" alt="avatar"/>
                <span>그랩</span>
              </div>
            </div>
          </div>
    </div>
    <div id="footer"></div>
  </div>
  );
}

export default MainPage;