import React from 'react';
import logo from './logo.svg';

import './css/reset.css';
import './css/index.css';
import DiscordHelp from './DiscordHelp';

function App() {
  return (
    <div className="App">
       <section id="heading-and-search">
    <h1>고객 지원 센터</h1>
    <div className="input-container">
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12"
          className="search-iconb" aria-hidden="true">
          <circle cx="4.5" cy="4.5" r="4" fill="none" stroke="currentColor"></circle>
          <path stroke="currentColor" stroke-linecap="round" d="M11 11L7.5 7.5"></path>
        </svg>
      </figure>
      <input type="text" id="search-input" placeholder="검색" />
    </div>
  </section>
  <section id="help-category">
    <div className="help-intro">
      <h2>도움이 필요하신가요? 저희가 도와드리겠습니다.</h2>
      <p>
        계정 설정부터 승인까지 Discord와 관련된 모든 것을 문의하세요.
        <br />
        Discord를 시작한 지 얼마 안 되어 팁을 찾고 계신가요? 그렇다면, 저희의
        <a href="#" className="noob-guide-link">초보자를 위한 가이드를 확인해 보세요!</a>
      </p>
    </div>

    <DiscordHelp></DiscordHelp>
    <h2 className="etc-heading">도움을 받을 수 있는 다른 방법</h2>
    {/* 클래스에 etc-help 추가해야함 */}
    <DiscordHelp></DiscordHelp>
  </section>
  <footer>
    <div className="more-place">
      <a href="#" className="more-btn">자세히</a>
    </div>
    <div className="device-apps">
      <img src="img/device-back.png" alt="디바이스 유형" />
      <a href="#" className="device-app-icons web-browser">
        <img src="img/browsers.svg" alt="웹브라우저" />
      </a>
      <a href="#" className="device-app-icons android">
        <img src="img/android.svg" alt="안드로이드" />
      </a>
      <a href="#" className="device-app-icons apple">
        <img src="img/apple.svg" alt="애플" />
      </a>
      <a href="#" className="device-app-icons window">
        <img src="img/window.svg" alt="윈도우" />
      </a>
      <a href="#" className="device-app-icons mac">
        <img src="img/x-icon.svg" alt="맥" />
      </a>
    </div>
    <div className="footer-inner-contents">
      <figure className="footer-logo"></figure>
      <nav className="footer-nav"></nav>
    </div>
  </footer>
  <a href="#" className="help-button">
    <figure>○</figure>
    <p>고객센터</p>
  </a>

  <div className="open-help ">
    <div className="help-header">
      <h2 className="help-heading">고객센터</h2>
      <a href="#">닫</a>
    </div>
    <div className="help-input-container">
      <input type="search" name="" id="" placeholder="어떻게 도와드릴까요?" />
      <figure>돋</figure>
    </div>
    <div className="help-result-container">
      <div className="help-result">

      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
