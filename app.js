(()=>{"use strict";var e={11:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class s{}s.BackgroundHex="#3390e8",s.FontColor="#000000",s.ScoreSaveKey="score",s.MuteSaveKey="isMuted",t.default=s},862:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),s(333);const n=i(s(219)),a=i(s(264)),o=i(s(815)),r=i(s(578)),l=i(s(898)),u={scale:{mode:Phaser.Scale.NONE,autoCenter:Phaser.Scale.CENTER_BOTH,width:window.outerWidth,height:window.innerHeight,parent:"content"},type:Phaser.AUTO,input:{keyboard:!0},transparent:!0,title:"TreberT Games",version:"0.0.2"};class h extends Phaser.Game{constructor(e){l.default.LogSceneMethodEntry("Game","constructor"),super(e),this.scene.add(a.default.Name,a.default),this.scene.add(r.default.Name,r.default),this.scene.add(n.default.Name,n.default),this.scene.add(o.default.Name,o.default),this.scene.start(a.default.Name)}}function d(){setTimeout((()=>{let e=window.innerHeight;e=null!=o.default.prototype.sizeY?o.default.prototype.sizeY<1e3?1e3:o.default.prototype.sizeY:1e3,window._game.scale.resize(window.innerWidth,e)}),100)}t.default=h,window.addEventListener("load",(()=>{window._game=new h(u),d()})),window.addEventListener("resize",(()=>{d()})),window.addEventListener("wheel",(e=>{e.preventDefault(),document.scrollingElement.scrollTop+=.5*e.deltaY}))},268:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(11));class a{constructor(){this.allBackgroundAudio=[]}static Init(e){if(a.audioManagerSingleton)throw new Error("You can only initialize one manager instance");this.audioManagerSingleton=new a,this.audioManagerSingleton.SetMute("1"==localStorage.getItem(n.default.MuteSaveKey)||!1),this.audioManagerSingleton.sceneSoundManager=e.sound}static get Instance(){if(!a.audioManagerSingleton)throw new Error("initialize Instantiator First!");return a.audioManagerSingleton}set Volume(e){this.volume=e}get Volume(){return this.volume}get IsMuted(){return this.isMute}SetVolume(e){this.volume=e,this.sceneSoundManager.volume=e}SetMute(e){if(this.isMute=e,this.isMute)for(var t=0;t<this.allBackgroundAudio.length;t++)this.allBackgroundAudio[t].pause();else for(t=0;t<this.allBackgroundAudio.length;t++)this.allBackgroundAudio[t].resume();localStorage.setItem(n.default.MuteSaveKey,this.isMute?"1":"0")}PlaySFXOneShot(e,t=-1){this.isMute||this.sceneSoundManager.play(e,{volume:-1==t?this.volume:t})}PlaySFX(e,t=-1){let s=this.sceneSoundManager.get(e);s||(s=this.sceneSoundManager.add(e,{mute:this.isMute,volume:-1==t?this.volume:t,loop:!1})),this.isMute||s.play()}PauseBGM(e){let t=this.sceneSoundManager.get(e);t&&t.pause()}PlayBGM(e,t=!1){let s=this.sceneSoundManager.get(e);t&&s.pause(),s||(s=this.sceneSoundManager.add(e,{loop:!0,volume:this.volume}),this.allBackgroundAudio.push(s),s.play()),this.isMute?s.pause():t&&s.play()}}t.default=a},785:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class s{static Init(){if(s.staticManager)throw new Error("You can only initialize one manager instance");this.staticManager=new s}static get Instance(){if(!s.staticManager)throw new Error("initialize Instantiator First!");return s.staticManager}}t.default=s},560:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(961));class a extends n.default{constructor(e,t,s,i,n){super(e,t,s,i),""!=n&&(this.pointerUp=()=>{window.open(n)}),this.name=i,this.setScale(.2).setOrigin(.5)}}t.default=a},466:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(961));class a extends n.default{constructor(e,t,s,i,n){super(e,t,s,i),this.pointerUp=()=>{window.open(n)},this.name=i,this.setScale(.2).setOrigin(.5)}}t.default=a},815:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(898)),a=i(s(466)),o=i(s(785)),r=i(s(560)),l=140;class u extends Phaser.Scene{constructor(){super(...arguments),this.unityButtons=[],this.phaserButtons=[],this.startPosY=0}preload(){}create(){n.default.LogSceneMethodEntry("MainGame","create");let e=this.cameras.main.centerX,t=this.cameras.main.centerY;this.logoImg=new r.default(this,25,25,"tblogo","https://trebertgames.wordpress.com/").setOrigin(0,0),this.logoImg.setScale(.2),this.unityLogoImg=new r.default(this,e,250,"unity_logo","https://unity.com/").setOrigin(.5),this.phaserLogoImg=new r.default(this,e,250,"phaser_logo","https://www.phaser.io/phaser3").setOrigin(.5),this.githubLogoImg=new r.default(this,e,250,"github_logo","https://github.com/javurtez").setOrigin(.5),this.githubLogoImg.setScale(.04),this.myName=this.add.bitmapText(e,2*t-20,"kenney_pixel","Made by Melbert Bolocon - 2023",28,1).setOrigin(.5);var s=o.default.Instance.unity_game_links;for(var i in s)s.hasOwnProperty(i)&&this.unityButtons.push(new a.default(this,e-110,0,s[i].icon_key,s[i].link));for(var i in s=o.default.Instance.phaser_game_links)s.hasOwnProperty(i)&&this.phaserButtons.push(new a.default(this,e-110,0,s[i].icon_key,s[i].link));this.cameras.main.scrollY+=10,this.resize(null),this.scale.on("resize",this.resize.bind(this)),this.input.on("pointerdown",(e=>{console.log("Touch started"),this.startPosY=e.y}),this),this.input.on("pointerup",(e=>{console.log("Touch ended"),this.startPosY=void 0}),this),this.input.on("pointermove",(e=>{if(void 0!==this.startPosY){let t=e.y-this.startPosY;window.scrollBy(0,-t)}}),this),setTimeout((()=>{window._game.scale.resize(window.innerWidth,u.prototype.sizeY)}),100)}resize(e){let t=this.cameras.main.centerX;this.unityLogoImg.x=t,this.phaserLogoImg.x=t;var s=8;window.outerWidth<550?s=2:window.outerWidth<850?s=4:window.outerWidth<1700&&(s=6);let i=0,n=370;var a;(a={})[i]=[];for(let e=0;e<this.unityButtons.length;e++){e%s==0&&0!=e&&(i++,a[i]=[],n+=l);const t=this.unityButtons[e];a[i].push(t),t.y=n}this.sortPosition(a),this.phaserLogoImg.y=n+200,i=0,n=this.phaserLogoImg.y+140,(a={})[i]=[];for(let e=0;e<this.phaserButtons.length;e++){e%s==0&&0!=e&&(i++,a[i]=[],n+=l);const t=this.phaserButtons[e];a[i].push(t),t.y=n}this.sortPosition(a),this.githubLogoImg.x=t,this.githubLogoImg.y=n+l+30,this.myName.x=t,this.myName.y=n+l+60,u.prototype.sizeY=n+l+60}sortPosition(e){let t=this.cameras.main.centerX;var s=t+192,i=t;for(var n in e){var a=e[n];if(null!=a.length&&null!=a)if(a.length%2!=0){var o=(a.length-1)/2,r=a[o];a[o].x=i;for(var l=40,u=0,h=0;h<a.length;h++)u+=a[h].displayWidth;l=(s-u)/4,l=90;for(var d=0,c=(h=o+1,1);h<a.length;h++,c++){var g=1==c?l/2:l;a[h].x=i+r.displayWidth/2+a[h].displayWidth/2+d+g,d+=a[h].displayWidth+(1==c?0:l/2)}for(d=0,h=o-1,c=1;h>=0;h--,c++)g=1==c?l/2:l,a[h].x=i-r.displayWidth/2-a[h].displayWidth/2-d-g,d+=a[h].displayWidth+(1==c?0:l/2)}else{var p=a.length/2-1,f=a.length/2;for(d=0,l=90,u=0,h=0;h<a.length;h++)u+=a[h].displayWidth;for(l=(s-u)/4,l=40,d=0,h=p,c=1;h>=0;h--,c++)g=1==c?l/2:l+l/2,a[h].x=i-a[h].displayWidth/2-d-g,d+=a[h].displayWidth+(1==c?0:l);for(d=0,h=f,c=1;h<a.length;h++,c++)g=1==c?l/2:l+l/2,a[h].x=i+a[h].displayWidth/2+d+g,d+=a[h].displayWidth+(1==c?0:l)}}}}u.Name="MainGame",t.default=u},219:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(898)),a=i(s(815));class o extends Phaser.Scene{preload(){this.load.path="assets/"}create(){n.default.LogSceneMethodEntry("MainMenu","create"),this.scene.start(a.default.Name)}}o.Name="MainMenu",t.default=o},264:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(898)),a=i(s(268)),o=i(s(785)),r=i(s(219));class l extends Phaser.Scene{preload(){this.load.path="assets/",this.load.bitmapFont("kenney_pixel","/Font/kenney_pixel.png","/Font/kenney_pixel.fnt"),this.load.json("unity_game_links","/string/unity_game_links.json"),this.load.json("phaser_game_links","/string/phaser_game_links.json")}create(){n.default.LogSceneMethodEntry("Preloader","create"),this.load.image("tblogo","/UI/tblogo.png"),this.load.image("unity_logo","/UI/unity_logo.png"),this.load.image("phaser_logo","/UI/phaser_logo.png"),this.load.image("github_logo","/UI/github_logo.png"),this.load.audio("click","/Audio/click.wav"),o.default.Init(),o.default.Instance.unity_game_links=this.cache.json.get("unity_game_links"),o.default.Instance.phaser_game_links=this.cache.json.get("phaser_game_links");var e=o.default.Instance.unity_game_links;for(var t in e)e.hasOwnProperty(t)&&this.load.image(e[t].icon_key,e[t].icon_source);for(var t in e=o.default.Instance.phaser_game_links)e.hasOwnProperty(t)&&this.load.image(e[t].icon_key,e[t].icon_source);this.addProgressBar(),this.load.start()}addProgressBar(){const e=this.cameras.main.width,t=(this.cameras.main.height,this.add.graphics()),s=this.add.graphics();s.fillStyle(2236962,.8),s.fillRect(e/4,190,e/2,50);const i=this.add.bitmapText(e/2,160,"kenney_pixel","LOADING...",38,1).setOrigin(.5),n=this.add.bitmapText(e/2,210,"kenney_pixel","LOADING...",26,1).setOrigin(.5),a=this.add.bitmapText(e/2,260,"kenney_pixel","LOADING...",30,1).setOrigin(.5);this.load.on("progress",(s=>{n.setText(parseInt(100*s+"",10)+"%"),t.clear(),t.fillStyle(16777215,1),t.fillRect(e/4+10,200,(e/2-10-10)*s,30)})),this.load.on("fileprogress",(e=>{a.setText("Loading asset: "+e.key)})),this.load.on("complete",(()=>{t.destroy(),s.destroy(),i.destroy(),n.destroy(),a.destroy(),this.nextScene()}))}nextScene(){a.default.Init(this),a.default.Instance.SetVolume(.5),this.scene.start(r.default.Name)}}l.Name="Preloader",t.default=l},578:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(898)),a=i(s(219));class o extends Phaser.Scene{create(){n.default.LogSceneMethodEntry("SplashScreen","create"),this.scene.start(a.default.Name)}}o.Name="SplashScreen",t.default=o},961:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(268));class a extends Phaser.GameObjects.Image{constructor(e,t,s,i){super(e,t,s,i),this.setInteractive(),this.on("pointerdown",(()=>{this.pointerDown&&(this.pointerDown(),this.setTint(16777215))}),this),this.on("pointerup",(()=>{this.pointerUp&&(this.pointerUp(),n.default.Instance.PlaySFX("click",.8))}),this),this.on("pointerover",(()=>{this.pointerOver&&this.pointerOver(),this.setTint(11646136)}),this),this.on("pointerout",(()=>{this.pointerOut&&this.pointerOut(),this.setTint(16777215)}),this),e.add.existing(this)}Open(){this.setActive(!0),this.setVisible(!0)}Close(){this.setActive(!1),this.setVisible(!1)}}t.default=a},898:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{static Log(e){console.log((new Date).toISOString()+" : "+e)}static LogSceneMethodEntry(e,t){this.Log("Entered "+e+" "+t+"()")}}},333:e=>{e.exports=Phaser}},t={};!function s(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,s),a.exports}(862)})();