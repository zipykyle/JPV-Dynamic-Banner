require('@project/styles/global.scss');
require('@468x90/style.scss');

import { TweenLite, TimelineMax} from 'gsap';



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
			fr01Bg = nest('.fr-f1-bg'),
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
			fr02Cta = nest('.fr-f2 .cta-btn');




		function sceneOne(){


			var tlBG = new TimelineMax({repeat: -1});
			tlBG.to(bgCoins, 15, {
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
				.from(fr01,0.0, {opacity:0,force3D:true}, 0.0)
				.from(fr01Cta, frSD, {scale: 0.1, opacity:0, ease:Elastic.easeOut.config(1, 0.3)}, 0.0)
				.from(frlogo, frSD, {opacity:0, ease:Elastic.easeOut.config(2, 1)}, 0.0)
				.from(fr01Line1, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)},0.3)
				.from(fr01Line2, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)}, 0.6)
				.from(fr01Line3, frSD, {opacity:0, y: 20, ease:Elastic.easeOut.config(2, 1)}, 1.2)

				.to(fr01Line2, frSD, {scale: 1.2, ease:Elastic.easeOut.config(2, 1)}, 1.6)
				.to(fr01Line2, frSD, {scale: 1, ease:Elastic.easeOut.config(2, 1)}, 1.7)


				.to(fr01Line1, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)},2.8)
				.to(fr01Line2, frSD, {opacity:0, scale: 0.1, ease:Elastic.easeOut.config(2, 1)}, 3)
				.to(fr01Line3, frSD, {opacity:0, y: 20, ease:Elastic.easeOut.config(2, 1)}, 3.2)

				.to(fr01Bg, 5, {opacity:0, ease:Elastic.easeOut.config(2, 1)}, 2.8)
				.to(fr01Cta, 0.0, {scale:0.1 ,opacity:0,  ease:Elastic.easeOut.config(1, 0.3)}, 2.9)
				.to(frlogo, frSD, {opacity:0, ease:Elastic.easeOut.config(2, 1)}, 2.9)
				.from(fr02,frSD, {opacity:0,force3D:true}, 2.9)
				.from(fr02Cube,frSD, {opacity:1, x:-850, transformOrigin:"50% 50%", ease:Power4.easeOut}, 2.9)
				.from(fr02Bg,frSD, {opacity:0}, 3.2)
				.from(fr02Toon,frSD, {opacity:0,scale: 1.5, transformOrigin:"50% 50%", ease:Power4.easeOut},  3.4)
				.from(fr02Cta, frSD, {opacity:1},  3.5)
				.from(fr02Line1, frSD, {opacity:0, x: -50, ease:Elastic.easeOut.config(2, 1)},  3.6)
				.from(fr02Line2, frSD, {opacity:0, x: 50, ease:Elastic.easeOut.config(2, 1)},  3.7)
				.from(fr02Line3, frSD, {opacity:0, x: -50, ease:Elastic.easeOut.config(2, 1)}, 3.8)

				.to(fr02Line3, frSD, {opacity:0, x: -50, ease:Elastic.easeOut.config(2, 1)}, 6.0)
				.to(fr02Line2, frSD, {opacity:0, x: 50, ease:Elastic.easeOut.config(2, 1)},  6.2)
				.to(fr02Line1, frSD, {opacity:0, x: -50, ease:Elastic.easeOut.config(2, 1)},  6.4)
				.to(fr02Cta, frSD, {opacity:1},  6.4)
				.to(fr02Toon,frSD, {opacity:0,scale: 1.5, transformOrigin:"50% 50%", ease:Power4.easeOut},  6.6)
				.to(fr02Bg,frSD, {opacity:0}, 6.6)
				.to(fr02Cube,frSD, {opacity:1, x:-850, transformOrigin:"50% 50%", ease:Power4.easeOut}, 6.6)
				.to(fr02,frSD, {opacity:0,force3D:true}, 6.6);


			return tl;

		}


		tl.add(sceneOne(), 'frame1=0.0');

		// DEBUG:
		// tl.play('frame2+=0');
		// tl.pause('frame1+=1.6');
		// tl.pause('frame1+=4.8');
		// tl.play('frame1=1.0');
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
		tl.pause('frame1+=1.8');
	};

	TweenLite.delayedCall(maxAnimationTime, stopAnimation);

	tl.add('replayBtnFrame').from('.replay-btn', 0.5, { opacity: 1, ease: Power4.easeInOut }, 'replayBtnFrame');


	var replayBtn = document.querySelector('.replay-btn');

	replayBtn.addEventListener('click', function (e) {
		e.preventDefault();
		tl.restart();
	});
})();
