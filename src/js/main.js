$(document).ready(() => {
	console.log('ready');
	var iScreenMain = document.querySelector('.l-screen--main');
	var iContPosition = document.querySelector('.l-cont--position');
	var posBlock = document.querySelector('.pos-block');
	var iBtn = document.querySelector('.i-btn');
	var iScreenMainHeight = iScreenMain.clientHeight;
	var iScreenMainWidth = iScreenMain.clientWidth;
	var btnWidth = 260;
	var btnHeight = 90;
	var imgHeight = 812;
	var imgWidth = 1427;
	
	function resizeBtn(imgSide, screenSide) {
		var ratioBtnWidth = btnWidth / imgSide;
		var ratioBtnHeight = btnHeight / imgSide;
		posBlock.style.width = (screenSide * ratioBtnWidth) + 'px';
		posBlock.style.height = (screenSide * ratioBtnHeight) + 'px';
	}
	resizeBtn(imgHeight, iScreenMainHeight);
	posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
	
	$(window).resize(() => {
		var iScreenMainHeight = iScreenMain.clientHeight;
		var iScreenMainWidth = iScreenMain.clientWidth;
		var wRatio = iScreenMainWidth / iScreenMainHeight;
		console.log('wRatio', wRatio);
		posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
		
		if (wRatio >= 1.71 && wRatio <= 1.79) {
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
			resizeBtn(imgWidth, iScreenMainWidth);
		}
	});
});
