const _0x5527a1=_0xd242;(function(_0x2d41a1,_0xac5abd){const _0xba1009=_0xd242,_0x27f828=_0x2d41a1();while(!![]){try{const _0x46096b=-parseInt(_0xba1009(0xf4))/0x1*(-parseInt(_0xba1009(0x131))/0x2)+-parseInt(_0xba1009(0x12c))/0x3*(parseInt(_0xba1009(0x10a))/0x4)+parseInt(_0xba1009(0xdd))/0x5*(-parseInt(_0xba1009(0x11a))/0x6)+parseInt(_0xba1009(0xe5))/0x7*(-parseInt(_0xba1009(0x133))/0x8)+parseInt(_0xba1009(0xf0))/0x9*(-parseInt(_0xba1009(0x102))/0xa)+parseInt(_0xba1009(0x134))/0xb+parseInt(_0xba1009(0xd0))/0xc;if(_0x46096b===_0xac5abd)break;else _0x27f828['push'](_0x27f828['shift']());}catch(_0x49d9af){_0x27f828['push'](_0x27f828['shift']());}}}(_0x463f,0x468df));let playerHealth=0x64,enemyHealth=0x64,multiplier=0xa,playerCanAttack=![],gameActive=![],enemyAttackInterval,enemyAttackSoundTimeout,wins=Number(localStorage[_0x5527a1(0xe4)](_0x5527a1(0xee))||0x0),losses=Number(localStorage[_0x5527a1(0xe4)](_0x5527a1(0x118))||0x0),tweetText=encodeURIComponent(_0x5527a1(0xf1)+wins+_0x5527a1(0xd5)+losses+'\x20battles\x20in\x20Cactuar\x20Encounter!\x20$CACTI\x20ftw!'),tweetUrl=encodeURIComponent(_0x5527a1(0xd1)),hashtags=encodeURIComponent('degen,eth,crypto,gaming'),twitterUrl=_0x5527a1(0x105)+tweetText+_0x5527a1(0x104)+tweetUrl+_0x5527a1(0x137)+hashtags,screenWidth=null,playerXP=parseInt(localStorage[_0x5527a1(0xe4)](_0x5527a1(0x124)))||0x0,playerLevel=parseInt(localStorage[_0x5527a1(0xe4)](_0x5527a1(0x10f)))||0x1,cactuarXP=0xa,playerDamageMultiplier=0xa+(playerLevel-0x1)*0.25;const entryPage=document['getElementById'](_0x5527a1(0x10b)),gamePage=document[_0x5527a1(0xec)](_0x5527a1(0xfe)),healthBarPlayerFill=document['getElementById'](_0x5527a1(0x100)),healthBarEnemyFill=document[_0x5527a1(0xec)](_0x5527a1(0x114)),enemyWrapper=document[_0x5527a1(0xec)](_0x5527a1(0x11f)),enemyElement=document[_0x5527a1(0xec)](_0x5527a1(0x116)),entryButton=document[_0x5527a1(0xec)](_0x5527a1(0xd6)),resultTitle=document[_0x5527a1(0xec)]('resultTitle'),loadingTitle=document[_0x5527a1(0xec)](_0x5527a1(0x135)),menuContent=document[_0x5527a1(0xec)](_0x5527a1(0xe2)),shareButton=document['getElementById'](_0x5527a1(0x112)),icon=document[_0x5527a1(0xec)]('icon'),playerLevelContainer=document['getElementById']('playerLevel'),playerXPContainer=document[_0x5527a1(0xec)](_0x5527a1(0x124)),xpForNextLevelContainer=document['getElementById'](_0x5527a1(0xd9));document['addEventListener'](_0x5527a1(0xed),function(_0x1d8df3){const _0x2ab521=_0x5527a1;_0x1d8df3[_0x2ab521(0x122)]();}),document['addEventListener'](_0x5527a1(0x136),_0xfbc5a1=>{const _0x1850ef=_0x5527a1;screenWidth=window[_0x1850ef(0xff)][_0x1850ef(0x123)],enemyElement[_0x1850ef(0xf3)](_0x1850ef(0x120),_0x326c6f=>{attackEnemy(_0x326c6f);}),shareButton[_0x1850ef(0xf3)](_0x1850ef(0x120),()=>{const _0x480781=_0x1850ef;window[_0x480781(0x119)](twitterUrl);});});const images={'wallpaper':new Image(),'star':new Image(),'enemy':new Image(),'yes':new Image(),'no':new Image(),'button':new Image(),'twitter':new Image()},audio={'buttonSound':new Audio(_0x5527a1(0x13e)),'gameMusic':new Audio('music.mp3'),'winMusic':new Audio(_0x5527a1(0x144)),'lossMusic':new Audio(_0x5527a1(0x115)),'cactuarSpawn':new Audio(_0x5527a1(0xfd)),'cactuarDies':new Audio(_0x5527a1(0xfb)),'swordSound':new Audio('sword.mp3'),'criticalHit':new Audio(_0x5527a1(0xd3)),'enemyAttack':new Audio(_0x5527a1(0xd7))};let assetsToLoad=Object[_0x5527a1(0x107)](audio)[_0x5527a1(0xfc)]+Object[_0x5527a1(0x107)](images)[_0x5527a1(0xfc)],assetsLoaded=0x0;function assetLoaded(){const _0x3a75a7=_0x5527a1;assetsLoaded++;const _0x3ab341=document[_0x3a75a7(0xec)](_0x3a75a7(0x128));_0x3ab341[_0x3a75a7(0xd8)][_0x3a75a7(0x123)]=assetsLoaded/assetsToLoad*0x64+'%',assetsLoaded===assetsToLoad&&(loadingTitle['style'][_0x3a75a7(0x111)]=_0x3a75a7(0x12f),entryButton[_0x3a75a7(0xd8)][_0x3a75a7(0x111)]=_0x3a75a7(0x121),setTimeout(()=>{const _0x50d534=_0x3a75a7;entryButton['style'][_0x50d534(0x130)]='1';},0x32));}for(let key in audio){audio[key][_0x5527a1(0x139)]=assetLoaded;}for(let key in images){images[key][_0x5527a1(0xf8)]=assetLoaded,images[key][_0x5527a1(0x10e)]=key+'.png';}function startGame(){const _0x229f9c=_0x5527a1;stopMusic(),document[_0x229f9c(0xec)]('wallpaper')[_0x229f9c(0x10d)][_0x229f9c(0xe9)](_0x229f9c(0x10c)),playSound(audio[_0x229f9c(0x126)]),playSound(audio[_0x229f9c(0x145)]),playSound(audio[_0x229f9c(0xe8)]),entryPage[_0x229f9c(0xd8)][_0x229f9c(0x111)]=_0x229f9c(0x12f),gamePage[_0x229f9c(0xd8)][_0x229f9c(0x111)]=_0x229f9c(0x121),playerHealth=0x64,enemyHealth=0x64,gameActive=!![],playerCanAttack=![],healthBarPlayerFill[_0x229f9c(0xd8)]['width']=_0x229f9c(0xde),healthBarEnemyFill['style'][_0x229f9c(0x123)]='100%',enemyAttackSoundTimeout=setTimeout(()=>playSound(audio[_0x229f9c(0xdf)]),0x9c4),enemyAttackInterval=setInterval(()=>{const _0x3822d5=_0x229f9c;if(!gameActive)return;if(playerHealth>0x0){let _0x213f83=Math['floor'](Math[_0x3822d5(0xf7)]()*0x3)+0x1;playerHealth-=_0x213f83*multiplier,healthBarPlayerFill[_0x3822d5(0xd8)][_0x3822d5(0x123)]=playerHealth+'%',clearTimeout(enemyAttackSoundTimeout),enemyAttackSoundTimeout=setTimeout(()=>playSound(audio[_0x3822d5(0xdf)]),0x9c4),playerCanAttack=!![];}playerHealth<=0x0&&(gameActive=![],setTimeout(()=>gameEnd('You\x20Lose...'),0x64),entryPage[_0x3822d5(0xd8)]['display']=_0x3822d5(0x113),gamePage[_0x3822d5(0xd8)][_0x3822d5(0x111)]=_0x3822d5(0x12f),document['getElementById'](_0x3822d5(0x106))[_0x3822d5(0x10d)][_0x3822d5(0x141)]('desaturate'));},0x1388),setInterval(()=>{const _0x268fbc=_0x229f9c;playerLevelContainer[_0x268fbc(0xf6)]=playerLevel,playerXPContainer[_0x268fbc(0xf6)]=playerXP,xpForNextLevelContainer['textContent']=xpNeededForLevel(playerLevel),screenWidth<=0x190?(icon[_0x268fbc(0xd8)][_0x268fbc(0x111)]=_0x268fbc(0x121),icon[_0x268fbc(0xd8)][_0x268fbc(0xe0)]=playerCanAttack?_0x268fbc(0x13f):_0x268fbc(0x11c),icon[_0x268fbc(0xd8)]['backgroundSize']=_0x268fbc(0x117),icon['style'][_0x268fbc(0xdb)]=_0x268fbc(0x108)):enemyElement[_0x268fbc(0xd8)]['cursor']=playerCanAttack?_0x268fbc(0xef):'url(no.png),\x20auto';},0x64);}function _0xd242(_0x1539b6,_0x37b2af){const _0x463f71=_0x463f();return _0xd242=function(_0xd242e5,_0x414505){_0xd242e5=_0xd242e5-0xd0;let _0x46e7a0=_0x463f71[_0xd242e5];return _0x46e7a0;},_0xd242(_0x1539b6,_0x37b2af);}function attackEnemy(_0x75fc24){const _0x578b47=_0x5527a1;if(playerCanAttack&&enemyHealth>0x0){let _0x2c02ec=Math[_0x578b47(0x12d)](Math['random']()*0x3)+0x1;shakeEnemy(_0x2c02ec),enemyHealth-=_0x2c02ec*playerDamageMultiplier,healthBarEnemyFill[_0x578b47(0xd8)][_0x578b47(0x123)]=enemyHealth+'%';let _0x2caf75=document['createElement']('div');_0x2caf75[_0x578b47(0xf6)]=Math['round'](_0x2c02ec*playerDamageMultiplier),_0x2caf75['style'][_0x578b47(0x13b)]=_0x75fc24[_0x578b47(0x13d)]+'px',_0x2caf75[_0x578b47(0xd8)][_0x578b47(0x12b)]=_0x75fc24[_0x578b47(0xfa)]+'px',_0x2c02ec<=0x2?_0x2caf75[_0x578b47(0x10d)][_0x578b47(0x141)]('damage'):_0x2caf75[_0x578b47(0x10d)][_0x578b47(0x141)](_0x578b47(0x103)),document[_0x578b47(0xf5)][_0x578b47(0xeb)](_0x2caf75),setTimeout(()=>{const _0x52ff00=_0x578b47;document[_0x52ff00(0xf5)][_0x52ff00(0x13c)](_0x2caf75);},0xbb8),playerCanAttack=![];}enemyHealth<=0x0&&(gameActive=![],setTimeout(()=>gameEnd(_0x578b47(0x125)),0x64),entryPage[_0x578b47(0xd8)][_0x578b47(0x111)]=_0x578b47(0x113),gamePage[_0x578b47(0xd8)][_0x578b47(0x111)]=_0x578b47(0x12f));}function gameEnd(_0x3c79f5){const _0x5cd2f1=_0x5527a1;stopMusic(),shareButton['style'][_0x5cd2f1(0x111)]=_0x5cd2f1(0x12f),menuContent['style'][_0x5cd2f1(0x111)]=_0x5cd2f1(0x12f),enemyWrapper[_0x5cd2f1(0x10d)]['remove'](_0x5cd2f1(0xe7)),enemyWrapper['classList'][_0x5cd2f1(0xe9)](_0x5cd2f1(0x143));if(_0x3c79f5==='You\x20Win!')xpGainedText(),playerXP+=cactuarXP,localStorage['setItem']('playerXP',playerXP),checkLevelUp(),wins+=0x1,localStorage[_0x5cd2f1(0x127)]('wins',wins),menuContent[_0x5cd2f1(0xd8)][_0x5cd2f1(0x111)]=_0x5cd2f1(0x121),shareButton[_0x5cd2f1(0xd8)][_0x5cd2f1(0x111)]=_0x5cd2f1(0x121),playSound(audio['cactuarDies']),playSound(audio[_0x5cd2f1(0x129)]);else _0x3c79f5==='You\x20Lose...'&&(losses+=0x1,localStorage[_0x5cd2f1(0x127)](_0x5cd2f1(0x118),losses),playSound(audio[_0x5cd2f1(0xe1)]));updateShareButton(),entryButton['innerText']=_0x5cd2f1(0x101),resultTitle[_0x5cd2f1(0x12e)]=_0x3c79f5,clearInterval(enemyAttackInterval),clearTimeout(enemyAttackSoundTimeout);}function _0x463f(){const _0x5c81cf=['xpForNextLevel','paused','backgroundRepeat','\x20XP','205GqXKDA','100%','enemyAttack','backgroundImage','lossMusic','Menu','Level\x20Up!','getItem','3208093kCluMP','\x20with\x20','shake-enemy','gameMusic','remove','swordSound','appendChild','getElementById','contextmenu','wins','url(yes.png),\x20auto','54gpZgUI','I\x20have\x20won\x20','level-up','addEventListener','378271GAefmJ','body','textContent','random','onload','\x20battles\x20won\x20and\x20','pageY','cactuarDies.mp3','length','cactuar.mp3','gamePage','screen','healthBarPlayerFill','Try\x20Again','194050foZqEi','critical-damage','&url=','https://twitter.com/intent/tweet?text=','wallpaper','keys','no-repeat','pause','1506476KkcqeC','entryPage','desaturate','classList','src','playerLevel','Playback\x20failed:\x20','display','shareButton','flex','healthBarEnemyFill','loss.mp3','enemy','cover','losses','open','38718tDtEwc','play','url(no.png)','\x20battles\x20lost\x20in\x20Cactuar\x20Encounter.\x20$CACTI\x20ftw!','xp-gained','enemy-wrapper','click','block','preventDefault','width','playerXP','You\x20Win!','buttonSound','setItem','progress-bar','winMusic','animationend','top','3rdnFzM','floor','innerText','none','opacity','2PYmDTR','catch','8IzkPBB','5799497fKtrvR','Loading','DOMContentLoaded','&hashtags=','createElement','onloadeddata','currentTime','left','removeChild','pageX','button.mp3','url(yes.png)','div','add','criticalHit','strong-shake-enemy','win.mp3','cactuarSpawn','7192968WrNulN','https://cactuar.fun','@CactuarFun\x20I\x20am\x20currently\x20at\x20level\x20','critical.mp3','playerDamageMultiplier','\x20battles\x20and\x20lost\x20','entryButton','enemyAttack.mp3','style'];_0x463f=function(){return _0x5c81cf;};return _0x463f();}function shakeEnemy(_0x34ad1f){const _0x4f53b1=_0x5527a1;playSound(audio[_0x4f53b1(0xea)]);const _0x47deeb=document['getElementById'](_0x4f53b1(0x11f));_0x34ad1f<=0x2?(_0x47deeb[_0x4f53b1(0x10d)][_0x4f53b1(0x141)](_0x4f53b1(0xe7)),_0x47deeb['addEventListener'](_0x4f53b1(0x12a),()=>{const _0x3f243a=_0x4f53b1;_0x47deeb['classList'][_0x3f243a(0xe9)]('shake-enemy');})):(setTimeout(()=>playSound(audio[_0x4f53b1(0x142)]),0x64),_0x47deeb['classList']['add'](_0x4f53b1(0x143)),_0x47deeb['addEventListener'](_0x4f53b1(0x12a),()=>{const _0x220ea5=_0x4f53b1;_0x47deeb[_0x220ea5(0x10d)][_0x220ea5(0xe9)](_0x220ea5(0x143));}));}function playSound(_0x2f2d32){const _0x339b4d=_0x5527a1;!_0x2f2d32[_0x339b4d(0xda)]&&(_0x2f2d32[_0x339b4d(0x109)](),_0x2f2d32[_0x339b4d(0x13a)]=0x0),_0x2f2d32[_0x339b4d(0x11b)]()[_0x339b4d(0x132)](_0x52663b=>console['error'](_0x339b4d(0x110),_0x52663b));}function stopMusic(){const _0x5d3eb0=_0x5527a1;audio['gameMusic'][_0x5d3eb0(0x109)](),audio[_0x5d3eb0(0x129)][_0x5d3eb0(0x109)](),audio['lossMusic'][_0x5d3eb0(0x109)](),audio['gameMusic'][_0x5d3eb0(0x13a)]=0x0,audio[_0x5d3eb0(0x129)][_0x5d3eb0(0x13a)]=0x0,audio[_0x5d3eb0(0xe1)][_0x5d3eb0(0x13a)]=0x0;}function updateShareButton(){const _0x534c32=_0x5527a1;wins=Number(localStorage['getItem']('wins')),losses=Number(localStorage['getItem'](_0x534c32(0x118))),playerLevel=parseInt(localStorage[_0x534c32(0xe4)](_0x534c32(0x10f)))||0x1,tweetText=encodeURIComponent(_0x534c32(0xd2)+playerLevel+_0x534c32(0xe6)+wins+_0x534c32(0xf9)+losses+_0x534c32(0x11d)),twitterUrl=_0x534c32(0x105)+tweetText+_0x534c32(0x104)+tweetUrl+'&hashtags='+hashtags;}function xpNeededForLevel(_0x34e57b){return 0x32*_0x34e57b*_0x34e57b;}function checkLevelUp(){const _0x459e2a=_0x5527a1;while(playerXP>=xpNeededForLevel(playerLevel)){playerLevel++,playerDamageMultiplier=0xa+(playerLevel-0x1)*0.25,localStorage[_0x459e2a(0x127)]('playerLevel',playerLevel),localStorage['setItem'](_0x459e2a(0xd4),playerDamageMultiplier),levelUpText();}}function levelUpText(){const _0x304d10=_0x5527a1;let _0x268f81=document[_0x304d10(0x138)](_0x304d10(0x140));_0x268f81['textContent']=_0x304d10(0xe3),_0x268f81[_0x304d10(0x10d)][_0x304d10(0x141)](_0x304d10(0xf2)),document[_0x304d10(0xf5)][_0x304d10(0xeb)](_0x268f81),setTimeout(()=>{const _0x2bf8c1=_0x304d10;document['body'][_0x2bf8c1(0x13c)](_0x268f81);},0xbb8);}function xpGainedText(){const _0x5896f6=_0x5527a1;let _0x2ef3d8=document[_0x5896f6(0x138)](_0x5896f6(0x140));_0x2ef3d8[_0x5896f6(0xf6)]='+'+cactuarXP+_0x5896f6(0xdc),_0x2ef3d8[_0x5896f6(0x10d)]['add'](_0x5896f6(0x11e)),document[_0x5896f6(0xf5)][_0x5896f6(0xeb)](_0x2ef3d8),setTimeout(()=>{const _0x2d05b3=_0x5896f6;document[_0x2d05b3(0xf5)][_0x2d05b3(0x13c)](_0x2ef3d8);},0xbb8);}