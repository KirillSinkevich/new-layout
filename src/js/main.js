$(document).ready(() => {
	$(".single-item").slick({
		arrows:false,
		infinite: true,
		dots: false,
		fade:false,
		adaptiveHeight:false,
		speed: 1000,
		initialSlide: 0
	});
	console.log('ready');
	var iScreenMain = document.querySelector('.l-screen--main');
	var iContPosition = document.querySelector('.l-cont--position');
	var posBlock = document.querySelector('.pos-block');
	var iBtn = document.querySelector('.i-btn');
	var choiceItemsSize = document.querySelectorAll('.l-choice__items-size');
	var iScreenMainHeight = iScreenMain.clientHeight;
	var iScreenMainWidth = iScreenMain.clientWidth;
	var windowHeight = document.body.clientHeight;
	var btnWidth = 260;
	var btnHeight = 90;
	var imgMainHeight = 812;
	var imgMainWidth = 1427;
	var imgChoiceHeidth = 323;
	var imgChoiceWidth = 359;
	
	console.log('windowHeight', windowHeight);
	
	console.log('choiceItemsSize', choiceItemsSize);
	
	function resizeImg(imgSide, screenSide) {
		var ratioImgWidth = imgChoiceWidth / imgSide;
		var ratioImgHeight = imgChoiceHeidth / imgSide;
		console.log('ratioImgWidth', ratioImgWidth);
		console.log('ratioImgHeight', ratioImgHeight);
		console.log('string', (screenSide * ratioImgWidth) + 'px');
		
		choiceItemsSize.forEach((elt) => {
			//console.log('elt', elt);
			elt.style.width = (screenSide * ratioImgWidth) + 'px';
			elt.style.height = (screenSide * ratioImgHeight) + 'px';
		})
		// choiceItemsSize.style.width = (screenSide * ratioImgWidth) + 'px';
		// choiceItemsSize.style.height = (screenSide * ratioImgHeight) + 'px';
	}
	resizeImg(imgMainHeight, windowHeight);
	function resizeBtn(imgSide, screenSide) {
		var ratioBtnWidth = btnWidth / imgSide;
		var ratioBtnHeight = btnHeight / imgSide;
		posBlock.style.width = (screenSide * ratioBtnWidth) + 'px';
		posBlock.style.height = (screenSide * ratioBtnHeight) + 'px';
	}
	//resizeBtn(imgMainHeight, iScreenMainHeight);
	//posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
	
	$(".l-awards__wrap-content").mCustomScrollbar({
		scrollInertia: 500,
		autoHideScrollbar: true,
	});
	$(window).resize(() => {
		var iScreenMainHeight = iScreenMain.clientHeight;
		var iScreenMainWidth = iScreenMain.clientWidth;
		var windowHeight = document.body.clientHeight;
		var wRatio = iScreenMainWidth / iScreenMainHeight;
		//console.log('wRatio', wRatio);
		//posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
		
		resizeImg(imgMainHeight, windowHeight);
		
		
		/*if (wRatio >= 1.71 && wRatio <= 1.79) {
			iContPosition.style.width = iScreenMainWidth + 'px';
			iContPosition.style.height = iScreenMainHeight + 'px';
			resizeBtn(imgHeight, iScreenMainHeight);
		} else if (wRatio < 1.71) {
			iContPosition.style.height = iScreenMainHeight + 'px';
			resizeBtn(imgHeight, iScreenMainHeight);
		} else if (wRatio > 1.79) {
			iBtn.style.marginTop = 0;
			iContPosition.style.width = iScreenMainWidth + 'px';
			posBlock.style.marginTop = 14.1 + '%';
			resizeBtn(imgMainWidth, iScreenMainWidth);
		}*/
	});
});
