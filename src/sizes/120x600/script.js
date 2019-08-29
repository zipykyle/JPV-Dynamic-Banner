require('@project/styles/global.scss');
require('@120x600/style.scss');

// import { TweenLite, TimelineMax} from 'gsap';





// Broadcast Events shim
// ====================================================================================================
(function() {
	if (typeof window.CustomEvent === 'function') { return false; }
	
	function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}
	
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
})();


var timeline = (function MasterTimeline() {
	
	var tl;
	var tlBG;
	var win = window;
	
	function doClickTag() { window.open(window.clickTag); }
	
	function initTimeline() {
		document.querySelector('#ad .wz-banner').style.display = 'block';
		document.getElementById('ad').addEventListener('click', doClickTag);
		createTimeline();
	}
	
	function createTimeline() {
		
		tl = new TimelineMax({repeat: -1, onStart: updateStart, onComplete: updateComplete, onUpdate: updateStats});
		
		function nest(name){
			let e = document.querySelector(name);
			return e;
		}
		
		
		//Frame Speed Start Duration
		var frSD = 1.0;
		
		//Frame Speed Out Duration
		var frSOD = 0.5;
		
		var frameStart = 0.0;
		
		var bgCoins = nest('.coin-fall');
		
		var frlogo = nest('.fr-logo'),
			fr01 = nest('.fr-f1'),
			fr01Line1 = nest('.fr-f1-lines-l1'),
			fr01Line2 = nest('.fr-f1-lines-l2'),
			fr01Line3 = nest('.fr-f1-lines-l3'),
			fr01Cta = nest('.fr-f1 .cta-btn'),
			
			fr02 = nest('.fr-f2'),
			fr02Cube = nest('.fr-f2-slide-cube'),
			fr02Bg = nest('.fr-f2-bg'),
			fr02Toon = nest('.fr-f2-toon'),
			fr02Line1 = nest('.fr-f2-lines-l1'),
			fr02Line2 = nest('.fr-f2-lines-l2'),
			fr02Line3 = nest('.fr-f2-lines-l3'),
			fr02Cta = nest('.fr-f2 .cta-btn'),
			
			fr03 = nest('.fr-f3'),
			fr03Providers = nest('.fr-f3-providers'),
			fr03Line1 = nest('.fr-f3-lines-l1'),
			fr03Line2 = nest('.fr-f3-lines-l2'),
			fr03Line3 = nest('.fr-f3-lines-l3'),
			fr03Cta = nest('.fr-f3 .cta-btn'),
			
			fr04 = nest('.fr-f4'),
			fr04Line1 = nest('.fr-f4-lines-l1'),
			fr04Line2 = nest('.fr-f4-lines-l2'),
			fr04Line3 = nest('.fr-f4-lines-l3'),
			fr04Cta = nest('.fr-f4 .cta-btn');
		
		
		
		
		function sceneOne(){
			
			
			var tlBG = new TimelineMax({repeat: -1});
			tlBG.to(bgCoins, 25, {
				backgroundPosition: "0 1200px",
				ease: Power0.easeNone,
				autoRound:false,
			});
			
			var maxAnimationTime = 30;
			
			function stopAnimation(){
				tlBG.pause();
			};
			
			TweenLite.delayedCall(maxAnimationTime, stopAnimation);
			
			
			var tl = new TimelineMax();
			tl
				.from(fr01,0.0, {opacity:1,force3D:true}, 0.1)
				.from(frlogo, frSD, {opacity:1, ease:Elastic.easeOut.config(2, 1)}, 0.2)
				.from(fr01Line1, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)},0.2)
				.from(fr01Line2, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)}, 0.3)
				.from(fr01Line3, frSD, {opacity:0, y: 20, ease:Elastic.easeOut.config(2, 1)}, 0.4)
				.from(fr01Cta, frSD, {scale:0.1 ,opacity:0,  ease:Elastic.easeOut.config(1, 0.3)}, 0.5);
			
			return tl;
			
		}
		
		function sceneTwo(){
			var tl = new TimelineMax();
			tl
				.to(fr01Line1, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)},0.0)
				.to(fr01Line2, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)}, 0.1)
				.to(fr01Line3, frSD, {opacity:0, y: 20, ease:Elastic.easeOut.config(2, 1)}, 0.2)
				.from(fr01Cta, frSD, {scale:0.1 ,opacity:0,  ease:Elastic.easeOut.config(1, 0.3)}, 0.2)
				.to(fr01,0.0, {opacity:0,force3D:true}, 0.3)
				.from(fr02,0.0, {opacity:0,force3D:true}, 0.4)
				.from(fr02Cube,frSD, {opacity:1, x:-850, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.5)
				.from(fr02Bg,frSD, {opacity:0}, 0.5)
				.from(fr02Toon,frSD, {opacity:0,scale: 1.5, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.6)
				.from(fr02Cta, frSD, {opacity:1}, 0.6)
				.from(fr02Line1, frSD, {opacity:0, x: -50, ease:Elastic.easeOut.config(2, 1)}, 0.7)
				.from(fr02Line2, frSD, {opacity:0, x: 50, ease:Elastic.easeOut.config(2, 1)}, 0.8)
				.from(fr02Line3, frSD, {opacity:0, ease:Elastic.easeOut.config(2, 1)},0.9);
			
			return tl;
		}
		
		function sceneThree(){
			// Choose from 1200+ games
			var tl = new TimelineMax();
			tl
				.to(fr02Line1, frSD, {opacity:0, ease:Elastic.easeOut.config(2, 1)}, 0.0)
				.to(fr02Line2, frSD, {opacity:0, ease:Elastic.easeOut.config(2, 1)}, 0.1)
				.to(fr02Line3, frSD, {opacity:0, ease:Elastic.easeOut.config(2, 1)},0.2)
				.from(fr03,0.0, {opacity:1}, 0.3)
				.from(fr03Line1, frSD, {opacity:0, scale:0.09, ease:Elastic.easeOut.config(2, 1)}, 0.4)
				.from(fr03Line2, frSD, {opacity:0, scale:0.09, ease:Elastic.easeOut.config(2, 1)}, 0.5)
				.from(fr03Line3, frSD, {opacity:0,scale:0.09, ease:Elastic.easeOut.config(2, 1)},0.6)
				.from(fr03Providers, frSD, {opacity:0},1);
			return tl;
		}
		
		function sceneFour(){
			
			
			var tl = new TimelineMax();
			tl
			// Choose from 1200+ games
				.to(fr03Line1, frSD, {opacity:0, scale:0.09, ease:Elastic.easeOut.config(2, 1)}, 0.0)
				.to(fr03Line2, frSD, {opacity:0, scale:0.09, ease:Elastic.easeOut.config(2, 1)}, 0.1)
				.to(fr03Line3, frSD, {opacity:0,scale:0.09, ease:Elastic.easeOut.config(2, 1)},0.2)
				.to(fr03Providers, frSD, {opacity:0},0.3)
				.to(fr02Cube,frSD, {opacity:0, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.4)
				.to(fr02Bg,frSD, {opacity:0}, 0.4)
				.to(fr02Toon,frSD, {opacity:0,y: 200, scale: 0.8, transformOrigin:"50% 50%", ease:Power4.easeOut}, 0.5)
				
				
				// Join over 1000 000 000
				.from(fr04,1.0, {opacity:0,force3D:true}, 0.5)
				.from(fr04Line1, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)},  0.6)
				.from(fr04Line2, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)},  0.7)
				.from(fr04Line3, frSD, {opacity:0, y: 20, ease:Elastic.easeOut.config(2, 1)},  0.8)
				.from(fr04Cta, frSD, {scale:0.1 ,opacity:0 , ease:Elastic.easeOut.config(1, 0.3)},  0.9)
				
				.to(fr04Line1, frSOD, {opacity:0}, 2.8)
				.to(fr04Line2, frSOD, {opacity:0}, 2.9)
				.to(fr04Line3, frSOD, {opacity:0}, 3);
			return tl;
			
			
		}
		
		tl
			.add(sceneOne(), 'frame1+=0.0')
			.add(sceneTwo(),'frame2+=1.0')
			.add(sceneThree(), 'frame3+=1.5')
			.add(sceneFour(), 'frame4+=2.0');
		
		// DEBUG:
		// tl.play('frame2+=0'); // start playing at label:frame3
		// tl.pause('frame4+=1.8'); // pause the timeline at label:frame3
		// tl.play('frame1=1.0'); // pause the timeline at label:frame3
	}
	
	function updateStart() {
		var start = new CustomEvent('start', {
			'detail': { 'hasStarted': true }
		});
		win.dispatchEvent(start);
	}
	
	function updateComplete() {
		var complete = new CustomEvent('complete', {
			'detail': { 'hasStopped': true }
		});
		win.dispatchEvent(complete);
	}
	
	function updateStats() {
		var statistics = new CustomEvent('stats', {
			'detail': { 'totalTime': tl.totalTime(), 'totalProgress': tl.totalProgress(), 'totalDuration': tl.totalDuration()
			}
		});
		win.dispatchEvent(statistics);
	}
	
	function getTimeline() {
		return tl;
	}
	
	return {
		init: initTimeline,
		get: getTimeline
	};
})();

// Banner Init
// ====================================================================================================
timeline.init();

(function () {
	var tl = timeline.get();
	var maxAnimationTime = 30;
	
	function stopAnimation(){
		tl.pause('frame1+=0.9');
	};
	
	TweenLite.delayedCall(maxAnimationTime, stopAnimation);
	
	tl.add('replayBtnFrame').from('.replay-btn', 0.5, { opacity: 1, ease: Power4.easeInOut }, 'replayBtnFrame');
	
	
	var replayBtn = document.querySelector('.replay-btn');
	
	replayBtn.addEventListener('click', function (e) {
		e.preventDefault();
		tl.restart();
	});
})();
