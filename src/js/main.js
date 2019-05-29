$(document).ready(() => {
	console.log('ready');
	var posBlock = document.querySelector('.pos-block');
	var iScreenMain = document.querySelector('.l-screen--main');
	var iBtnPosition = document.querySelector('.i-btn--position');
	
	var iScreenMainHeight = iScreenMain.clientHeight;
	posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
	posBlock.style.width = (iScreenMainHeight * 0.321) + 'px';
	posBlock.style.height = (iScreenMainHeight * 0.1) + 'px';
	
	$(window).resize(() => {
		var windowHeight = document.body.clientHeight;
		var iScreenMainHeight = iScreenMain.clientHeight;
		if (windowHeight <= 810) {
			posBlock.style.marginLeft = (iScreenMainHeight * 0.36) / -2 + 'px';
			posBlock.style.marginTop = (iScreenMainHeight * 0.29) + 'px';
			posBlock.style.width = (iScreenMainHeight * 0.38) + 'px';
			posBlock.style.height = (iScreenMainHeight * 0.13) + 'px';
		} else {
			posBlock.style.marginLeft = (iScreenMainHeight * 0.30) / -2 + 'px';
			posBlock.style.marginTop = (iScreenMainHeight * 0.245) + 'px';
			posBlock.style.width = (iScreenMainHeight * 0.321) + 'px';
			posBlock.style.height = (iScreenMainHeight * 0.1) + 'px';
		}
	});
	
	
});
