window.__require=function t(e,o,n){function i(r,s){if(!o[r]){if(!e[r]){var l=r.split("/");if(l=l[l.length-1],!e[l]){var a="function"==typeof __require&&__require;if(!s&&a)return a(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+r+"'")}r=l}var p=o[r]={exports:{}};e[r][0].call(p.exports,function(t){return i(e[r][1][t]||t)},p,p.exports,t,e,o,n)}return o[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<n.length;r++)i(n[r]);return i}({AudioManager:[function(t,e,o){"use strict";cc._RF.push(e,"1d36eMsXp5FApst94vcjd2t","AudioManager");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./SpriteSkin"),s=t("./Utils"),l=cc._decorator,a=l.ccclass,p=l.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnMusic=null,e.btnSound=null,e.bgm=null,e.click=null,e.bombExplosion=null,e.balloonExplosion1=null,e.balloonExplosion2=null,e.balloonExplosion3=null,e.balloonGift1=null,e.balloonGift2=null,e.balloonGift3=null,e.endGame=null,e.startGame=null,e.isOnMusic=!0,e.isOnSound=!0,e}var o;return i(e,t),o=e,Object.defineProperty(e,"Instance",{get:function(){if(!this.instance)throw"AudioManager is not initialized!";return this.instance},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){o.instance=this,cc.game.addPersistRootNode(this.node)},e.prototype.start=function(){this.isOnMusic=1===s.default.LoadIntFromCache("isOnMusic",1),this.btnMusic.setSkin(this.isOnMusic?0:1),this.isOnSound=1===s.default.LoadIntFromCache("isOnSound",1),this.btnSound.setSkin(this.isOnSound?0:1),this.playBgm()},e.prototype.onDestroy=function(){o.instance=null},e.prototype.onMucicClick=function(){this.isOnMusic=!this.isOnMusic,this.btnMusic.setSkin(this.isOnMusic?0:1),this.isOnMusic?this.playBgm():cc.audioEngine.stopMusic(),this.playClick(),s.default.SaveIntToCache("isOnMusic",this.isOnMusic?1:0)},e.prototype.onSoundClick=function(){this.isOnSound=!this.isOnSound,this.btnSound.setSkin(this.isOnSound?0:1),this.playClick(),s.default.SaveIntToCache("isOnSound",this.isOnSound?1:0)},e.prototype.playBgm=function(){this.isOnMusic&&cc.audioEngine.playMusic(this.bgm,!0)},e.prototype.playBombExplosion=function(){this.isOnSound&&cc.audioEngine.playEffect(this.bombExplosion,!1)},e.prototype.playBalloonExplosion=function(){if(this.isOnSound){var t=Math.floor(3*Math.random());0===t?cc.audioEngine.playEffect(this.balloonExplosion1,!1):1===t?cc.audioEngine.playEffect(this.balloonExplosion2,!1):cc.audioEngine.playEffect(this.balloonExplosion3,!1)}},e.prototype.playBalloonGift=function(){if(this.isOnSound){var t=Math.floor(3*Math.random());0===t?cc.audioEngine.playEffect(this.balloonGift1,!1):1===t?cc.audioEngine.playEffect(this.balloonGift2,!1):cc.audioEngine.playEffect(this.balloonGift3,!1)}},e.prototype.playEndGame=function(){this.isOnSound&&cc.audioEngine.playEffect(this.endGame,!1)},e.prototype.playStartGame=function(){this.isOnSound&&cc.audioEngine.playEffect(this.startGame,!1)},e.prototype.playClick=function(){this.isOnSound&&cc.audioEngine.playEffect(this.click,!1)},e.instance=null,c([p(r.default)],e.prototype,"btnMusic",void 0),c([p(r.default)],e.prototype,"btnSound",void 0),c([p(cc.AudioClip)],e.prototype,"bgm",void 0),c([p(cc.AudioClip)],e.prototype,"click",void 0),c([p(cc.AudioClip)],e.prototype,"bombExplosion",void 0),c([p(cc.AudioClip)],e.prototype,"balloonExplosion1",void 0),c([p(cc.AudioClip)],e.prototype,"balloonExplosion2",void 0),c([p(cc.AudioClip)],e.prototype,"balloonExplosion3",void 0),c([p(cc.AudioClip)],e.prototype,"balloonGift1",void 0),c([p(cc.AudioClip)],e.prototype,"balloonGift2",void 0),c([p(cc.AudioClip)],e.prototype,"balloonGift3",void 0),c([p(cc.AudioClip)],e.prototype,"endGame",void 0),c([p(cc.AudioClip)],e.prototype,"startGame",void 0),o=c([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./SpriteSkin":"SpriteSkin","./Utils":"Utils"}],BalloonBoom:[function(t,e,o){"use strict";cc._RF.push(e,"9044eELCSVMvaOvfM4G2JYW","BalloonBoom");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./AudioManager"),s=t("./Utils"),l=cc._decorator,a=l.ccclass,p=l.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.balloonNode=null,e.bombExplosion=null,e.timeAnim=1,e.animTween=null,e.isClick=!1,e}return i(e,t),e.prototype.start=function(){this.anim1()},e.prototype.Onclick=function(){var t=this;this.isClick||(this.balloonNode.active=!1,this.bombExplosion.node.active=!0,this.bombExplosion.resetSystem(),r.default.Instance.playBombExplosion(),this.isClick=!0,cc.systemEvent.dispatchEvent(new cc.Event.EventCustom("BalloonBoom",!0)),this.node.getComponent(cc.Button).interactable=!1,this.animTween&&this.animTween.stop(),this.scheduleOnce(function(){t.node.destroy()},.3))},e.prototype.onDestroy=function(){this.animTween&&this.animTween.stop()},e.prototype.anim1=function(){var t=this,e=s.default.getRandomInt(3,5);this.animTween=cc.tween(this.node).to(e,{y:-200}).call(function(){t.node.destroy()}).start()},c([p(cc.Node)],e.prototype,"balloonNode",void 0),c([p(cc.ParticleSystem)],e.prototype,"bombExplosion",void 0),c([p(cc.Integer)],e.prototype,"timeAnim",void 0),c([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./AudioManager":"AudioManager","./Utils":"Utils"}],BalloonGift:[function(t,e,o){"use strict";cc._RF.push(e,"f6990jfyDFJ1JFHSccOBSeK","BalloonGift");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./AudioManager"),s=t("./Utils"),l=cc._decorator,a=l.ccclass,p=l.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.balloonNode=null,e.explosion=null,e.timeAnim=1,e.animTween=null,e.isClick=!1,e}return i(e,t),e.prototype.start=function(){this.anim1()},e.prototype.Onclick=function(){var t=this;this.balloonNode.active=!1,this.explosion.node.active=!0,this.explosion.resetSystem(),r.default.Instance.playBalloonGift(),this.isClick=!0,cc.systemEvent.dispatchEvent(new cc.Event.EventCustom("BalloonGift",!0)),this.node.getComponent(cc.Button).interactable=!1,this.animTween&&this.animTween.stop(),this.scheduleOnce(function(){t.node.destroy()},.3)},e.prototype.onDestroy=function(){this.animTween&&this.animTween.stop()},e.prototype.anim1=function(){var t=this,e=s.default.getRandomInt(80,110),o=s.default.getRandomInt(80,110),n=s.default.getRandomInt(80,110),i=Math.random()<.5?-1:1,c=s.default.getRandomInt(250,350),r=this.node.x,l=this.node.y,a=cc.tween(this.node).to(this.timeAnim,{x:r+e*i}),p=cc.tween(this.node).to(this.timeAnim,{y:l+c}),u=cc.tween(this.node).to(this.timeAnim,{angle:20}),h=cc.tween(this.node).parallel(a,p,u),d=cc.tween(this.node).to(this.timeAnim,{x:r-e*i}),f=cc.tween(this.node).to(this.timeAnim,{y:l+2*c}),y=cc.tween(this.node).to(this.timeAnim,{angle:-20}),m=cc.tween(this.node).parallel(d,f,y),b=cc.tween(this.node).to(this.timeAnim,{x:r+o*i}),v=cc.tween(this.node).to(this.timeAnim,{y:l+3*c}),g=cc.tween(this.node).to(this.timeAnim,{angle:20}),_=cc.tween(this.node).parallel(b,v,g),S=cc.tween(this.node).to(this.timeAnim,{x:r-o*i}),w=cc.tween(this.node).to(this.timeAnim,{y:l+4*c}),O=cc.tween(this.node).to(this.timeAnim,{angle:-20}),k=cc.tween(this.node).parallel(S,w,O),A=cc.tween(this.node).to(this.timeAnim,{x:r+n*i}),P=cc.tween(this.node).to(this.timeAnim,{y:l+5*c}),C=cc.tween(this.node).to(this.timeAnim,{angle:20}),B=cc.tween(this.node).parallel(A,P,C),E=cc.tween(this.node).to(this.timeAnim,{x:r-n*i}),M=cc.tween(this.node).to(this.timeAnim,{y:l+6*c}),x=cc.tween(this.node).to(this.timeAnim,{angle:-20}),j=cc.tween(this.node).parallel(E,M,x),L=cc.tween(this.node).to(this.timeAnim,{x:r+n*i}),R=cc.tween(this.node).to(this.timeAnim,{y:l+7*c}),N=cc.tween(this.node).to(this.timeAnim,{angle:20}),I=cc.tween(this.node).parallel(L,R,N),T=cc.tween(this.node).call(function(){t.node.destroy()});this.animTween=cc.tween(this.node).sequence(h,m,_,k,B,j,I,T).start()},c([p(cc.Node)],e.prototype,"balloonNode",void 0),c([p(cc.ParticleSystem)],e.prototype,"explosion",void 0),c([p(cc.Integer)],e.prototype,"timeAnim",void 0),c([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./AudioManager":"AudioManager","./Utils":"Utils"}],BalloonNormal:[function(t,e,o){"use strict";cc._RF.push(e,"367a7Jv1lhLHrbgYFBboiW/","BalloonNormal");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./AudioManager"),s=t("./SpriteSkin"),l=t("./Utils"),a=cc._decorator,p=a.ccclass,u=a.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.balloonNode=null,e.explosion=null,e.timeAnim=1,e.animTween=null,e.isClick=!1,e}return i(e,t),e.prototype.start=function(){this.anim1(),this.spriteSkin.randomSkin()},e.prototype.Onclick=function(){var t=this;this.balloonNode.active=!1,this.explosion.node.active=!0,this.explosion.resetSystem(),r.default.Instance.playBalloonExplosion(),this.isClick=!0,cc.systemEvent.dispatchEvent(new cc.Event.EventCustom("BalloonNormal",!0)),this.node.getComponent(cc.Button).interactable=!1,this.animTween&&this.animTween.stop(),this.scheduleOnce(function(){t.node.destroy()},.3)},e.prototype.onDestroy=function(){this.animTween&&this.animTween.stop()},e.prototype.anim1=function(){var t=this;this.timeAnim-=l.default.getRandomInt(0,7)/10;var e=l.default.getRandomInt(80,110),o=l.default.getRandomInt(80,110),n=l.default.getRandomInt(80,110),i=Math.random()<.5?-1:1,c=l.default.getRandomInt(250,350),r=this.node.x,s=this.node.y,a=cc.tween(this.node).to(this.timeAnim,{x:r+e*i}),p=cc.tween(this.node).to(this.timeAnim,{y:s+c}),u=cc.tween(this.node).to(this.timeAnim,{angle:20}),h=cc.tween(this.node).parallel(a,p,u),d=cc.tween(this.node).to(this.timeAnim,{x:r-e*i}),f=cc.tween(this.node).to(this.timeAnim,{y:s+2*c}),y=cc.tween(this.node).to(this.timeAnim,{angle:-20}),m=cc.tween(this.node).parallel(d,f,y),b=cc.tween(this.node).to(this.timeAnim,{x:r+o*i}),v=cc.tween(this.node).to(this.timeAnim,{y:s+3*c}),g=cc.tween(this.node).to(this.timeAnim,{angle:20}),_=cc.tween(this.node).parallel(b,v,g),S=cc.tween(this.node).to(this.timeAnim,{x:r-o*i}),w=cc.tween(this.node).to(this.timeAnim,{y:s+4*c}),O=cc.tween(this.node).to(this.timeAnim,{angle:-20}),k=cc.tween(this.node).parallel(S,w,O),A=cc.tween(this.node).to(this.timeAnim,{x:r+n*i}),P=cc.tween(this.node).to(this.timeAnim,{y:s+5*c}),C=cc.tween(this.node).to(this.timeAnim,{angle:20}),B=cc.tween(this.node).parallel(A,P,C),E=cc.tween(this.node).to(this.timeAnim,{x:r-n*i}),M=cc.tween(this.node).to(this.timeAnim,{y:s+6*c}),x=cc.tween(this.node).to(this.timeAnim,{angle:-20}),j=cc.tween(this.node).parallel(E,M,x),L=cc.tween(this.node).to(this.timeAnim,{x:r+n*i}),R=cc.tween(this.node).to(this.timeAnim,{y:s+7*c}),N=cc.tween(this.node).to(this.timeAnim,{angle:20}),I=cc.tween(this.node).parallel(L,R,N),T=cc.tween(this.node).call(function(){t.node.destroy()});this.animTween=cc.tween(this.node).sequence(h,m,_,k,B,j,I,T).start()},c([u(cc.Node)],e.prototype,"balloonNode",void 0),c([u(cc.ParticleSystem)],e.prototype,"explosion",void 0),c([u(cc.Integer)],e.prototype,"timeAnim",void 0),c([u(s.default)],e.prototype,"spriteSkin",void 0),c([p],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./AudioManager":"AudioManager","./SpriteSkin":"SpriteSkin","./Utils":"Utils"}],GameController:[function(t,e,o){"use strict";cc._RF.push(e,"26058M9dQNNnZgwLproWhnv","GameController");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./AudioManager"),s=t("./PopupScript"),l=t("./Utils"),a=cc._decorator,p=a.ccclass,u=a.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.LobbyNode=null,e.EndNode=null,e.BalloonParent=null,e.BalloonNomarPrefab=null,e.BalloonBombPrefab=null,e.BalloonGiftPrefab=null,e.timeLabel=null,e.timeSprite=null,e.scoreLabel=null,e.hightScoreLabel=null,e.endScoreLabel=null,e.popupParent=null,e.popupPrefab=null,e.ticketsLabel=null,e.ticketsBar=null,e.ticketsLabel2=null,e._score=0,e.highScore=0,e.timer=0,e.fullTime=0,e.tickets=0,e._maxTickets=0,e._createBalloon=null,e}return i(e,t),Object.defineProperty(e.prototype,"Score",{get:function(){return this._score},set:function(t){this._score=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"Tickets",{get:function(){return this.tickets},set:function(t){this.tickets=t,this.ticketsLabel.string=""+this.tickets,this.ticketsLabel2.string=""+this.tickets,this.ticketsBar.progress=this.tickets/this._maxTickets},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){this.LobbyNode.active=!0,this.LobbyNode.opacity=255,this.EndNode.active=!1},e.prototype.start=function(){cc.systemEvent.on("BalloonNormal",this.handleBalloonNormal,this),cc.systemEvent.on("BalloonGift",this.handleBalloonGift,this),cc.systemEvent.on("BalloonBoom",this.handleBalloonBoom,this),this.highScore=l.default.LoadIntFromCache("HighScore"),this.hightScoreLabel.string=""+this.highScore},e.prototype.update=function(){0!==this.timer?(this.timeLabel.string=""+Math.ceil(this.timer),this.timeSprite.fillRange=this.timer/this.fullTime):this.timeSprite.fillRange=0},e.prototype.OnPlayClick=function(){var t=this;r.default.Instance.playClick(),this.tickets>0?(this.Tickets-=1,cc.tween(this.LobbyNode).to(.5,{opacity:0}).call(function(){t.LobbyNode.active=!1,t.startGame()}).start()):this.ShowPopup("Opps!","There are no tickets\n left for today! ","Buy Now",function(){t.Tickets+=5,t._maxTickets<t.Tickets&&(t._maxTickets=t.Tickets),t.ticketsBar.progress=t.tickets/t._maxTickets})},e.prototype.OnRetryClick=function(){var t=this;r.default.Instance.playClick(),this.tickets>0?(this.Tickets-=1,cc.tween(this.LobbyNode).to(.5,{opacity:0}).call(function(){t.EndNode.active=!1,t.startGame()}).start()):this.ShowPopup("Opps!","There are no tickets\n left for today! ","Buy Now",function(){t.Tickets+=5,t._maxTickets<t.Tickets&&(t._maxTickets=t.Tickets),t.ticketsBar.progress=t.tickets/t._maxTickets})},e.prototype.OnHomeClick=function(){var t=this;r.default.Instance.playClick(),cc.tween(this.EndNode).to(.5,{opacity:0}).call(function(){t.EndNode.active=!1,t.LobbyNode.active=!0,t.LobbyNode.opacity=255}).start()},e.prototype.onShowPopupClick=function(){this.ShowPopup("Test","Test","OK",function(){console.log("OK")})},e.prototype.ShowPopup=function(t,e,o,n){void 0===n&&(n=null);var i=cc.instantiate(this.popupPrefab);i.parent=this.popupParent,i.getComponent(s.default).setupPopup(t,e,o,n)},e.prototype.startGame=function(){var t=this;r.default.Instance.playStartGame(),this.EndNode.active=!1,this.Score=0,this.scoreLabel.string=""+this.Score,this._createBalloon=this.schedule(function(){return t.createBalloons(2)},.2),this.setTime(30)},e.prototype.endGame=function(){this.unschedule(this._createBalloon),this.Score>this.highScore&&(this.highScore=this.Score,l.default.SaveDataToCache("HighScore",this.highScore),this.hightScoreLabel.string=""+this.highScore),this.BalloonParent.destroyAllChildren(),this.showEndGame(),this.Score=0},e.prototype.showEndGame=function(){r.default.Instance.playEndGame(),this.endScoreLabel.string=""+this.Score,this.EndNode.active=!0,this.EndNode.opacity=0,cc.tween(this.EndNode).to(.5,{opacity:255}).start()},e.prototype.createBalloons=function(t){for(var e=0;e<t;e++)this.createBalloon()},e.prototype.createBalloon=function(){var t=Math.random(),e=!1,o=this.BalloonNomarPrefab;t<.05?(o=this.BalloonBombPrefab,e=!0):t<.3&&(o=this.BalloonGiftPrefab);var n=cc.instantiate(o);n.parent=this.BalloonParent;var i=-100;e&&(i=this.BalloonParent.height+100,n.zIndex=1);var c=l.default.getRandomInt(n.width/2,this.BalloonParent.width-n.width/2);n.setPosition(c,i)},e.prototype.setTime=function(t){var e=this;this.timer=t,this.fullTime=t,this.schedule(function(){e.timer-=1,e.timer<=0&&(e.timer=0,e.unscheduleAllCallbacks(),e.endGame())},1)},e.prototype.handleBalloonNormal=function(){this.Score+=1,this.scoreLabel.string=""+this.Score},e.prototype.handleBalloonGift=function(){this.Score+=2,this.scoreLabel.string=""+this.Score},e.prototype.handleBalloonBoom=function(){this.Score=0,this.scoreLabel.string=""+this.Score},c([u(cc.Node)],e.prototype,"LobbyNode",void 0),c([u(cc.Node)],e.prototype,"EndNode",void 0),c([u(cc.Node)],e.prototype,"BalloonParent",void 0),c([u(cc.Prefab)],e.prototype,"BalloonNomarPrefab",void 0),c([u(cc.Prefab)],e.prototype,"BalloonBombPrefab",void 0),c([u(cc.Prefab)],e.prototype,"BalloonGiftPrefab",void 0),c([u(cc.Label)],e.prototype,"timeLabel",void 0),c([u(cc.Sprite)],e.prototype,"timeSprite",void 0),c([u(cc.Label)],e.prototype,"scoreLabel",void 0),c([u(cc.Label)],e.prototype,"hightScoreLabel",void 0),c([u(cc.Label)],e.prototype,"endScoreLabel",void 0),c([u(cc.Node)],e.prototype,"popupParent",void 0),c([u(cc.Prefab)],e.prototype,"popupPrefab",void 0),c([u(cc.Label)],e.prototype,"ticketsLabel",void 0),c([u(cc.ProgressBar)],e.prototype,"ticketsBar",void 0),c([u(cc.Label)],e.prototype,"ticketsLabel2",void 0),c([p],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./AudioManager":"AudioManager","./PopupScript":"PopupScript","./Utils":"Utils"}],PopupScript:[function(t,e,o){"use strict";cc._RF.push(e,"0ce4f/gXuNNeaq38ZAVpqC3","PopupScript");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,l=r.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.titleLabel=null,e.contentLabel=null,e.buttonLabel=null,e.callback=null,e}return i(e,t),e.prototype.setupPopup=function(t,e,o,n){this.titleLabel.string=t,this.contentLabel.string=e,this.buttonLabel.string=o,this.callback=n},e.prototype.onClick=function(){this.callback&&this.callback(),this.node.destroy()},e.prototype.onClose=function(){this.node.destroy()},c([l(cc.Label)],e.prototype,"titleLabel",void 0),c([l(cc.Label)],e.prototype,"contentLabel",void 0),c([l(cc.Label)],e.prototype,"buttonLabel",void 0),c([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],SpriteSkin:[function(t,e,o){"use strict";cc._RF.push(e,"e60dbW707xPQoANqLjSE2aX","SpriteSkin");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,l=r.property,a=r.menu,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.item=null,e.isSprite=!1,e.spriteSkin=[],e.spriteDefaultSkin=null,e.isColor=!1,e.colorSkin=[],e.idSkin=0,e}return i(e,t),e.prototype.onLoad=function(){!this.item&&this.getComponent(cc.Sprite)&&(this.item=this.getComponent(cc.Sprite))},e.prototype.setSkin=function(t){if(t<0||t>this.countSkin())return cc.warn("wrong id skin "),void(this.spriteDefaultSkin&&(this.item.spriteFrame=this.spriteDefaultSkin));this.idSkin=t,this.isSprite&&this.item&&(this.spriteSkin[t]?this.item.spriteFrame=this.spriteSkin[t]:this.spriteDefaultSkin&&(this.item.spriteFrame=this.spriteDefaultSkin)),this.isColor&&this.item&&(this.item.node.color=this.colorSkin[t])},e.prototype.countSkin=function(){return this.isSprite&&this.item?this.spriteSkin.length:this.isColor&&this.item?this.colorSkin.length:void 0},e.prototype.randomSkin=function(){var t=this.getRandomInt(0,this.countSkin()-1);this.setSkin(t)},e.prototype.getRandomInt=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},c([l(cc.Sprite)],e.prototype,"item",void 0),c([l],e.prototype,"isSprite",void 0),c([l(cc.SpriteFrame)],e.prototype,"spriteSkin",void 0),c([l(cc.SpriteFrame)],e.prototype,"spriteDefaultSkin",void 0),c([l],e.prototype,"isColor",void 0),c([l(cc.Color)],e.prototype,"colorSkin",void 0),c([s,a("Joy/Components/Skin/SpriteSkin")],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],Utils:[function(t,e,o){"use strict";cc._RF.push(e,"1ee31mIValDwIZxpAnMulmZ","Utils");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator.ccclass,s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.getRandomInt=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},e.isIncognitoMode=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!1}catch(t){return!0}},e.LoadIntFromCache=function(t,e){void 0===e&&(e=0);var o=cc.sys.localStorage.getItem(t);return null==o?e:parseInt(o)},e.LoadDataFromCache=function(t){var e=cc.sys.localStorage.getItem(t);return this.isIncognitoMode()?null:e},e.RemoveDataFromCache=function(t){if(this.isIncognitoMode())return null;cc.sys.localStorage.removeItem(t)},e.SaveDataToCache=function(t,e){this.isIncognitoMode()||cc.sys.localStorage.setItem(t,JSON.stringify(e))},e.SaveIntToCache=function(t,e){this.isIncognitoMode()||cc.sys.localStorage.setItem(t,e)},e.ClearAllCache=function(){this.isIncognitoMode()||cc.sys.localStorage.clear()},c([r],e)}(cc.Component);o.default=s,cc._RF.pop()},{}]},{},["AudioManager","BalloonBoom","BalloonGift","BalloonNormal","GameController","PopupScript","SpriteSkin","Utils"]);