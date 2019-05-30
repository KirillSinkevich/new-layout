$(document).ready(() => {
	console.log('ready');
	var posBlock = document.querySelector('.pos-block');
	var iScreenMain = document.querySelector('.l-screen--main');
	var iContPosition = document.querySelector('.l-cont--position');
	var iBtn = document.querySelector('.i-btn');
	var iScreenMainHeight = iScreenMain.clientHeight;
	
	//posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
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
		var windowHeight = document.body.clientHeight;
		var iScreenMainHeight = iScreenMain.clientHeight;
		var iScreenMainWidth = iScreenMain.clientWidth;
		var wRatio = iScreenMainWidth / iScreenMainHeight;
		var hRatio = iScreenMainHeight / iScreenMainWidth;
		console.log('wRatio', wRatio);
		//posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
		posBlock.style.width = (iScreenMainHeight * 0.321) + 'px';
		posBlock.style.height = (iScreenMainHeight * 0.1) + 'px';
		
		if (wRatio >= 1.71 && wRatio <= 1.79) {
			iContPosition.style.width = iScreenMainWidth + 'px';
			iContPosition.style.height = iScreenMainHeight + 'px';
		} else if (wRatio < 1.71) {
			//iContPosition.style.width = iScreenMainWidth + 'px';
			iContPosition.style.height = iScreenMainHeight + 'px';
		} else if (wRatio > 1.79) {
			iContPosition.style.width = iScreenMainWidth + 'px';
			iBtn.style.marginTop = 0;
			posBlock.style.marginTop = 15 + '%';
			//iContPosition.style.height = iScreenMainHeight + 'px';
		}

		/*if (windowHeight <= 810) {
			//posBlock.style.marginLeft = (iScreenMainHeight * 0.36) / -2 + 'px';
			posBlock.style.marginTop = (iScreenMainHeight * 0.29) + 'px';
			posBlock.style.width = (iScreenMainHeight * 0.38) + 'px';
			posBlock.style.height = (iScreenMainHeight * 0.13) + 'px';
		} else {
			//posBlock.style.marginLeft = (iScreenMainHeight * 0.29) / -2 + 'px';
			posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
			posBlock.style.width = (iScreenMainHeight * 0.321) + 'px';
			posBlock.style.height = (iScreenMainHeight * 0.1) + 'px';
		}*/
		
	});
	
	
});
