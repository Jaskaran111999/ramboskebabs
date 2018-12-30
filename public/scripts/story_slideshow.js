var slideIndex = 0;

var imagesArray = ["images/store-old.jpg", "images/old_shop_2.jpg", "images/old_shop_3.png", "images/new_shop_1.jpg", "images/new_shop_2.jpg", "images/store_present.jpg"];

var yearArray = ["2014", "2015", "2016", "2017", "2018", "Present"];

function carousel() {
	
	var storySlide = document.getElementById('story-slide-img');
	var yearContainer = document.getElementById('image-year');

	storySlide.src = imagesArray[slideIndex];
	yearContainer.innerHTML = yearArray[slideIndex];

	slideIndex++;


	if (slideIndex >= imagesArray.length) {
		slideIndex = 0;
	}

	setTimeout(carousel, 5000);
}

window.onload = carousel();
