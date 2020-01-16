function constructImgUrls() {
  const baseURL = 'https://res.cloudinary.com/ramboskebabs/image/upload';
  const path = 'menu';

  const imgCtn = document.getElementsByClassName("item-img-ctn")[0];
  const imgParams = `w_${imgCtn.clientWidth},h_${imgCtn.clientHeight},f_auto`;

  Array.from(document.querySelectorAll('[data-imgsrc]')).forEach(image => {
    var url = `${baseURL}/${imgParams}/v${image.dataset.vr}/${path}/${image.dataset.imgsrc}`;
    image.dataset.imgsrc = url;
  });
}

window.onload = constructImgUrls;
