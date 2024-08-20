(function() {
  if (getCookie("interface") === "ni") {
    $(`<style>
  @import url('https://fonts.cdnfonts.com/css/ausyeik-trial');
  @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Macondo&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  
      *{
        cursor: url(https://i.imgur.com/G8xMVbd.png) 4 0,url(https://i.imgur.com/G8xMVbd.png) 4 0,auto !important;
      }
  .game-window-positioner .character_wrapper .stats-wrapper .stats-list li .value{font-size:10px !important;}
  
  
  /*ZESTAWY*/
                    .window-wood-background{border: none;}
  .one-build.active {border: 1px solid #594169;}
  .one-build, .one-build-to-buy{border: 1px solid #2b1c33;}
  .one-build.active:hover {border: 1px solid #72498d;}
  .one-build:hover {border: 1px solid #3f3148; transition: .3s;}
  .one-build .build-items-wrapper, .one-build-to-buy .build-items-wrapper{background: url(https://i.imgur.com/OOfV26D.png) 0 0;}
  .one-build .build-name-wrapper>.build-name, .one-build .build-name-wrapper>.build-number, .one-build .build-skills-left-wrapper>.build-skills-left, .one-build-to-buy .build-name-wrapper>.build-name, .one-build-to-buy .build-name-wrapper>.build-number, .one-build-to-buy .build-skills-left-wrapper>.build-skills-left
  {color: #986fa9; font-family: 'Macondo'; font-size: 15px; font-weight: bold;}
  .build-index{color: #986fa9; font-family: 'Macondo';}
  
  
  
  .gora {background: url(https://i.imgur.com/k0TYbKD.gif) 0px -61px repeat !important;}
  .dol {background: url(https://i.imgur.com/rpAVRm1.gif) 0px 0px repeat !important;}
  .prawo {background: url(https://i.imgur.com/8pm5NrP.gif) 0px 0px repeat !important;}
  
    .item:hover {background: url(https://i.imgur.com/497SeOZ.png) no-repeat -832px -390px;}
  
    .control-wrapper {
        border-left: 1px solid #503b59 !important;
        border-right: 1px solid #503b59 !important;
    }
                                 .es-going-icon{border:1px solid #503b59 !important;}
  .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper {
    position: relative;
    border-image: url(https://i.imgur.com/crjWNdp.png);
    border-width: 0px;
    border-style: solid;
    padding: 0px 22px;
    background: url(https://i.imgur.com/PG6X1bU.png);
    background-clip: padding-box;
    margin-top: 2px;
    border: 1px solid #230043;
  }
  .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .one-mail-head .from b {
    font-size: 1.3em;
    color: #986fa9;
    font-family: 'Macondo';
  }
  .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .msg-content {
    color: #986fa9;
    border-top: 2px solid #4f3a58;
    border-bottom: 2px solid #4f3a58;
    padding-top: 10px;
    padding-bottom: 8px;
    min-height: 25px;
    word-wrap: break-word;
  }
  .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .mail-footer {
    color: #986fa9;
    min-height: 37px;
    padding-top: 5px;
  }
                                 
                                 .matchmaking-summary .middle-graphics{background:none;}
  .matchmaking-summary .summary-content .wood-bar{border-image: url(https://i.imgur.com/CMWSffi.png) 3 3 fill stretch; width: 104.5%; left: -7px;}
  .matchmaking-summary .bottom-panel-graphics{background: url(https://i.imgur.com/CMWSffi.png);background-size: 100% 100%;}
                                 .matchmaking-timer{z-index:1000;}
  
  
  /*WIADOMOSC*/
  .alerts-layer .big-messages .message, .console-layer .big-messages .message, .mAlert-layer .big-messages .message, .mAlert-mobile-layer .big-messages .message{color: #6b5076; font-family: macondo; font-size: 20px;}
  .alerts-layer .big-messages .message.active .inner, .console-layer .big-messages .message.active .inner, .mAlert-layer .big-messages .message.active .inner, .mAlert-mobile-layer .big-messages .message.active .inner
  {font-family:macondo;}
  
  .message.active>.inner>span[style="color: #ff8400"] {color: #ab00ff !important; font-family: 'Macondo' !important;}
  .message.active>.inner>span[style="color: #38b8eb"] {color: #006993 !important; font-family: 'Macondo' !important;}
  .message.active>.inner>span[style="color: #fffb00"] {color: #8b8424 !important; font-family: 'Macondo' !important;}
  
  
  
  .item-tip-section.s-4>.inner>span[style="color: #ff8400"] {color: #ab00ff !important; font-family: 'Macondo' !important;}
  
  
  
  @keyframes skaluj {
    0%   {scale: 100%;}
    50%  {scale: 105%;}
    100% {scale: 100%;}
  }
  
  @keyframes pulse {
    0%, 100% {
        background-color: #3b1785;
    }
    50% {
        background-color: #761fda;
    }
  }
  /*walkaa*/
  .bottom-panel .battle-bars-wrapper .battle-bar .overlay {
    position: absolute;
    top: 8px;
    left: 6px;
    background: none;
    width: 166px;
    height: 11px;
  }
  .bottom-panel .battle-bars-wrapper .battle-bar .background {
    width: 249px;
    height: 24px;
    background: url(https://i.imgur.com/pA0XosW.png) -404px -199px;
  }
  .bottom-panel .battle-bars-wrapper .battle-bar.energy .bar-overflow .inner {
    float: right;
    background: #9795009e;
    width: 100%;
    left: 8px;
    position: relative;
    backdrop-filter: blur(1px);
    scale: 0.9;
    border-radius: 7%;
  }
  .bottom-panel .battle-bars-wrapper .battle-bar .values {
    font-size: 9px;
    position: absolute;
    right: 40px;
    width: 43px;
    line-height: 15px;
    top: 6px;
    text-align: center;
    background: #00000063;
    border: 1px solid #4f3a58;
  }
  .bottom-panel .battle-bars-wrapper .battle-bar.mana .bar-overflow .inner {
    background: #1d6bbd99;
    width: 100%;
    left: -8px;
    position: relative;
    backdrop-filter: blur(1px);
    scale: 0.9;
    border-radius: 7%;
    top: 1px;
  }
  .bottom-panel .battle-bars-wrapper .battle-bar.mana .values {
    right: auto;
    left: 41px;
  }
  /*Trade*/
  .trade-window .window-background {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(https://i.imgur.com/RooDCyV.png);
  }
  .trade-window .content .decision .dec-item {
    position: absolute;
    font-weight: 700;
    font-size: 65%;
    color: #4f3a58;
    font-family: 'Spectral';
    left: 17px;
  }
  .trade-window .content .decision .other_decision {
    top: 8px;
  }
  .trade-window .content .prize .other-prize {
    width: 114px;
    left: 28px;
  }
  .trade-window .content .other-credits {
    left: 67px;
  }
  .trade-window header .h_background .left {
    background: url(https://i.imgur.com/eLKaOog.png) -8px -2px;
    width: 62px;
    height: 28px;
    left: -46px;
  }
  .trade-window header .h_background .right {
    background: url(https://i.imgur.com/eLKaOog.png) -91px -2px;
    width: 52px;
    height: 28px;
    right: -35px;
  }
  .trade-window header .h_background .middle {
    background: url(https://i.imgur.com/Z1ZsK1H.png);
    height: 28px;
    left: 0;
    right: 0;
  }
  .trade-window header .h_content {
    position: absolute;
    left: -22px;
    right: -22px;
    line-height: 28px;
    font-size: 12px;
    color: beige;
    background: 0 0;
    text-align: center;
    font-family: 'Macondo';
  }
  /*poczta*/
  #mailnotifier {
    background: url(https://i.imgur.com/Ma7gPDe.png) no-repeat -762px -410px;
    top: -29px;
    scale: 1.01;
    filter: drop-shadow(0px 0px 3px purple);
  }
  .c-amount {
    display: block;
    pointer-events: none;
    position: absolute;
    background: transparent;
    font-size: 10px;
    font-family: verdana;
    line-height: 12px;
    padding: 0 2px;
    bottom: 0;
    right: 0;
    border-radius: 3px;
    border: none;
    color: white;
    top: -1px;
    right: 28px !important;
    font-family: 'Spectral';
  }
  /*sklepspec*/
  .shop-wrapper .shop-content .for-you-plug {background: url(https://i.imgur.com/a6qY23B.png) 1px -709px;}
  .shop-wrapper .shop-content .for-you-txt {
    display: none;
    position: absolute;
    top: 113px;
    left: 293px;
    width: 210px;
    height: 17px;
    text-align: center;
    color: beige;
    font-family: 'Spectral';
    font-size: 11px;
    }
  
  /*OKIENKOWY*/
  .interface-layer {border-image: url(https://i.imgur.com/ZgLZTRQ.png) 7 repeat !important;}
                                                        
  /*Scroll*/
  .new-chat-window .chat-message-wrapper .scrollbar-wrapper {
    top: 2px;
    bottom: 1px;
    right: 1px;
    background: #4f3a5803;
    border: 1px solid #4f3a58;
    border-top: none;
    border-bottom: none;
  }
  .scroll-wrapper .scrollbar-wrapper .arrow-up, .scroll-wrapper.classic-bar .scrollbar-wrapper .arrow-up {
    background-image: url(https://i.imgur.com/jrTOGcH.png);
    width: 13px;
    height: 17px;
    background-position: -122px -167px;
    position: absolute;
    top: -1px;
    left: 1px;
  }
  .scroll-wrapper .scrollbar-wrapper .track .handle, .scroll-wrapper.classic-bar .scrollbar-wrapper .track .handle {
    background-image: url(https://i.imgur.com/jrTOGcH.png);
    width: 13px;
    height: 44px;
    background-position: -122px -185px;
    position: absolute;
    filter: brightness(0.5);
  }
  .scroll-wrapper .scrollbar-wrapper .arrow-down, .scroll-wrapper.classic-bar .scrollbar-wrapper .arrow-down {
    background-image: url(https://i.imgur.com/jrTOGcH.png);
    width: 13px;
    height: 17px;
    background-position: -122px -230px;
    position: absolute;
    bottom: -1px;
    left: 1px;
  }
  
  /*PVPMODE*/
  .game-window-positioner .character_wrapper .pvp-btn {width: 26px;height: 28px;position: absolute;background: url(https://i.imgur.com/VbbHO5N.png) no-repeat -430px -369px;top: 123px;left: 90px;}
  /*SKILLSwitch*/
  .game-window-positioner .character_wrapper .equipment-wrapper .skill-switch {background: url(https://i.imgur.com/S9cOkCL.png);}
  .right-column .inner-wrapper .battle-set-wrapper {background: url(https://i.imgur.com/eEpC71H.png) no-repeat -517px -709px; filter:brightness(1.5);}
  .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-0.active {background: url(https://i.imgur.com/eEpC71H.png) no-repeat -390px -709px;}
  .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-1.active {background: url(https://i.imgur.com/eEpC71H.png) no-repeat -409px -709px;}
  .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-2.active {background: url(https://i.imgur.com/eEpC71H.png) no-repeat -428px -709px;}
  .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-1:hover {background: url(https://i.imgur.com/eEpC71H.png) no-repeat -409px -709px;}
  .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-2:hover {background: url(https://i.imgur.com/eEpC71H.png) no-repeat -428px -709px;}
  .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-0:hover {background: url(https://i.imgur.com/eEpC71H.png) no-repeat -390px -709px;}
  /*SKLEPY*/
  .shop-wrapper .shop-content.normal-shop-zl {
    background: url(https://i.imgur.com/89JMJYX.png) 0px -34px !important;
  }
  .shop-wrapper .shop-content.normal-shop-sl {
    background: url(https://i.imgur.com/89JMJYX.png) 0 -34px !important;
  }
  .shop-wrapper .shop-content.pet-shop-sl{background: url(https://i.imgur.com/NvdjSlC.png) 0 -34px !important;}
  
  .skill.chosen {
    width: 56px;
    height: 74px;
    position: relative;
    background: url(https://i.imgur.com/OH9jBET.png);
  }
  /*TIPY*/
  .tip-wrapper{box-shadow: 0 0 0 0 #000000, 0 0 0 1px #00000000, 0 0 0 2px #0e0021, 0 0 0 3px #000000, 0 0 0 4px #160121, 0 0 0 5px #790059, 0 0 0 6px #000000, 0 0 0 7px #121211, 0 0 7px 7px #8100ab !important;}
  .tip-wrapper.normal-tip{box-shadow: 0 0 0 0 #000000, 0 0 0 1px #00000000, 0 0 0 2px #0e0021, 0 0 0 3px #000000, 0 0 0 4px #160121, 0 0 0 5px #790059, 0 0 0 6px #000000, 0 0 0 7px #121211, 0 0 7px 7px #a800ab !important;}
  .tip-wrapper .content {background: url(https://i.imgur.com/WUNvUMb.png);background-size: 100% 100%;}
  .tip-wrapper[data-type=t_item] .item-head .legendary, .tip-wrapper[data-type=t_item] .item-tip-section .legendary {color: #c200ff; font-weight: bold; font-family: 'Macondo';}
  .tip-wrapper.normal-tip .damage, .tip-wrapper.sticky-tip .damage {color: #a561c1; font-family: 'Macondo'; font-weight: bold; font-size: 12px;}
  .tip-wrapper[data-item-type=legendary], .tip-wrapper[data-item-type=t-leg] {box-shadow: 0 0 0 0 #000000, 0 0 0 1px #00000000, 0 0 0 2px #0e0021, 0 0 0 3px #000000, 0 0 0 4px #160121, 0 0 0 5px #330053, 0 0 0 6px #000000, 0 0 0 7px #121211, 0 0 10px 10px #470087 !important;}
  .tip-wrapper[data-type=t_item] .item-head {border: 1px ridge hsl(285.75deg 100% 12.6% / 48%); background: #0900167a;}
  .item-tip-section.s-1.no-border>span {font-family: 'Macondo';}
  .item-tip-section.s-3>span {font-family: 'Macondo';}
  .item-tip-section.s-4>span {font-family: 'Macondo'; color: #e600ff !important; font-size: 13px;}
  .item-tip-section.s-5>div>span {font-family: macondo !important; color: #986fa9;}
  .tip-wrapper[data-type=t_item] .item-tip-section.s-7{color: beige; font-family: 'Macondo';}
  .item-tip-section.s-7>em {font-family: 'Macondo'; color: beige;}
  .tip-wrapper[data-type=t_item] i.looter {color: #f385ff; margin: 3px 0; text-align: center; font-family: 'Macondo';}
  .level-required>span {font-family: 'Macondo';color: beige;}
  .prof-icons-holder>span {font-family: 'Macondo'; color: beige;}
  .tip-wrapper[data-type=t_item] .item-tip-section{font-family: 'Macondo'; color: beige;}
  .tip-wrapper[data-type=t_item] .item-tip-section.s-9 .level-required+.value-item {margin-top: 0; position: absolute; bottom: 7px; right: 5px; font-size: 10px; font-family: 'Macondo'; color: beige;}
  .tip-wrapper .content .info-wrapper .nick {border: 1px solid hsl(269.13deg 72.37% 31.15% / 43%); background: hsl(274.15deg 100% 7.55% / 43%);}
  .tip-wrapper[data-type=t_item] .item-tip-section .green{font-family:macondo;}
  
  
  /*TIP HERO*/
  .tip-wrapper[data-item-type=heroic], .tip-wrapper[data-item-type=t-her] {box-shadow: 0 0 0 0 #000000, 0 0 0 1px #00000000, 0 0 0 2px #0e0021, 0 0 0 3px #000000, 0 0 0 4px #010c21, 0 0 0 5px #00389f, 0 0 0 6px #000000, 0 0 0 7px #121211, 0 0 7px 8px #2f2fb3 !important;}
  .tip-wrapper[data-type=t_item] .item-head .heroic, .tip-wrapper[data-type=t_item] .item-tip-section .heroic {color: #6088ff; font-family: macondo;}
  
  /*TIP UNI*/
  .tip-wrapper[data-type=t_item] .item-head .unique, .tip-wrapper[data-type=t_item] .item-tip-section .unique {color: #fffea0; font-family: macondo;}
  .tip-wrapper[data-item-type=elite], .tip-wrapper[data-item-type=t-elite], .tip-wrapper[data-item-type=t-uniupg], .tip-wrapper[data-item-type=unique] {box-shadow: 0 0 0 0 #000000, 0 0 0 1px #00000000, 0 0 0 2px #0e0021, 0 0 0 3px #000000, 0 0 0 4px #010c21, 0 0 0 5px #565700, 0 0 0 6px #000000, 0 0 0 7px #121211, 0 0 7px 6px #cbbe23 !important;}
  
  /*TIP ULEPSZONY*/
  .tip-wrapper[data-item-type=t-upgraded], .tip-wrapper[data-item-type=upgraded] { box-shadow: 0 0 0 0 #000000, 0 0 0 1px #00000000, 0 0 0 2px #0e0021, 0 0 0 3px #000000, 0 0 0 4px #160121, 0 0 0 5px #790059, 0 0 0 6px #000000, 0 0 0 7px #121211, 0 0 7px 7px #a800ab !important;}
  .tip-wrapper[data-type=t_item] .item-head .upgraded, .tip-wrapper[data-type=t_item] .item-tip-section .upgraded {color: #ff59af; font-family: macondo;}
  
  /*TIP ZWYKLY*/
  .tip-wrapper[data-item-type=normal], .tip-wrapper[data-item-type=t-norm] {box-shadow: 0 0 0 0 #000000, 0 0 0 1px #00000000, 0 0 0 2px #0e0021, 0 0 0 3px #000000, 0 0 0 4px #010c21, 0 0 0 5px #4f4f4f, 0 0 0 6px #000000, 0 0 0 7px #121211, 0 0 7px 6px #7e7e7e !important;}
  .tip-wrapper[data-type=t_item] .item-head .common, .tip-wrapper[data-type=t_item] .item-tip-section .common {color: #9da1a7; font-family: macondo;}
  
  .popup-menu {
    max-width: 140px;
    box-shadow: 0 0 0 1px #0b0b0b inset, 0 0 0 1px #4f3a5800, 0 0 0 1px #17003b;
    padding: 2px;
    border-radius: 0px;
    transform: scale(0);
    z-index: 1;
    background-color: #0c011c00;
    background-clip: padding-box;
    pointer-events: auto;
    position: absolute;
    font-family: 'Macondo';
    backdrop-filter: blur(5px);
  }
  .popup-menu .menu-item:hover:not(.label):not(.disabled):not(.cooldown-disabled):not(.one-step-skill-menu) {
    border: 1px solid #38005594;
    background-color: #6400d14f;
    backdrop-filter: blur(5px);
  }
  .popup-menu .menu-item {
    min-width: 90px;
    padding: 3px 5px;
    display: block;
    margin-bottom: 1px;
    font-size: 11px;
    text-align: center;
    background-color: #0c011cbf;
    color: #fff;
    border: 1px solid #17003b;
    backdrop-filter: blur(5px);
  }
  .popup-menu .menu-item.menu-item--red {
    background: #4a0e0e59;
    border-color: #831f1f12;
    backdrop-filter: blur(5px);
  }
  .menu-item{font-family:macondo;}
  .border-window .content {
    padding: 10px 0;
    background: #000000;
    max-height: 84vh;
    overflow: hidden;
    color: white;
  }
  /*WALKA*/
  .battle-window .battle-background {
    pointer-events: none;
    position: absolute;
    width: 1416px;
    height: 844px;
    margin-left: 256px;
    margin-top: 256px;
    filter: brightness(0.45);
  }
  .battle-controller .graphics .middle-graphic {
    background: url(https://i.imgur.com/aNMjTLh.png) repeat;
    position: absolute;
    bottom: 48px;
    top: 35px;
    left: 5px;
    right: 0;
    width: 518px;
  }
  .battle-controller .graphics .bottom-graphic {
    background: url(https://i.imgur.com/27W7awF.png) 0 -35px;
    height: 48px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .battle-controller .graphics .header-graphic {
    background: url(https://i.imgur.com/DiywbR5.png);
    height: 35px;
    width: 518px;
    left: 5px;
    position: absolute;
  }
  .battle-controller .battle-content .time-wrapper .time-progress-bar::after {
    content: '';
    position: absolute;
    border: 1px solid #4f3a58;
    left: -3px;
    right: -3px;
    bottom: -3px;
    top: -3px;
    border-radius: 5px;
    background: #17003b;
    box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, .9);
  }
  .battle-controller .battle-content .time-wrapper .time-progress-bar .time-inner {
    background-color: #986fa9;
    border-radius: 3px;
    position: relative;
    z-index: 1;
  }
  .battle-controller .battle-watch {
    position: absolute;
    top: 16px;
    color: #d3cca2;
    font-size: 11px;
    font-family: math;
  }
  .battle-controller .attach-battle-log-help-window {
    width: 20px;
    height: 16px;
    position: absolute;
    top: 17px;
    right: 62px;
    background: url(../img/gui/buttony.png?v=1714462183767) no-repeat -516px -398px;
    filter: brightness(0.5);
  }
  .battle-controller .attach-battle-prediction-help-window {
    width: 20px;
    height: 16px;
    position: absolute;
    top: 17px;
    right: 37px;
    background: url(../img/gui/buttony.png?v=1714462183767) no-repeat -516px -398px;
    filter: brightness(0.5);
  }
  .battle-controller .toggle-battle {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 12px;
    left: 492px;
    background: url(../img/gui/buttony.png?v=1714462183767) no-repeat -845px -101px;
    filter: brightness(0.5);
  }
  .battle-controller .skill-hider {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 48px;
    background: url(https://i.imgur.com/CMWSffi.png);
    display: block;
  }
  .battle-msg.attack2 {
    background: linear-gradient(90deg, #4f0003 1%, #3b0506 49%, #1e0100 100%);
  }
  .battle-msg.attack {
    background: linear-gradient(90deg, #3b005f 1%, #1c022d 49%, #0e001c 100%);
  }
  .battle-msg.txt {
    background-color: rgb(24 0 35 / 70%);
  }
  .battle-msg.neu {
    background: linear-gradient(90deg, #634400 1%, #2f1903 49%, #1e0d00 100%);
  }
  .battle-controller .battle-content .right-column .battle-end-layer{font-family:macondo; color:beige;}
  .turn-prediction__name--green {color: #00ff22; font-family: macondo;}
  .turn-prediction__name--red {
    color: #ff3232;
    font-family: macondo;
    font-size: 11px;
  }
  .turn-prediction__content{margin-left:5px;}
  .turn-prediction__name--blue {
    color: #79a9bd;
    font-family: 'Macondo';
  }
  
  
  /*EQ*/
  
  .game-window-positioner .inventory_wrapper .inventory-grid-bg {
    width: 238px;
    height: 205px;
    background: url(https://i.imgur.com/tWLRbCu.png) no-repeat -175px 0;
    position: absolute;
    right: 1px;
  }
  .game-window-positioner .inventory_wrapper .bags-navigation {
    position: absolute;
    right: 1px;
    top: -40px;
    width: 144px;
    height: 40px;
    background: url(https://i.imgur.com/tWLRbCu.png) no-repeat 0 -140px;
  }
  .game-window-positioner .character_wrapper .equipment-wrapper {
    position: absolute;
    top: 16px;
    left: 15px;
    background: url(https://i.imgur.com/tWLRbCu.png) 0 -229px;
    width: 106px;
    height: 139px;
  }
  .game-window-positioner .inventory_wrapper .bags-navigation .item {
    width: 35px;
    height: 35px;
    display: block;
    margin-top: -2px;
    margin-left: -2px;
    background: url(https://i.imgur.com/tWLRbCu.png) no-repeat -35px -181px;
  }
  /*Panel prawy itd.*/
  .layer.interface-layer .positioner.bottom .bg-additional-widget-left {
    left: 0;
    position: absolute;
    bottom: 1px;
    background: url(https://i.imgur.com/g7DEN9M.png) no-repeat -177px -597px;
    width: 437px;
    height: 109px;
    transform: scaleX(-1);
    pointer-events: none;
  }
  .layer.interface-layer .positioner.bottom .bg-additional-widget-right {
    position: absolute;
    right: 0;
    bottom: 1px;
    background: url(https://i.imgur.com/g7DEN9M.png) no-repeat -177px -597px;
    width: 437px;
    height: 109px;
    pointer-events: none;
  }
    .layer.interface-layer .positioner.bottom .bg {
    background: url(https://i.imgur.com/PW9iopS.png) 0px 0px repeat;
    bottom: 0px;
  }
  .layer.interface-layer .positioner.top .bg {
    background: url(https://i.imgur.com/PW9iopS.png) 0px -61px repeat;
  }
  .layer.interface-layer .main-column.right-column {
    background: url(https://i.imgur.com/imFuhub.png) -251px 0px;
  }
  .layer.interface-layer .main-column.right-column .border {
    background: none;
    left: 0px;
    border-left: 2px solid #503b59;
  }
  
  .new-chat-window {
    position: absolute;
    left: 2px;
    top: 0px;
    bottom: 0px;
    z-index: 100;
    background: url(https://i.imgur.com/imFuhub.png);
    display: flex;
    flex-direction: column;
  }
  .magic-input-placeholder {font-family: 'Macondo';}
  .new-chat-message.expired-message{opacity:1;}
  .new-chat-message:nth-of-type(2n+2) {background: rgb(104 10 255 / 10%);}
  .chat-input-wrapper .control-wrapper{background: url(https://i.imgur.com/imFuhub.png) -251px 0px;}
  .chat-input-wrapper .magic-input-wrapper {border: 1px solid #503b59;}
  .card-name{font-family:macondo;}
  span.ts-section {font-family: spectral;}
  span.channel-section {font-family: spectral;}
  span.mark-text-span {font-family: spectral;}
  span.mark-message-span.click-able.cll-processed {font-family: 'Spectral';}
  span.author-section {font-family: spectral;}
  span.message-section {font-family: spectral;}
  span.mark-message-span.click-able{font-family:spectral;}
  span.receiver-section {font-family: spectral;}
  
  
  .chat-channel-card-wrapper {
    height: 32px;
    border: 1px solid #4e3a57;
    box-shadow: inset 0px 0px 3px 3px black;
    padding-left: 1px;
    filter: brightness(0.65);
  }
  .chat-input-wrapper .control-wrapper .menu-card {
    display: inline-block !important;
    padding: 4px !important;
    border: 1px solid #4e3a57 !important;
    border-bottom: none !important;
    box-shadow: inset 0px 0px 3px 3px black !important;
    background: black !important;
  }
  .chat-input-wrapper .control-wrapper .menu-card .card-list {
    display: none;
    position: absolute;
    top: -133px;
    left: 0px;
    border: 1px solid #4e3a57;
    background: #202020;
    box-shadow: inset 0px 0px 3px 3px black;
  }
  .chat-input-wrapper .control-wrapper .chat-config-wrapper {
    position: absolute;
    right: 0px;
    top: 1px;
    width: 24px;
    height: 23px;
    border: 1px solid #4e3a57;
    box-shadow: inset 0px 0px 3px 3px black;
    background: black;
  }
  .chat-input-wrapper {
    width: 252px;
    z-index: 100;
    background: url(https://i.imgur.com/imFuhub.png);
  }
  .new-chat-window .chat-message-wrapper {
    border: 1px solid #4e3a57;
    box-shadow: inset 0px 0px 3px 3px black;
    flex-grow: 1;
    min-height: 20px;
  }
  /*GORA*/
  .layer.interface-layer .positioner.top .hud-container {
    width: 342px;
    height: 65px;
    font-family: Arimo;
    color: #e6d6bf;
    position: absolute;
    background: url(https://i.imgur.com/yAdn7IT.png) -38px 0;
    left: 50%;
    top: 0;
    margin-left: -171px;
  }
  .layer.interface-layer .positioner.top .hud-container .map_ball {
    position: absolute;
    top: 1px;
    left: 38px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 2px ridge gray;
    scale: 0.8;
    filter: opacity(0.95);
  }
  .layer.interface-layer .positioner.top .hud-container .map_ball.red {
    background-position: -14px -38px;
    background: crimson;
    box-shadow: inset 0 0 7px 1px black;
  }
  .layer.interface-layer .positioner.top .hud-container .map_ball.orange {
    background-position: -14px -38px;
    background: orange;
    box-shadow: inset 0 0 7px 1px black;
  }
  .layer.interface-layer .positioner.top .hud-container .map_ball.green {
    background-position: -14px -38px;
    background: green;
    box-shadow: inset 0 0 7px 1px black;
  }
  .layer.interface-layer .positioner.top .hud-container .map_ball.yellow {
    background-position: -14px -38px;
    background: yellow;
    box-shadow: inset 0 0 7px 1px black;
  }
  .layer.interface-layer .positioner.top .hud-container .map-data {
    margin-top: 25px;
    text-align: center;
    line-height: 14px;
    font-size: 11px;
    position: relative;
    color: gray;
    font-family: 'Macondo';
  }
  .layer.interface-layer .positioner.top .hud-container .world-name {
    position: absolute;
    top: 23px;
    left: 249px;
    width: 52px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 11px;
    text-transform: capitalize;
    color: gray;
    font-family: 'Macondo';
  }
  .layer.interface-layer .positioner.top .hud-container .hero-data .heroname {
    position: absolute;
    top: 3px;
    left: 39px;
    color: #bfbfbf;
    width: 262px;
    height: 18px;
    padding: 0 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Macondo';
    font-size: 14px;
    text-shadow: 0px 0px 7px #494949;
  }
  .layer.interface-layer .positioner.top .hud-container .herocredits.herogold, .layer.interface-layer .positioner.top .hud-container .herogold.herogold {
    position: absolute;
    top: 42px;
    left: 93px;
    font-size: 11px;
    font-family: 'Macondo';
  }
  .layer.interface-layer .positioner.top .hud-container .herocredits.herocredits, .layer.interface-layer .positioner.top .hud-container .herogold.herocredits {
    position: absolute;
    top: 42px;
    left: 214px;
    font-size: 11px;
    font-family: 'Macondo';
  }
  .layer.interface-layer .positioner.top .hud-container .btn-min.credits-btn {
    position: absolute;
    top: 39px;
    left: 192px;
    display: none;
  }
  .layer.interface-layer .positioner.top .hud-container .btn-min.gold-btn {
    position: absolute;
    top: 39px;
    left: 71px;
    display: none;
  }
  .ni-essentials-button {
    text-align: center;
    background-image: url("https://i.imgur.com/XmZgYmV.png");
    width: 20px;
    height: 20px;
    position: absolute;
    right: -19px !important;
    bottom: 43px !important;
    border-radius: 50%;
  
  }
  
  /*OKNA I LOOT*/
  .border-window .close-button-corner-decor {
    pointer-events: none;
    background: none;
    position: absolute;
    width: 51px;
    height: 52px;
    top: -35px;
    right: -20px;
  }
  .border-window .close-button-corner-decor .close-button {
    pointer-events: auto;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 3px;
    right: 3px;
    background: url(https://i.imgur.com/YyUjyNz.png) -263px -79px;
    border: none;
  }
  .border-window .header-label-positioner .header-label .left-decor{
    background: url(https://i.imgur.com/tkYWGJC.png) -7px -2px;
  }
  .border-window .header-label-positioner .header-label .right-decor {
    background: url(https://i.imgur.com/tkYWGJC.png) -95px -2px;
  }
  
  .border-window .header-label-positioner .header-label {
    display: inline-block;
    position: relative;
    margin: 0 auto;
    height: 28px;
    background: url(https://i.imgur.com/JsbrGW9.png);
  }
  .border-window .header-label-positioner .header-label .text {
    color: beige;
    line-height: 28px;
    text-align: center;
    font-family: Macondo;
  }
  .quest-log .scroll-wrapper .scroll-pane .middle-graphics{background:none !important;}
  .world-window__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-image: url(https://i.imgur.com/VFuwblk.png) 0 19 fill repeat;
    border-style: solid;
    border-width: 0 11px;
  }
  .world-window .filter-label {
    position: absolute;
    left: 37px;
    top: 13px;
    color: #cac094;
    font-size: 10px;
  }
  .border-window {
    color: #444;
    pointer-events: auto;
    position: absolute;
    border-style: solid;
    border-width: 34px 20px;
    border-image: url(https://i.imgur.com/y2BIDtn.png) 32 20 fill repeat;
    background-size: 100% 100%;
    min-width: 160px;
  }
  
  .loot-window .items-wrapper .loot-item-wrapper {
    width: 58px;
    height: 133px;
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 4px;
    background: url(https://i.imgur.com/kAUPgQ7.png);
    position: relative;
    display: inline-block;
    box-shadow: 2px 2px 2px 0 rgba(0,0,0,.4);
  }
  .loot-window .middle-graphics {
    position: absolute;
    top: -2px;
    left: -10px;
    right: -10px;
    bottom: -6px;
    border-style: solid;
    border-width: 0 11px;
    border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill repeat;
    background-size: contain;
  }
  .loot-window .bottom-wrapper .bottom-graphic {
    background: url(https://i.imgur.com/CMWSffi.png);
    height: 35px;
    position: absolute;
    left: 0;
    right: 0;
    background-size: 100% 100%;
    bottom: 0;
  }
  
  /*DOL*/
  .bottom-panel .exp-bar-wrapper .exp-progress .progress .inner {
    background: linear-gradient(180deg, #00000082 0, #72d90178 25%, #72d90187 60%, #0000007d 100%);
  }
  .bottom-panel .exp-bar-wrapper .exp-progress.right .progress {
    left: 10px;
  }
  .bottom-panel .hp-indicator .hpp {
    width: 100%;
    line-height: 50px;
    font-size: 24px;
    color: rgb(0 0 0 / 55%);
    text-align: center;
    font-weight: 700;
    text-shadow: 0 0 1px rgba(0,0,0,.2);
    position: relative;
    top: 15px;
    left: 1px;
    font-family: 'Macondo';
  }
  span.value {font-family: 'Macondo';}
  .bottom-panel .hp-indicator .blood {
    bottom: 0;
    position: absolute;
    background: url(https://i.imgur.com/qHCXA36.png) 0 -10px;
  }
  .bottom-panel {
    pointer-events: none;
    width: 664px;
    height: 83px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -332px;
    background: url(https://i.imgur.com/VkmSHjy.png) -6px -73px no-repeat;
  }
  .bottom-panel .glass {
    position: absolute;
    background: url(../img/gui/sprite.png?v=1714462183767) -10px -199px;
    pointer-events: initial;
    width: 102px;
    height: 92px;
    bottom: 6px;
    box-shadow: inset 0 0 6px 5px black;
  }
  .bottom-panel-pointer-bg {
    position: absolute;
    background: none;
    width: 243px;
    height: 35px;
    left: 208px;
    top: 60px;
    pointer-events: none;
    color: gray;
    font-family: sans-serif;
  }
  .bottom-panel .lagmeter {
    width: 22px;
    height: 29px;
    position: absolute;
    left: 407px;
    bottom: 9px;
    display: none;
  }
  .bottom-panel .helpers-numbers span {
    color: #dbdbd6;
    text-shadow: .5px .5px #000,-.5px -.5px #000,-.5px .5px #000,.5px -.5px #000;
    font-size: 8px;
    user-select: none;
    pointer-events: none;
    z-index: 1;
    font-family: emoji;
  }
  .bottom-panel .exp-bar-wrapper .exp-progress .progress.noexp .inner {
    background: linear-gradient(180deg, #595959 0, #434343 25%, #676767 60%, #434343 100%);
  }
  
  .bottom-panel .exp-bar-wrapper .exp-progress .overlay {
    position: absolute;
    background: url(https://i.imgur.com/6v1RuiF.png) no-repeat -123px -184px;
    width: 247px;
    height: 25px;
    top: -1px;
  }
  
  /*STATYSTYKI*/
  .game-window-positioner .character_wrapper .stats-wrapper .stats-list li .value{font-size:10px;}
  .game-window-positioner .character_wrapper .stats-wrapper .stats-list {font-size: 11px;position: absolute;top: 23px;left: 8px;list-style: none;font-weight: 700;}
  .game-window-positioner .character_wrapper .stats-wrapper .header-title {font-size: 10px;color: #f5f5f5;text-align: center;line-height: 22px;font-weight: 300;background: url(https://i.imgur.com/bch4zfu.png);font-family: 'Macondo';top: -7px;position: relative;}
  .game-window-positioner .character_wrapper .stats-wrapper {position: absolute;top: 13px;right: 1px;background: url(https://i.imgur.com/9vmGVkF.png);width: 131px;height: 143px;}
  .game-window-positioner .character_wrapper .stats-wrapper .stats-button{bottom:10px;}
  .extended-stats .scroll-pane h3{font-family:macondo; color:beige; border-bottom: 1px solid #4c3755;}
  .extended-stats .scroll-pane .stat-group h4{font-family:macondo; color:beige;}
  .extended-stats .scroll-pane .bonuses .one-legend-bonus{font-family:macondo; color: #986fa9; font-size:12px;}
  .extended-stats .scroll-pane .stat-row .value{font-family: 'Macondo'; font-size: 13px;}
  
  
  /*KCSY*/
  .divide-panel .right-column .middle-graphics{border-image: url(https://i.imgur.com/VFuwblk.png);}
  .divide-panel .left-column .middle-left-column-graphics{border-image: url(https://i.imgur.com/VFuwblk.png) 0 50;}
  .divide-panel .left-column .bottom-left-column-graphics{border:1px solid black;}
  .divide-panel .bottom-part .bottom-panel-graphics{border-image: url(https://i.imgur.com/CMWSffi.png) 0 59 fill stretch;}
  .divide-panel .left-column .left-column-header{font-family:macondo; color:beige;}
  .tp-scroll .right-column .right-column-header .city-name{font-family:macondo; color:beige;}
  .divide-panel .right-column .location-graphics{border-image: url(https://i.imgur.com/hL7fDKW.png) 0 54 fill repeat stretch;}
  .divide-panel .left-column .top-left-column-graphics{border-image: url(https://i.imgur.com/ABN8v1M.png) 0 54 fill repeat stretch;}
  
  /*MINIMAPA*/
  .border-window.transparent .border-image {box-shadow: 0 0 0 1px #010101, 0 0 0 2px #4f3a58, 0 0 0 3px #0c0d0d, 2px 2px 3px 3px #0c0d0d66; background: #03000ad6; background-size: 100% 100%; backdrop-filter: blur(2px);}
  
  
  /*MINUTNIK*/
  .window-list-edit .con .middle-graphics{border: none !important;}
  .control.divide-button.input-val-elite>.option.button.small.right.active{background: #36005d !important;}
  .control.divide-button.input-val-elite>.option.button.small.left.active{background: #36005d !important;}
  
  .control.divide-button.input-val-elite2>.option.button.small.right.active{background: #36005d !important;}
  .control.divide-button.input-val-elite2>.option.button.small.left.active{background: #36005d !important;}
  
  .control.divide-button.input-val-heroes>.option.button.small.right.active{background: #36005d !important;}
  .control.divide-button.input-val-heroes>.option.button.small.left.active{background: #36005d !important;}
  
  .control.divide-button.input-val-titans>.option.button.small.right.active{background: #36005d !important;}
  .control.divide-button.input-val-titans>.option.button.small.left.active{background: #36005d !important;}
  
  .control.divide-button.input-val-hero-resp>.option.button.small.right.active{background: #36005d !important;}
  .control.divide-button.input-val-hero-resp>.option.button.small.left.active{background: #36005d !important;}
  
  .control.divide-button.input-val-sound>.option.button.small.right.active{background: #36005d !important;}
  .control.divide-button.input-val-sound>.option.button.small.left.active{background: #36005d !important;}
  
  .control.divide-button.input-val-title>.option.button.small.right.active{background: #36005d !important;}
  .control.divide-button.input-val-title>.option.button.small.left.active{background: #36005d !important;}
  
  
  
  /*GRACZE NA MAPIE*/
  .tw-list-item{box-shadow: inset 0 0 0px 1px #320463 !important; background: hsl(274.15deg 100% 7.55% / 43%); box-shadow:none; transition:.1s;}
  .tw-list-item:hover{background: rgb(52 3 116 / 48%);}
  .border-window.transparent .search-wrapper{border-top: 1px solid rgb(230 168 255 / 30%);}
  .divide-and-color-edit .middle-graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 25 fill;}
  .border-window.transparent .scroll-wrapper .scrollbar-wrapper .track .handle {background-image: url(https://i.imgur.com/jrTOGcH.png);}
  .border-window.transparent .scroll-wrapper .scrollbar-wrapper .arrow-up {background-image: url(https://i.imgur.com/jrTOGcH.png);}
  .border-window.transparent .scroll-wrapper .scrollbar-wrapper .arrow-down {background-image: url(https://i.imgur.com/jrTOGcH.png);}
  .who-is-here .players-number{font-family: 'Macondo';}
  
  /*GRUPA*/
  .party .list .party-member .table-wrapper .hp .hp-bar{filter:hue-rotate(285deg);}
  .party .list .party-member .table-wrapper .hp .hp-label{font-family: 'Macondo'; color: white; font-size: 11px;}
  .party .exp-percent{background: url(https://i.imgur.com/d3gBymX.png); background-size: 100% 100%;}
  .party .exp-percent::before{background: url(https://i.imgur.com/d3gBymX.png) !important; background-size: 100% 100% !important;}
  .party .list .party-member.yellow {color: #ff0; font-size:12px;}
  
  /*RELOG*/
  .relogger__one-world.active {color: beige; font-family: macondo;}
  .relogger__one-world{font-family:macondo; transition:.2s;}
  .relogger__header{font-family:macondo;}
  .c-line{background-image: linear-gradient(90deg, transparent 10%, rgb(146 75 255 / 80%), transparent 90%);}
  .table-img-avatar .table-cell-img-avatar .img-avatar-correct{transition:.2s;}
  .img-avatar-correct:hover {filter: drop-shadow(0px 0px 4px #a57ce5);}
  
  /*BUTTONY*/
  .button.green, .widget-button.green {background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d;}
  .button.green::before, .widget-button.green::before {box-shadow: none;}
  .button.green, .widget-button.green:focus{box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d; color:beige;}
  .button.red, .widget-button.red {background-image: linear-gradient(to top, #3b0000ab, #2f0707); box-shadow: inset 0 0 1px 1px #583a3a, inset 0 0 0 3px #0d0c0c;}
  .button.red::before, .widget-button.red::before {box-shadow: inset 0 0 1px 1px rgb(0 0 0 / 65%);}
  .button, .widget-button{background-image: linear-gradient(to top, #3b0000ab, #2f0707); box-shadow: inset 0 0 1px 1px #583a3a, inset 0 0 0 3px #0d0c0c;}
  .button::before, .widget-button::before{box-shadow:none;}
  .button.purple, .button.violet, .widget-button.purple, .widget-button.violet {background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d;}
  .button.purple::before, .button.violet::before, .widget-button.purple::before, .widget-button.violet::before{box-shadow:none;}
  .button .label .learn, .button .label .reset{font-family:macondo; color:beige;}
  .widget-button .widget-blink{visibility:hidden;}
  .button.blink-violet, .widget-button.blink-violet {background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d;}
  .button.blink-violet::before, .widget-button.blink-violet::before{box-shadow:none;}
  .auction-but.green {background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d; border:none;}
  .auction-but.green:hover {background: linear-gradient(to top, #17003bab, #321061);}
  .menu-list .bck .menu-option{font-family:macondo;}
  .button.small.green.pressed {background: #1c1c1c;}
  body:not(.mobile-version) .widget-button:not(.no-hover):not(.disabled):hover:not(.active) {background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #9759b1, inset 0 0 0 3px #0c0d0d;}
  .button.black::before, .widget-button.black::before, body.mobile-version .button:not(.no-hover):not(.disabled):active::before, body.mobile-version .widget-button:not(.no-hover):not(.disabled):active::before, body:not(.mobile-version) .button:not(.no-hover):not(.disabled):hover:not(.active)::before, body:not(.mobile-version) .widget-button:not(.no-hover):not(.disabled):hover:not(.active)::before {
    box-shadow:none;}
    .button.black, .widget-button.black, body.mobile-version .button:not(.no-hover):not(.disabled):active, body.mobile-version .widget-button:not(.no-hover):not(.disabled):active, body:not(.mobile-version) .button:not(.no-hover):not(.disabled):hover:not(.active), body:not(.mobile-version) .widget-button:not(.no-hover):not(.disabled):hover:not(.active)
    {    background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #9759b1, inset 0 0 0 3px #0c0d0d;}
    .button.small.green.stats-expand.active:hover {background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #9759b1, inset 0 0 0 3px #0c0d0d;}
  
  
  
    /*GROOOVE*/
  .cll-alert{border: 1px solid #483d59;border-radius: 10px;    background: url(https://i.imgur.com/WUNvUMb.png); opacity: 0.9; color: white;}
  .cll-alert-content{background: url(https://i.imgur.com/WUNvUMb.png) -1px 242px; color: white;}
  .cll-modal{background: url(https://i.imgur.com/WUNvUMb.png); opacity: 0.9; color: white; border-radius:10px; background-size:100% 100%;}
  .cll-modal-title{color:white;}
  .cll-bordered-button {border: 1px solid #66388b; color:white;}
  .cll-alert button {font-weight: bold; box-shadow: 0px 0px 4px #a57ce5; transition: .2s; margin-right: 7px; background:none;}
  .cll-alert button:hover {box-shadow: 0 0 6px #cb00ff; background:none;}
  .cll-bordered-button {border: 1px solid #66388b;}
  .cll-bordered-button:hover {border-color: #a461d9;}
  button.cll-ok-btn{border: 1px solid #66388b; color:white; background:none;}
  .cll-modal button:hover {background:none; border-color: #9451c9;}
  .cll-modal textarea {background: #00000085; text-align:center; color:white;}
  .cll-modal button{background: none; border: 1px solid #66388b; color: white;}
  .cll-launcher{border: 1px solid #503b59; color: #c9c9c9; opacity:1; background:#0000009c;}
  .cll-timer{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%; border: 1px solid #503b59;}
  .cll-timer-highlighted {box-shadow: inset 0 0 10px #9300ff !important;}
  .addonDisplay-single-wrapper.long {height: 380px;}
  .addonDisplay-single-wrapper > .addonDisplay-single-display.long {margin-top: -2px;}
  .addonDisplay-single-wrapper > .addonDisplay-single-display.long {height: 377px; padding-left: 0;}
  .addonDisplay-single-wrapper{padding-left:0;}
  
  #PWContainer{background: url(https://i.imgur.com/WUNvUMb.png) !important; background-size: 100% 100% !important; border-bottom: 1px solid #503b59 !important; border-right: 1px solid #503b59 !important;}
  .PWLink, .PWLinks > * {color: #b081c7 !important;}
  #PWCloseButton, #PWLogCloseButton{border: 1px solid #66388b !important; color: white !important; transition: .2s !important; background:none !important;}
  #PWCloseButton:hover, #PWLogCloseButton:hover {border-color: #a461d9 !important;}
  #PWLauncher{border: 1px solid #503b59 !important; color: #c9c9c9 !important; opacity:1 !important; background:#0000009c !important;}
  
  .button.blue, .widget-button.blue {background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 2px #592097, inset 0 0 0 3px #0c0d0d;}
  .button.blue::before, .widget-button.blue::before {box-shadow: inset 0 0 1px 1px rgb(0 0 0 / 65%);}
  .button.blue.window-is-open::before, .widget-button.blue.window-is-open::before {background-color: #000000;}
  
  /*SPOÅECZNOÅšÄ†*/
  .friend-enemy-list .column .scroll-wrapper .scroll-pane .middle-graphics{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill repeat;}
  .friend-enemy-list .bottom-friend-panel{background: url(https://i.imgur.com/CMWSffi.png);}
  .friend-enemy-list .amound-wrapper{background: url(https://i.imgur.com/CMWSffi.png);}
  .buttons.action-buttons.btns-spacing>.button.small {background-image: linear-gradient(to top, #3b0000ab, #2f0707); box-shadow: inset 0 0 1px 1px #583a3a, inset 0 0 0 3px #0d0c0c;}
  .buttons.action-buttons.btns-spacing>.button.small::before {box-shadow:none !important;}
  .buttons.action-buttons.btns-spacing>.button.small.green {background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d;}
  .friend-enemy-list .amound-wrapper .amound-value{color: beige; font-family: Macondo;}
  .info {color: beige;}
  .friend-enemy-list .column .scroll-wrapper .scroll-pane .list .one-person .info .online-text.green{font-family:macondo;}
  .friend-enemy-list .column .scroll-wrapper .scroll-pane .list .one-person .info .who{font-family:macondo; font-weight:100;}
  .friend-enemy-list .column .scroll-wrapper .scroll-pane .list .one-person .info .location{font-family:macondo;}
  .friend-enemy-list .column .scroll-wrapper .scroll-pane .list .one-person .info .cords{font-family:macondo;}
  .friend-enemy-list .bottom-friend-panel .button{margin-top:3px;}
  .friend-enemy-list .friend-enemy-cards .card.active{background: url(https://i.imgur.com/VL6LP2H.png); background-size:100% 100%;}
  .friend-enemy-list .friend-enemy-cards .card{background: url(https://i.imgur.com/HdwjeEN.png);background-size:100% 100%;}
  .friend-enemy-list .header-background-graphic{filter:brightness(0.5);}
  span.lvl {font-family: macondo; color: beige;}
  
  /*ÅšWIAT*/
  .border-window .bottom-bar{background: url(https://i.imgur.com/CMWSffi.png);}
  .world-window__info{background: #18181854; border: 1px solid #3d3a34;}
  .server-parameters__item{border: 1px solid #3d3a34;}
  .server-parameters__item-value{border-left: 1px solid #3d3a34;}
  .tabs-nav::before{filter:brightness(0.5);}
  .tabs-nav .card.active{background: url(https://i.imgur.com/VL6LP2H.png); background-size:100% 100%;}
  .tabs-nav .card{background: url(https://i.imgur.com/HdwjeEN.png);background-size:100% 100%;}
  
  /*RZEMIOSÅO*/
  .enhance__item {width: 46px;height: 46px;padding: 9px 6px;box-sizing: border-box;background: url(https://i.imgur.com/g60Tj1i.png) -51px -444px;position: relative;z-index: 1;}
  .enhance__progress-bg {width: 100%;height: 100%;background: url(https://i.imgur.com/CAQoycR.png) 0 -104px;border: 1px solid #4f3a58;}
  .enhance__progress--preview {background: #00732e;z-index: -2;}
  .enhance__progress--current {background: #4f0059;z-index: -1;}
  .salvage__receives{background: url(https://i.imgur.com/tWLRbCu.png) no-repeat -178px -3px; box-shadow: 0 0 0 1px #070807, 0 0 0 2px #4f3a58, 0 0 0 3px #070807;}
  .extraction__receives{background: url(https://i.imgur.com/tWLRbCu.png) no-repeat -178px -3px; box-shadow: 0 0 0 1px #070807, 0 0 0 2px #4f3a58, 0 0 0 3px #070807;}
  .extraction__label {background: #2c292a !important; box-shadow: 0 2px 0 -1px #2c292a !important; border: 1px solid #4f3a58 !important;}
  .extraction__item{background: url(https://i.imgur.com/g60Tj1i.png) -51px -444px;}
  .crafting__bg{background:none;}
  .crafting-reagent .reagent-wrapper{border: 1px solid #280f31; border-radius: 5px;}
  
  .bonus-reselect-wnd__bg{background:none;}
  .bonus-selector-wnd__bg{background:none;}
  
  .left-grouped-list-and-right-description-window .left-column .bottom-left-column-graphics {
    width: 255px;
    height: 19px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url(https://i.imgur.com/sT9g7XT.png);
  }
  .left-grouped-list-and-right-description-window .main-header {
    width: 550px;
    height: 69px;
    position: absolute;
    top: 0px;
    left: -10px;
    background: url(https://i.imgur.com/f90qgK3.png);
  }
  .search-wrapper {
    position: relative;
    border-style: solid;
    border-width: 5px 9px 23px 34px;
    border-image: url(https://i.imgur.com/qBXxCIX.png) 5 9 23 34 fill;
  }
  .left-grouped-list-and-right-description-window .main-header .left-column-list-label {
    position: absolute;
    top: 10px;
    left: 17px;
    width: 220px;
    text-align: center;
    color: #a1a1a1;
    font-size: 17px;
    font-family: macondo;
  }
  .left-grouped-list-and-right-description-window .right-column .paper-graphics {
    position: absolute;
    top: 60px;
    left: 10px;
    border-style: solid;
    border-width: 57px 27px 22px;
    border-image: url(https://i.imgur.com/LjOzvyq.png) 66 27 27 fill round;
    bottom: 0;
    right: 5px;
  }
  .left-grouped-list-and-right-description-window .right-column .right-scroll .scroll-pane .reagents-list .board {
    display: none;
    position: absolute;
    top: -6px;
    bottom: -6px;
    right: 16px;
    left: 16px;
    border: 1px solid #280f31;
    border-radius: 5px;
    font-family: Macondo;
  }
  .left-grouped-list-and-right-description-window .right-column .right-column-header {
    position: absolute;
    top: 10px;
    left: 68px;
  }
  .info-box{border:none; background:none;}
  .enhance__info{border:none; background:none;}
  .salvage__info{border:none; background:none;}
  .extraction__info{border:none; background:none;}
  .cards-header-wrapper .header-background-graphic{filter:brightness(0.5);}
  .cards-header-wrapper .cards-header .card.active {background: url(https://i.imgur.com/VL6LP2H.png) no-repeat; background-size:100% 100%;}
  .cards-header-wrapper .cards-header .card{background:url(https://i.imgur.com/HdwjeEN.png); background-size:100% 100%;}
  .divide-list-group .card-graphic{border-image: url(https://i.imgur.com/VL6LP2H.png) 5 fill;}
  .left-grouped-list-and-right-description-window .bottom-row-panel .filter-label{color:beige; font-family:macondo;}
  .enhance__reagents{background: url(https://i.imgur.com/tWLRbCu.png) no-repeat -178px -3px; box-shadow: 0 0 0 1px #070807, 0 0 0 2px #4f3a58, 0 0 0 3px #070807;}
  .enhance__label{border: 1px solid #4f3a58; color:beige; font-family:macondo;}
  .info-box.mt-4>div {font-family: 'Macondo'; color: beige;}
  .enhance__info--1>div{font-family: 'Macondo'; color: beige;}
  .salvage__reagents{background: url(https://i.imgur.com/tWLRbCu.png) no-repeat -178px -3px; box-shadow: 0 0 0 1px #070807, 0 0 0 2px #4f3a58, 0 0 0 3px #070807;}
  .salvage__label{border: 1px solid #4f3a58;}
  
  /*RECEPTY*/
  .left-grouped-list-and-right-description-window .left-column .middle-left-column-graphics{background: url(https://i.imgur.com/VFuwblk.png); background-size: contain;}
  .left-grouped-list-and-right-description-window .right-column .middle-right-column-graphics{background: url(https://i.imgur.com/VFuwblk.png);}
  .left-grouped-list-and-right-description-window .bottom-row-panel .bottom-panel-graphics{background: url(https://i.imgur.com/CMWSffi.png);}
  
  /*QUESTY*/
  .quest-box .info-wrapper{background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100%;}
  .quest-box .quest-content{background:none;}
  .quest-box .quest-content .q_doit{color: beige; font-family: macondo;}
  
  /*UMIEJETNOSCI*/
  .additional-skill-panel {width: 532px;height: 82px;position: absolute;bottom: 62px;left: 66px;z-index: -1;background: url(https://i.imgur.com/27W7awF.png);}
  .skill {background: url(https://i.imgur.com/xoASAe9.png);}
  .skills-window .bottom-part .bottom-panel-graphics{border-image: url(https://i.imgur.com/CMWSffi.png) 0 59 fill stretch;}
  .skills-window .right-column .points-header-wrapper{border-image: url(https://i.imgur.com/VL6LP2H.png) 17 11 fill round;}
  .skills-window .left-column .list-label-wrapper .list-border{border-image: url(https://i.imgur.com/VL6LP2H.png) 17 11 fill round;}
  .skills-window .left-column .list-label-wrapper .list-label .label{font-family:macondo;color:#777;}
  .skills-window .right-column .points-header-wrapper .skills-points-wrapper{font-family:macondo;color:#777; font-size:15px;}
  .skills-window .right-column .points-header-wrapper .skills-points-wrapper .skills-points{color: #e3e3e3;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .stone{border-image: url(https://i.imgur.com/VL6LP2H.png) 6 6 fill round stretch;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .board-graphic{border-image:none !important; border-style:none;}
  .skills-window .left-column .skills-wrapper .description-wrapper{border-image: url(https://i.imgur.com/HdwjeEN.png) 2 16 fill;}
  .skills-window .left-column .middle-graphic, .skills-window .right-column .middle-graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill round;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .empty .info1, .skills-window .right-column .scroll-wrapper .scroll-pane .empty .info2 {margin-bottom: 15px; color: #777; font-family: macondo;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .header .right-wrapper .name{color: #777; font-family: macondo;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .header .right-wrapper .description{color: beige; font-family: macondo; font-size:15px;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .requirements-wrapper .title{font-family: macondo;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .requirements-wrapper>*{font-family: macondo;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .stats-wrapper .stats-h{font-family: macondo; color:beige;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .stats-wrapper .all-stats{font-family: macondo;}
  .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .stats-wrapper .all-stats .skill-stat{font-size:13px;}
  .skills-window .right-column .points-header-wrapper .skills-points-wrapper .skills-points-description{font-family: macondo; font-size:17px;}
  .skills-points{font-family: macondo;}
  .skills-window .right-column .skill-slider-value{font-family: macondo; font-size: 14px; color: beige;}
  .skills-window .bottom-part .MB-wrapper .MB-label-2 {color: beige; font-family: macondo;}
  .skills-window .left-column .skills-wrapper .description-wrapper{font-family:macondo;}
  .skill .notif.mana {border: 1px solid beige; color: beige; font-family: macondo; padding-top: 1px;}
  .skill .label-wrapper{top:27px;}
  .label-background>label {font-family: macondo; color: white; font-size: 11px;}
  .skill-usable-slot.ui-droppable {bottom: 2px; left: 0px;}
  .battle-skill .background{background:none !important;}
  
    /*UM SLIDER*/
    .c-slider__input::-webkit-slider-thumb {-webkit-appearance: none; appearance: none; width: 18px; height: 25px; border-radius: 6px; background-image: linear-gradient(to right, rgb(0 0 0) 10%, #390077 10%) !important; box-shadow: inset 0 0 1px 1px #6c00bf, inset 0 0 0 3px #0c0d0d, 0 0 0 1px #0c0d0d; box-sizing: border-box;}
    .c-slider__input {    box-shadow: inset 0 0 1px 1px #5800e5, inset 0 0 0 2px #0c0d0d !important;     background: linear-gradient(to right, rgb(91 0 211) 10%, rgb(12, 13, 13) 10%) !important;}
    .c-slider__input::-moz-range-thumb {-moz-appearance: none;appearance: none;width: 18px;height: 25px;border-radius: 6px;background-image: linear-gradient(to top, #000000, #268a81);box-shadow: inset 0 0 1px 1px #cecece, inset 0 0 0 3px #0c0d0d, 0 0 0 1px #0c0d0d;box-sizing: border-box;} 
  
  
  
  /*MISTRZOSTWO*/
  .MBEditor .buttons-wrapper{background:url(https://i.imgur.com/CMWSffi.png); background-size:100% 100%;}
  .MBEditor .buttons-wrapper .checkbox-wrapper .mb-label{font-family:macondo; color:beige;}
  .MBEditor .skills-list .single-skill-row.usable .number{color:beige; font-family:macondo;}
  .MBEditor .skills-list .single-skill-row .skill-name{color:beige; font-family:macondo;}
  .MBEditor .skills-list .single-skill-row.usable:hover {background: #ada8951f;}
  
  
  /*USTAWIENIA*/
  .settings-window h2{background: url(https://i.imgur.com/CMWSffi.png); background-size:100% 100%; width:380apx;}
  .settings-window .hero-options-config .hero-options li .label{color:beige; font-family:macondo;}
  .settings-window .cards-header-wrapper .cards-header .card{background:url(https://i.imgur.com/HdwjeEN.png); background-size:100% 100%;}
  .cards-header-wrapper .cards-header .card.active{background:url(https://i.imgur.com/VL6LP2H.png); background-size:100% 100%;}
  .settings-window .section .scroll-wrapper .scroll-pane .graphic-background{border:none !important;}
  .checkbox {width: 17px; height: 17px; display: block; float: left; margin-right: 3px; margin-left: 3px; background: url(https://i.imgur.com/wKqR5yj.png); border: 1px solid #4f3a58; border-radius: 5px;}
  .checkbox.active {width: 17px; height: 17px; background: url(https://i.imgur.com/ZjeaOPQ.png) no-repeat -502px -94px; position: relative;}
  
  
  /*OTCHLAN*/
  .matchmaking-panel .middle-graphics{border-image: url(https://i.imgur.com/VFuwblk.png) 10 fill;}
  .matchmaking-panel .bottom-panel-graphics{background:url(https://i.imgur.com/CMWSffi.png);}
  .matchmaking-tile.history{filter: hue-rotate(234deg) brightness(0.7);}
  .matchmaking-tile.queue{filter: hue-rotate(234deg) brightness(0.7);}
  .matchmaking-tile.statistick{filter: hue-rotate(234deg) brightness(0.7);}
  span.label {color: beige; font-family: macondo;}
  .matchmaking-panel .all-pages .matchmaking-menu .matchmaking-menu-bottom-panel .warning-points .text{color: beige; font-family: macondo; top:0px;}
  .matchmaking-panel .all-pages .matchmaking-menu .matchmaking-menu-bottom-panel .warning-points{background:none;}
  .stats-and-history .progress-wnd .left-side .char-info, .stats-and-history .progress-wnd .left-side .tokens-amount {color: beige; font-family: macondo; font-size: 15px;}
  .matchmaking-progress-stage .points-side .stage {color: #986fa9; font-family: macondo;}
  .matchmaking-progress-stage .points-side .ratio {color: beige; font-family: macondo;}
  .matchmaking-panel .all-pages .main-wnd .section table td{color: beige; font-family: macondo; border: 1px solid #4f3a58;}
  .info>b {font-family: macondo; color:beige;}
  .stats-and-history .section .history-table .result-win {color: #986fa9; font-family: macondo;}
  .stats-and-history .section .history-table .result-lose {color: #ad0000; font-family: macondo;}
  .stats-and-history .section .history-bottom-panel .page-info {color: beige; font-family: macondo;}
  .stats-and-history .section .history-bottom-panel .input-wrapper .default{color: beige; font-family: macondo; border: 1px solid #554365;}
  .stats-and-history .season-wnd .season-header{border-image: url(https://i.imgur.com/CMWSffi.png) 7 14 fill stretch;}
  .stats-and-history .season-wnd .middle-wood{background: url(https://i.imgur.com/VFuwblk.png);}
  .stats-and-history .season-wnd .season-header{color: beige; font-family: macondo;}
  .stats-and-history .season-wnd .winners-wrapper .header-info {color: beige; font-family: macondo;}
  .stats-and-history .season-wnd .winners-wrapper .txt-info {color: #e9e9e9; font-family: macondo;}
  .stats-and-history .season-wnd .winners-wrapper .players-in-ranking-info{font-family:macondo;}
  .stats-and-history .season-wnd .winners-wrapper .players-in-ranking-info span {color: #986fa9; font-family: macondo;}
  .stats-and-history .season-wnd .winners-wrapper .amount-players-got-outfit-info{color: #986fa9; font-family: macondo;}
  .your-season-record{color:beige; font-family:macondo;}
  .your-career-record{color:beige; font-family:macondo;}
  .matchmaking-ranking .cards-header-wrapper .cards-header .card{background:url(https://i.imgur.com/HdwjeEN.png) no-repeat; background-size:100% 100%;}
  .cards-header-wrapper .cards-header .card.active{background:url(https://i.imgur.com/VL6LP2H.png) no-repeat; background-size:100% 100%;}
  .label {font-family: macondo;}
  .matchmaking-ranking .section .ranking-bottom-panel .input-wrapper .default{font-family:macondo; color:beige;}
  .border-window.transparent.mm-details-window .details-progress .details-header{font-family:macondo; color:beige;}
  .details-txt {font-family: 'Macondo'; color: beige;}
  .border-window.transparent.mm-details-window .details-progress .green {color: #986fa9; font-family: macondo; font-size:14px;}
  
  
  /*MAPA SWIATA*/
  .layer.interface-layer .mini-map .mini-map-map .graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 40 fill;}
  .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane{border-image: url(https://i.imgur.com/VFuwblk.png) 0 30 fill repeat;}
  .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane .one-location-on-list{font-family:macondo; color:beige;}
  
  
  /*KLANY*/
  .clan .left-column .clan-info .stats .clan-member-amount, .clan .left-column .clan-info .stats .clan-recruit-state{font-family:macondo;}
  .clan .left-column .clan-info .stats .clan-member-amount span, .clan .left-column .clan-info .stats .clan-recruit-state span{font-family:macondo;}
  .clan-treasury-content .scroll-wrapper .scroll-pane .right-part .outfit-content {position: relative; background: url(https://i.imgur.com/mDvzf0S.png) no-repeat 0 -867px; width: 168px; height: 256px;}
  .clan .left-column .clan-info .clan-level{font-family: 'Macondo';}
  .clan .left-column .clan-list-bottom {position: absolute; left: -9px; bottom: -8px; width: 211px; height: 23px; background: url(https://i.imgur.com/mcSqUlE.png) no-repeat -228px -247px;}
  .clan .left-column .clan-info {position: absolute;top: -15px;left: -9px;width: 211px;height: 199px;background: url(https://i.imgur.com/qFavJIt.png) no-repeat -13px -245px;}
  .clan .right-column{border-image: url(https://i.imgur.com/VFuwblk.png) 0 10 round;}
  .clan-bless-content .header-bar, .clan-diplomacy-content .header-bar, .clan-edit-page-content .header-bar, .clan-history-content .header-bar, .clan-manage-content .header-bar, .clan-official-page-content .header-bar, .clan-priv-page-content .header-bar, .clan-quests-content .header-bar, .clan-rank-edit-content .header-bar, .clan-recruit-content .header-bar, .clan-skills-content .header-bar, .clan-treasury-content .header-bar
  {background:url(https://i.imgur.com/CMWSffi.png); background-size:100% 100%;}
  .clan .left-column .clan-list-repeat{background: url(https://i.imgur.com/VFuwblk.png) repeat; background-size: 100% 100%;}
  .clan .left-column .scroll-wrapper .scroll-pane .card{background: url(https://i.imgur.com/HdwjeEN.png) no-repeat; background-size:100% 100%;}
  .clan .left-column .scroll-wrapper .scroll-pane .active {background: url(https://i.imgur.com/VL6LP2H.png) no-repeat !important; background-size: 100% 100% !important; color:beige !important;}
  .clan .left-column .scroll-wrapper .scroll-pane .card .label{font-size:14px;}
  .clan .left-column .scroll-wrapper .scroll-pane .card{color: #939393;}
  .clan-list-content .first-scroll-wrapper .scroll-pane table .hover:hover {background: #3e006d45;}
  .card-content .table-header-wrapper {background: url(https://i.imgur.com/CMWSffi.png); background-size:100% 100%;}
  .clan-other-recruit-content .clan-list-butts-wrapper, .clan-recruit-content .clan-list-butts-wrapper{background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100%;}
  .clan-other-recruit-content .green-box, .clan-recruit-content .green-box{background: url(https://i.imgur.com/WUNvUMb.png) repeat-y; background-size:100% 100%; color: beige;}
  span.atribute-name {font-family: macondo; font-size: 14px;}
  span.atribute-value {font-size: 14px; font-family: macondo;}
  .clan-recruit-content .section-recruit-main .scroll-wrapper {background: url(https://i.imgur.com/WUNvUMb.png) repeat-y; background-size: 100% 100%;}
  .clan-info-content .scroll-wrapper{background: url(https://i.imgur.com/WUNvUMb.png) repeat-y; background-size: 100% 100%;}
  .clan-list-content .first-scroll-wrapper{background: url(https://i.imgur.com/WUNvUMb.png) repeat-y; background-size: 100% 100%;}
  .clan-info-content .scroll-wrapper .scroll-pane .first-text{font-family:macondo; color:beige;}
  .clan-info-content .scroll-wrapper .scroll-pane .heading{color:beige; font-family:macondo;}
  .clan-info-content .scroll-wrapper .scroll-pane .second-text ul{color:beige; font-family:macondo;}
  .clan-info-content .scroll-wrapper .scroll-pane .second-text ul li{color:beige; font-family:macondo;}
  .clan-info-content .scroll-wrapper .scroll-pane .ribbon{filter: hue-rotate(160deg);}
  .card-content .clan-list-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td{border-right: 1px solid #4f3a58; border-bottom: 1px solid #4f3a58;}
  td.clan-name-td.normal-td>span {color: beige; font-family: macondo; font-size: 13px;}
  td.clan-lvl-td.normal-td {color: beige; font-family: macondo; font-size: 14px !important;}
  td.clan-members-td.normal-td{color: beige; font-family: macondo; font-size: 14px !important;}
  td.clan-minlvl-td.normal-td{color: beige; font-family: macondo; font-size: 14px !important;}
  .clan-members-content .scroll-wrapper{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .char-stats {font-family: macondo; color: beige; font-size: 14px;}
  .clan-member .char-info .last-visit {color: #9d9d92; font-family: macondo; font-size: 10.5px;}
  .card-content .clan-members-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td{border-right: 1px solid #4f3a58; border-bottom: 1px solid #4f3a58;}
  span.member-lvl {color: beige; font-family: macondo; font-size: 13px;}
  .clan-members-content .clan-members-table td .member-rank, .clan-members-content .table-header td .member-rank{color: beige; font-family: macondo; font-size: 13px;}
  .online-status {color: #ad5252; font-family: macondo; font-size: 14px;}
  .time-offline {color: #ad5252; font-family: macondo; font-size: 14px;}
  span.online-status.green {color: #986fa9; font-family: macondo; font-size: 14px;}
  .clan-recruit-content .scroll-wrapper, .clan-other-recruit-content .scroll-wrapper{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  
  
  /*SKARBIEC*/
  .amount-label{color: beige; font-family: macondo; font-size: 15px; background: url(https://i.imgur.com/CMWSffi.png); background-size:100% 100%;}
  .clan-treasury-content .scroll-wrapper .scroll-pane .right-part .header-bar {background-size: 100% 100%;}
  .amount-label .amount-wprapper .amount{font-family:macondo;}
  .clan-treasury-content .green-box{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .clan-treasury-content .table-header{background:url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100%;}
  .card-content .clan-treasury-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td{border-right: 1px solid #4f3a58; border-bottom: 1px solid #4f3a58;}
  td.left-td.normal-td {color: beige; font-family: macondo; font-size: 13px !important;}
  td.normal-td{color: beige; font-family: macondo; font-size: 13px !important;}
  
  /*ZARZADZANIE*/
  .clan-treasury-content .scroll-wrapper{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .clan-manage-content .green-box{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .label-info {font-family: 'Macondo'; color: beige; font-size: 14px;}
  .clan-manage-content .scroll-wrapper{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .card-content .clan-manage-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td{border-right: 1px solid #4f3a58; border-bottom: 1px solid #4f3a58;}
  .clan-diplomacy-content {background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .header-bar.text-center.padd {color: beige; font-family: macondo; font-size: 16px;}
  .rank-edit-header{color: beige; font-family: macondo; font-size: 16px;}
  .clan-rank-edit-content .scroll-wrapper{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .clan-rank-edit-content .check-rank .left-ranks .one-rank, .clan-rank-edit-content .check-rank .right-ranks .one-rank{color: beige; font-size: 15px;}
  .clan-rank-edit-content .numerable-ranks .one-numerable-rank{color: beige; font-size: 15px;}
  
  
  
  /*DYPLOMACJA*/
  td.right-td {color: beige; font-family: 'Macondo'; font-size: 13px !important;}
  td.medium-height-td.table-header{color: beige; font-family: 'Macondo'; font-size: 13px !important;}
  td.table-header{color: beige; font-family: 'Macondo'; font-size: 13px !important;}
  .card-content .table-header{color:beige !important;}
  .clan-diplomacy-content .green-box{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  
  /*HISTORIA KLANOWA*/
  .clan-history-content .chose-show{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  table.history-table.table-content{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  
  /*QUESTY KLANOWE*/
  .clan-quests-content .scroll-wrapper{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .one-clan-quest.quest_active {border: 1px solid #4f3a58;}
  .one-clan-quest .quest-state.quest_active {color: beige; border: 1px solid #4f3a58; font-family: macondo; font-size: 15px; background: #00000059; backdrop-filter: blur(4px);}
  .quest-header {font-family: macondo; color: beige; font-size: 18px !important;}
  .quest-content {font-family: macondo; color: beige;}
  .progress-text{font-family: macondo; color: beige;}
  input.default{font-family: macondo; color: beige;}
  .one-clan-quest .quest-progress-wrapper .quest-percent{font-family: macondo; color: beige;}
  .one-clan-quest .quest-progress-wrapper .clan-progress-bar{filter: hue-rotate(207deg) brightness(0.5);}
  
  /*UMIEJETNOSCI KLANOWE*/
  .clan .right-column .scroll-wrapper.classic-bar.scrollable .scroll-pane{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  .one-clan-skill{border: 1px solid #4f3a58;}
  .one-clan-skill .skill-clan-info .skill-clan-name{color: beige; font-family: macondo; font-size: 18px !important;}
  .clan-skills-content .clan-skill-heading-text{color:beige; font-family:macondo;}
  .one-clan-skill .skill-clan-info .skill-actual-val, .one-clan-skill .skill-clan-info .skill-clan-description{color:beige; font-family:macondo;}
  .one-clan-skill .skill-clan-buts-wrapper .skill-clan-buts-label {font-family: 'Macondo'; color: beige; margin-left: 12px;}
  .clan-skill-header {font-family: macondo; color: beige; font-size: 15px;}
  .clan-skills-content .clan-skill-header span.green {color: #986fa9;font-family: macondo;}
  
  /*BLOGOSLAWIENSTWA KLANOWE*/
  .clan-bless-content .bless-header {color: beige; font-family: 'Macondo';}
  .one-bless-skill{border: 1px solid #4f3a58;}
  .one-bless-skill .info-wrapper .bless-name {color: beige; font-family: 'Macondo';}
  .one-bless-skill .info-wrapper .bless-description{color: beige; font-family: 'Macondo';}
  .one-bless-skill .bless-use .bless-duration{color: beige; font-family: 'Macondo';}
  
  /*OGLOSZENIA KLANOWE*/
  .page-content {color: beige;}
  
  /*STRONA OFICJALNA*/
  span.clan-desc {font-family: macondo; color: beige; font-size: 17px;}
  .clan-banner-name .clan-name {color: beige; font-family: macondo;}
  
  /*FILTRUJ KLAN*/
  .clan-list-find-panel{border-image: url(https://i.imgur.com/VFuwblk.png) 0 9 repeat;}
  .clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-0, .clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-1, .clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-2
  {background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100% !important; color: beige; font-family: macondo;}
  .clan-list-find-panel .clan-list-butts-wrapper{background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100% !important;}
  .card-content .clan-list-find-panel input.default, .card-content .green-box input.default{border: 1px solid #4f3a58;}
  .divide-button .button.active.active::before {box-shadow: none;}
  .divide-button .button.active{background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d;}
  .divide-button .button{background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d;}
  .divide-button .button::before{box-shadow:none;}
  .clan-list-find-panel .clan-list-find-content .input-wrapper .default {color: beige; font-family: macondo;}
  
  /*PODGLAD KLANU*/
  .showcase .header-bar{background: url(https://i.imgur.com/CMWSffi.png); background-size:100% 100%;}
  .showcase .card-content{border-image: url(https://i.imgur.com/VFuwblk.png) 0 9 repeat;}
  .showcase .header-menu .active{background: url(https://i.imgur.com/VL6LP2H.png) no-repeat !important; background-size:100% 100% !important;}
  .showcase .header-menu .card{background: url(https://i.imgur.com/HdwjeEN.png) no-repeat; background-size:100% 100% !important;}
  .clan-recruit-content .clan-recruit-header-0, .clan-other-recruit-content .clan-recruit-header-0, .clan-recruit-content .clan-recruit-header-1, .clan-other-recruit-content .clan-recruit-header-1, .clan-recruit-content .clan-recruit-header-2, .clan-other-recruit-content .clan-recruit-header-2
  {background:url(https://i.imgur.com/CMWSffi.png); background-size:100% 100%;}
  .clan-recruit-content .scroll-wrapper .scroll-pane .background-wrapper .clan-part-0, .clan-other-recruit-content .scroll-wrapper .scroll-pane .background-wrapper .clan-part-0, .clan-recruit-content .scroll-wrapper .scroll-pane .background-wrapper .clan-part-1, .clan-other-recruit-content .scroll-wrapper .scroll-pane .background-wrapper .clan-part-1, .clan-recruit-content .scroll-wrapper .scroll-pane .background-wrapper .clan-part-2, .clan-other-recruit-content .scroll-wrapper .scroll-pane .background-wrapper .clan-part-2
  {color:beige;}
  table.clan-other-members-table.table-content {background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
  td.normal-td.big-height-td{border-right: 1px solid #4f3a58 !important; border-bottom: 1px solid #4f3a58 !important;}
  .member-rank {font-family: 'Macondo';}
  .card-content .clan-diplomacy-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td{border-right: 1px solid #4f3a58; border-bottom: 1px solid #4f3a58;}
  span.clan-level{color:beige; font-family:macondo;}
  .showcase .header .amount-members{color:beige; font-family:macondo;}
  span.recruite-info{color:beige; font-family:macondo;}
  span.val{color:beige; font-family:macondo;}
  
  /*CAPTCHA*/
  .captcha-pre-info{box-shadow: 0 0 0 1px #010101, 0 0 0 2px #4f3a58, 0 0 0 3px #0c0d0d, 2px 2px 3px 3px #0c0d0d66;}
  .captcha-pre-info__toggler{box-shadow: 0 0 0 1px #4f3a58;}
  .pre-captcha, .pre-captcha *{font-family:macondo;}
  
  
  /*DODATKI*/
  .addons-panel .main-header {background:black url(https://i.imgur.com/gR6RpaW.png);}
  .addons-panel .left-column .bottom-left-column-graphics {background: url(https://i.imgur.com/sT9g7XT.png);}
  .addons-panel .right-column .paper-graphics {border-image: url(https://i.imgur.com/LjOzvyq.png) 63 27 27 fill round;}
  .addons-panel .left-column .middle-left-column-graphics{background: url(https://i.imgur.com/VFuwblk.png); background-size:100% 100%;}
  .addons-panel .right-column .middle-right-column-graphics{background: url(https://i.imgur.com/VFuwblk.png) repeat; background-size: 100% 100%;}
  .addons-panel .main-header .addon-list-label{color: beige; font-family: 'Macondo'; font-size: 18px;}
  .addons-panel .right-column .addon-header .img-wrapper .border-blink{box-shadow: 0 0 6px 3px #4200c2;}
  
  
  /*PREMIUM*/
  .premium-panel .premium-graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill;}
  .premium-panel .premium-bottom-panel{background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100%;}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.chest {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.upgrades {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.stamina {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.gold-shop {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.boots {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.helmets {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.gloves {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.armor {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.necklaces {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.rings {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.arrows {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.teleports {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.consumtable {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.pets {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.outfits {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.bags {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.potions {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.ornamentation {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.sales {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.blessing {filter: hue-rotate(173deg) brightness(0.5);}
    .premium-panel .product-kind .premium-item-wrapper .premium-item.for-you {filter: hue-rotate(173deg) brightness(0.5);}
    .chests-window .brown-background{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill;}
    .chests-window .chests-bottom-panel{background:url(https://i.imgur.com/CMWSffi.png); background-size:100% 100%;}
    .chests-window .chests-choice-wrapper .promo-chest{filter:brightness(0.5);}
    .chests-window .chests-choice-wrapper .promo-chest .btn-wrapper .button{filter:brightness(2);}
    .chests-window .chests-bottom-panel .info-wrapper .info-label{color: beige; font-family: macondo; font-size: 15px;}
    .stamina-shop .background-graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill;}
    .stamina-shop .footer .bottom-panel-graphics{background: url(https://i.imgur.com/CMWSffi.png);}
    .info-label {font-family: 'Macondo'; font-size: 15px; color: beige;}
    .stamina-shop .yellow {color: #986fa9; font-family: 'Macondo';}
    .stamina-shop .footer .table-wrapper .sl-label{color: #986fa9; font-family: 'Macondo';}
    .stamina-shop .description{color:beige; font-family:macondo;}
    .gold-shop .scroll-wrapper .scroll-pane .middle-graphics{background: url(https://i.imgur.com/VFuwblk.png); background-size: 100% 100%;}
    .gold-shop .footer .bottom-panel-graphics{background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100%;}
    .one-offer{color:beige;}
    .one-offer .sl-header{color:beige; font-family:macondo;}
    .one-offer .gold-header{color:beige; font-family:macondo;}
    .one-offer{filter:grayscale(0.8);}
  
  
    /*AKTUALNOSCI*/
    .news-panel .middle-graphics{border-image: url(https://i.imgur.com/VFuwblk.png) 10 fill; height: 365px;}
    .news-panel .news-content .crazy-bar{background: url(https://i.imgur.com/VFuwblk.png); height: 385px;}
    .news-panel .news-content .section-header{background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100%; color: beige; font-family: 'Macondo'; font-size: 15px;}
    .border-window.mAlert .content .inner-content, .border-window.mAlert-mobile-layer .content .inner-content{font-family: macondo; font-size: 15px;}
    strong {font-family: macondo;}
    .text>b {font-family: macondo;}
  
    /*KONSOLA*/
    .console-wnd.border-window .content{border-image: url(https://i.imgur.com/VFuwblk.png) 0 10;}
    .console-window .console-bottom-panel-wrapper .console-bottom-panel{border-image: url(https://i.imgur.com/CMWSffi.png) 0 59 fill stretch; background-size: 100% 100%;}
  
    /*POCZTA*/
    .mails-window .mail-column .middle-graphic{border:none !important;}
    .mails-window .content-header{background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100%;}
    .mails-window .bottom-mail-panel .bottom-panel-graphics{background: url(https://i.imgur.com/CMWSffi.png); background-size: 100% 100%;}
    .how-mail-or-char>span {font-family: 'Macondo'; font-size: 14px; color:beige;}
    .mails-window .mail-column .middle-graphic{width:95%; margin-left:7px;}
    .mails-window .new-message .new-message-wrapper .text-area-wrapper textarea{color: beige; font-family: macondo; font-size: 15px !important;}
    .mails-window .new-message .new-message-wrapper .content-header .to .wrapper-mail-to input{color: beige; font-family: macondo;}
    .mails-window .new-message .footer .atachments .foot-item{color: beige; font-family: macondo;}
  
  
    /*AUKCJE*/
    .auction-window .bottom-part .bottom-panel-graphics{border-image: url(https://i.imgur.com/CMWSffi.png) 0 59 fill;}
    .auction-window .middle-graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill repeat;}
    .auction-window .left-column-auction-and-main-column-auction{background: url(https://i.imgur.com/VFuwblk.png) -2px 0;}
    .auction-window .middle-graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill repeat;}
    .auction-window .main-column-auction{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
    .drop-down-menu-section .type-header {background: url(https://i.imgur.com/VL6LP2H.png); background-size: 100% 100%;}
    .auction-window .cards-header-wrapper .cards-header .card{background: url(https://i.imgur.com/HdwjeEN.png) no-repeat; color: #a7a7a7;background-size: 100% 100% !important;}
    .cards-header-wrapper .cards-header .card.active{background:url(https://i.imgur.com/VL6LP2H.png) !important; background-size: 100% 100% !important;}
    .auction-window .main-column-auction .all-auction-section .auction-table .header-auction-td, .auction-window .main-column-auction .all-auction-section .auction-table-header .header-auction-td{border:none; background:none;}
    .auction-window .main-column-auction .auction-search-item{border: 1px solid #4f3a58;}
    .auction-window .main-column-auction .all-auction-section .auction-table tr:nth-of-type(2n+1) .auction-td, .auction-window .main-column-auction .all-auction-section .auction-table-header tr:nth-of-type(2n+1) .auction-td {background: rgb(43 0 75 / 21%);}
    .auction-but .label{color: beige; font-family: 'Macondo';}
    .ni-input input.default{background:none !important;}
    .auction-off-item-panel .middle-graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill; height: 322px;}
    .auction-off-item-panel .auction-off-item-panel-wrapper{margin-left:4px;}
    .auction-off-item-panel .auction-off-item-panel-wrapper .all-field .auction-duration .h-char{right:28px; top:3px; font-family:macondo;}
    .auction-off-item-panel .auction-off-item-panel-wrapper .one-info .second-span {color: beige; font-family: macondo;}
    .auction-off-item-panel .auction-off-item-panel-wrapper .one-info div, .auction-off-item-panel .auction-off-item-panel-wrapper .one-info span{font-family:macondo;}
  
    /*DEPOZYT*/
    .depo .depo-graphic-background{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill repeat;}
    .depo .find-and-manage-money-section .left-part .manage-money-wrapper .manage-money-wrapper-graphic{border-image: url(https://i.imgur.com/CMWSffi.png) 1 1 23 1 fill;}
    .depo .bottom-section .cards-menu .card:not(.disabled).active::before{border-image: url(https://i.imgur.com/VL6LP2H.png) 17 20 fill;}
    .depo .bottom-section .cards-menu .card::before{border-image: url(https://i.imgur.com/HdwjeEN.png) 17 20 fill repeat;}
    .depo .bottom-section .cards-menu .card.active, .depo .bottom-section .cards-menu .card:hover{color: beige; font-size: 15px;}
    .depo .bottom-section .cards-menu .card .label .number{font-family:macondo;}
    .depo .bottom-section .cards-menu .cards-background{filter:brightness(0.3);}
    .depo .filter-section .filter-section-graphic{background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
    .depo .item-section .slots-background {background: url(https://i.imgur.com/k0nEGaF.png);}
    .depo .bottom-section .cards-menu .card .amount{border: 1px solid #4f3a58; color: beige; font-family: macondo;}
    input.default2{filter:brightness(0.5) grayscale(1); font-family:macondo;}
    .depo .find-and-manage-money-section .left-part .manage-money-wrapper .payments-bar-wrapper .price-wrapper .price{color:white;}
    .depo .bottom-bar .available-slots{color:beige; font-family:macondo;}
    .available-slots>span {font-family: macondo; font-size: 15px;}
    .search-wrapper .search{font-family: macondo; font-size: 15px;}
    .depo .find-and-manage-money-section .right-part .money-info{border-image: url(https://i.imgur.com/VFuwblk.png) 1 1 23 11 fill; height: 41px;}
    .depo .find-and-manage-money-section .right-part .gold-amound{color:beige; font-family:macondo;}
    .depo .find-and-manage-money-section .right-part .date-value, .depo .find-and-manage-money-section .right-part .gold-value{font-family: macondo; color: beige; font-size: 13px;}
    .depo .find-and-manage-money-section .right-part .date-available, .depo .find-and-manage-money-section .right-part .gold-amound {font-size: 11px; font-family: macondo; color: beige;}
    .depo .find-and-manage-money-section .left-part .manage-money-wrapper .payments-bar-wrapper .button .label{top:1px;}
  
  
    /*POPUP DEPOZYT*/
  .alerts-layer .scroll-wrapper.menu-wrapper, .console-layer .scroll-wrapper.menu-wrapper, .mAlert-layer .scroll-wrapper.menu-wrapper, .mAlert-mobile-layer .scroll-wrapper.menu-wrapper
  {box-shadow: 0 0 0 1px #0b0b0b inset, 0 0 0 1px #4f3a5800, 0 0 0 1px #17003b; background-color: #0c011c00; backdrop-filter: blur(5px);}
  .alerts-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option, .console-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option, .mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option, .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option
  {background-color: #0c011cbf; color: #fff; border: 1px solid #17003b; backdrop-filter: blur(5px);}
  .alerts-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled), .console-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled), .mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled), .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled)
  {border: 1px solid #38005594; background-color: #6400d14f; backdrop-filter: blur(5px);}
  .text {font-family: macondo;}
  
    /*OPCJE CHATU*/
    .chat-configure-window .middle-graphic{border-image: url(https://i.imgur.com/VFuwblk.png) 0 11 fill repeat;}
    .chat-configure-window .chat-option-header{background: rgb(43 43 43 / 10%);}
    .layer.interface-layer .main-column.left-column .border{background:none;}
  
    /*DIALOGI*/
    .dialogue-window .border-image{box-shadow: 0 0 0 1px #000000, 0 0 0 2px #aa86c5, 0 0 0 3px #000000, 2px 2px 3px 3px #000000, 0 0 10px 10px #37006942; background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%;}
    .dialogue-window .content .npc-dialogue-wrapper .h_content{color:beige; font-family:macondo;}
    .dialogue-window .content .npc-message{font-family:macondo;}
    span.answer-text {font-family: macondo;}
    .dialogue-window .content .answers li.exit, .dialogue-window .content .answers li.line_exit {border-bottom: none; color: #986fa9;}
    .dialogue-window .content .answers li{border-bottom: 1px solid #4f3a58;}
    /*ÅADOWANIE*/
    .layer.loader-layer {
    background: url(https://i.imgur.com/AHJ48sX.jpeg);
    animation: skaluj 10s linear infinite;
  }
  .layer.loader-layer .progress-bar .progress-bar-and-image-wrapper .loader-image {
    margin: auto;
    display: none;
  }
  .layer.loader-layer .progress-bar .progress-bar-and-image-wrapper .inner-wrapper {
    height: 7px;
    width: 272px;
    margin: auto;
    margin-top: 12px;
    background: #17003b;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 9px 3px #4f3a58;
  }
  .layer.loader-layer .progress-bar .progress-bar-and-image-wrapper .inner-wrapper .inner {
    background: #986fa9;
  }
  
  .game-window-positioner .character_wrapper .equipment-wrapper .skill-switch {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 4px;
    left: 74px;
    background: url(https://i.imgur.com/S9cOkCL.png);
    display: none;
  }
  
  
  .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .search-wrapper {
    position: absolute;
    top: -2px;
    left: 2px;
    border-style: solid;
    border-width: 5px 9px 23px 34px;
    border-image: url(https://i.imgur.com/qBXxCIX.png) 5 9 23 34 fill;
    right: 0;
  }
  
  
  .layer.interface-layer .mini-map .mini-map-panel {
    width: 252px;
    height: 40px;
    position: absolute;
    right: 0;
    top: -2px;
    background: url(https://i.imgur.com/x24oYzh.png) 0 -8px;
  }
  
  /*MADDONZ*/
  .mz-window__background{ background: url(https://i.imgur.com/WUNvUMb.png); background-size: 100% 100%; opacity: 0.8 !important;}
  .mz-window{border:none; box-shadow: 0 0 0 1px #010101, 0 0 0 2px #4f3a58, 0 0 0 3px #0c0d0d, 2px 2px 3px 3px #0c0d0d66;}
  .mz-card{box-shadow: inset 0 0 0px 2px #320463 !important; background: hsl(274.15deg 100% 7.55% / 43%); border: none;}
  .mz-switch .mz-control__control:checked {background: linear-gradient(to top, #17003bab, #6d01ff);}
  .mz-switch .mz-control__control:before{box-shadow: 0 0 0px 1.3px #4e2393; background-image: linear-gradient(to top, #170a2bab, #422c60);}
  .mz-switch .mz-control__control{box-shadow: 0 0 1px 2px #4e3065, inset 0 0 10px #000;}
  .mz-switch .mz-control__control:checked:after{background: linear-gradient(0deg, #8f49a5, #451455);}
  .mz-control__control{box-shadow: 0 0 1px 2px #4e3065, inset 0 0 10px #000; background: linear-gradient(0deg, #2c1135, #110a1c);}
  .mz-control__control:hover {box-shadow: 0 0 5px 2px #754891d9, inset 0 0 .8em #000;}
  .mz-tabs__tab-btn--active {border-bottom-color: #7526a63d;}
  .mz-tabs__tab-btn{font-family:macondo; color:#986fa9;}
  .mz-window__title.mz-window__drag{font-family:macondo;}
  .mz-state-button--active {background: radial-gradient(ellipse at center, #8228a7, #101010); box-shadow: 0 0 5px 2px #9928a7;}
  .addon__control--active[data-v-037596b6] {color: #8826a6;}
  .mz-switch .mz-control__label{font-family:macondo;}
  .addon__description[data-v-037596b6]{font-family:macondo;}
  .toast-messages-container .toast{box-shadow: inset 0 0 0px 2px #320463, 0 0 10px 1px #6200ff !important; background: hsl(274.15deg 100% 4.95% / 71%); color: var(--toast-messages-text, #9e60df);}
  
  
  /*GARGONEM*/
  .gargonem-window-title{font-family:macondo;}
  .gargonem-dock{background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d;}
  .gargonem-dock-handle{background-image: linear-gradient(to top, #17003bab, #18072f); box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d;}
  .gargonem-window{box-shadow: inset 0 0 1px 1px #4f3a58, inset 0 0 0 3px #0c0d0d; background: url(https://i.imgur.com/WUNvUMb.png) !important; background-size: 100% 100% !important;}
  .gargonem-tab-switcher{border: 1px solid #4f3a58; box-shadow:none;}
  .gargonem-card{border: 1px solid #4f3a58; box-shadow:none;}
  .gargonem-card *{font-family:macondo;}
  .gargonem-tab-selector.active{font-family:macondo; background: linear-gradient(90deg, #6400a166 50%, #99999900);}
  .gargonem-tab-selector{font-family:macondo; background: linear-gradient(90deg, #4129534d 40%, #46464600);}
  .gargonem-tab-selector:hover {background: linear-gradient(90deg, #5e3d8959 50%, #46464600);}
  .gargonem-input{border: 1px solid #6e4793bf;}
  .gargonem-card:hover {background: #451f6f33;}
  .gargonem-thp-wrapper .gargonem-thp-effect.positive {color: #b780cd; font-family: macondo;}
  .gargonem-thp-wrapper .gargonem-thp-effect.negative {color: #f72b2b; font-family: macondo;}
  .gargonem-checkbox.active {background: url(https://i.imgur.com/ZjeaOPQ.png) no-repeat -502px -94px !important;}
  .gargonem-checkbox{background: url(https://i.imgur.com/wKqR5yj.png) !important; border: 1px solid #4f3a58; border-radius: 5px;}
  .gargonem-change-character-char:hover {transform: translateY(-5px); filter: drop-shadow(0px 0px 4px #a57ce5);}
  .gargonem-button{border: 1px solid #4f3a58;}
  .gargonem-clan-members-online-wrapper{border: 1px solid #4f3a58;}
  .gargonem-clan-members-online-member:nth-child(odd) {background: #24004596;}
  .gargonem-clan-members-online-member{background: #36007199;}
    .gargonem-button:hover {background: #3a007799;}
    .gargonem-otherlist-other.grp .gargonem-otherlist-other-button, .gargonem-otherlist-other.grp .gargonem-otherlist-other-text{background: #971b974f; border-color: #965aa94a;}



  .gargonem-otherlist-other-button, .gargonem-otherlist-other-text{background: #1e00574d; border: 1px solid #8300ff4a; transition: .2s;}
  .gargonem-otherlist-other-button:hover, .gargonem-otherlist-other-text:hover {background: #4a00a942;}
  .gargonem-clan-members-online-form input {border-color: #8e3edb66;}
  .gargonem-clan-members-online-form button {border-color: #8300ff4a;}
  .gargonem-box{border: 1px solid #72588bad;}
  .gargonem-select{border: 1px solid #72588bad;}
  .gargonem-button{background: #21003e99;}
  .gargonem-build-wrapper .gargonem-build-btn.selected {background: #49267499; border-color: #8d07ffad;}
  .gargonem-textarea{border: 1px solid #4a3368;}
  .gargonem-quest-objective.gargonem-doit {color: #6fd96f; font-family: 'Macondo';}

  .interface-layer {
    border-image: url(https://i.imgur.com/ZgLZTRQ.png) 7 repeat !important;
  }
  
  /*INPUT*/
  input.default{border: 1px solid rgb(139 139 139 / 30%);}
                        
  /*NIEAKTYWNOSC*/
  .stasis-incoming-overlay__caption {color: #c200ff; font-family: 'Macondo';}
  
  /*JESTES NIEPRZYTOMNY*/
  .map-overlay.dead-overlay {background-color: rgb(9 0 20 / 90%);}
  .map-overlay.dead-overlay .positioner .inner-text{font-family:macondo;}
  .inner-text>b {font-family: 'Macondo';}
  .map-overlay.dead-overlay .positioner .dazed-time{border: 1px solid #390087; box-shadow: 0 0 11px 0px #6200ff; background-color: rgb(72 0 255 / 30%); font-family:macondo;}
  
  
  
  
  </style>`).appendTo("body");
  }
})();
