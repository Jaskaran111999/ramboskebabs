function openModal(modal) {

	var modalElement = document.getElementById(modal);
	var closeBtn = modalElement.firstElementChild;
	var modalOverlay = document.getElementById(modal).getElementsByClassName("modal-overlay")[0];
	
	//When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if(event.target == modalOverlay) {
			modalElement.style.display == "none";

			//Increse z-index back to normal
			myHeader.style.zIndex = "4";
		}
	}

	//When the user clicks on the item, open the modal
	modalElement.style.display = "block";

	//Decrease z-index of header
	var myHeader = document.getElementById('myHeader');
	myHeader.style.zIndex = "3";

	//When the user clicks on <span> (x/CloseBtn), close the modal
	closeBtn.onclick = function() {
		modalElement.style.display = "none";
	}
}
