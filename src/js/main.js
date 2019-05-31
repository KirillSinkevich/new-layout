$(document).ready(() => {
	console.log('ready');
	var posBlock = document.querySelector('.pos-block');
	var iScreenMain = document.querySelector('.l-screen--main');
	var iContPosition = document.querySelector('.l-cont--position');
	var iBtn = document.querySelector('.i-btn');
	var iScreenMainHeight = iScreenMain.clientHeight;
	
	posBlock.style.width = (iScreenMainHeight * 0.321) + 'px';
	posBlock.style.height = (iScreenMainHeight * 0.1) + 'px';
	
	/*var percent = {
		bigRes: {
			marginLeft: 0.29,
			marginTop: 0.245,
			width: 0.321,
			height: 0.1
		}
		smallRes: {
			marginLeft: 0.36,
			marginTop: 0.29,
			width: 0.38,
			height: 0.13
		}
	}
	function() {
		posBlock.style.marginLeft = (iScreenMainHeight * 0.36) / -2 + 'px';
		posBlock.style.marginTop = (iScreenMainHeight * 0.29) + 'px';
		posBlock.style.width = (iScreenMainHeight * 0.38) + 'px';
		posBlock.style.height = (iScreenMainHeight * 0.13) + 'px';
	}*/
	
	$(window).resize(() => {
		var iScreenMainHeight = iScreenMain.clientHeight;
		var iScreenMainWidth = iScreenMain.clientWidth;
		var wRatio = iScreenMainWidth / iScreenMainHeight;
		console.log('wRatio', wRatio);
		posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
		
		if (wRatio >= 1.71 && wRatio <= 1.79) {
			iContPosition.style.width = iScreenMainWidth + 'px';
			iContPosition.style.height = iScreenMainHeight + 'px';
			posBlock.style.width = (iScreenMainHeight * 0.321) + 'px';
			posBlock.style.height = (iScreenMainHeight * 0.1) + 'px';
		} else if (wRatio < 1.71) {
			iContPosition.style.height = iScreenMainHeight + 'px';
			posBlock.style.width = (iScreenMainHeight * 0.321) + 'px';
			posBlock.style.height = (iScreenMainHeight * 0.11) + 'px';
		} else if (wRatio > 1.79) {
			iBtn.style.marginTop = 0;
			iContPosition.style.width = iScreenMainWidth + 'px';
			posBlock.style.marginTop = 14.1 + '%';
			posBlock.style.width = (iScreenMainWidth * 0.18) + 'px';
			posBlock.style.height = (iScreenMainWidth * 0.06) + 'px';
		}
	});
});
