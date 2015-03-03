// self executing function = NAMESPACING!

var dragAndDrop = (function() {
	// protected namespace in hurrr
	var myX = '';
	var myY = '';
	var whichArt = '';

	function resetZ() {
		// look for each DOM element that is an image
		// querySelectorAll returns array of all elements
		var elements = document.querySelectorAll('img');
		for (var i = elements.length - 1; i >=0; i--) {
			elements[i].style.zIndex = 5;
		}
	}

	function moveStart(e) {
		// target the element that was clicked
		whichArt = e.target;
		// any browser that doesn't support offsetX will support layerX
		myX = e.offsetX === undefined ? e.layerX : e.offsetX;
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;

		// zIndex needs to be > 5
		whichArt.style.zIndex = 10;
	}

	function moveDragOver(e) {
		// prevent any image that you drag over from tracking the drag event
		e.preventDefault();
	}

	function moveDrop(e) {
		e.preventDefault();
		whichArt.style.left = e.pageX - myX + 'px';
		whichArt.style.top = e.pageY - myY + 'px';
	}

	document.querySelector('body').addEventListener('dragstart', moveStart, false);
	document.querySelector('body').addEventListener('dragover', moveDragOver, false);
	document.querySelector('body').addEventListener('drop', moveDrop, false);



})();