var menuImgPaths = {  
  exItemsImgPaths: {
    rambosSpecial: '../images/img-ex-item-1.jpg'
  }, kebabImgPaths: {
    lKebab: '../images/img-kebab-lamb.jpg',
    cKebab: '../images/img-kebab-chicken.jpg',
    mKebab: '../images/img-kebab-mix.jpg',
    fKebab: '../images/img-kebab-falafel.jpg',
    lKebabMeal: '../images/img-kebab-lamb-meal.jpg',
    cKebabMeal: '../images/img-kebab-chicken-meal.jpg'
  }, snackpackImgPaths: {
    lSnackpack: '../images/img-snackpack-lamb.jpg',
    cSnackpack: '../images/img-snackpack-chicken.jpg',
    mSnackpack: '../images/img-snackpack-mix.jpg',
    fSnackpack: { 
      alt: 'Falafel Snackpack', 
      webp: {
        sizes: '(max-width: 375px) 200px, (max-width: 775px) 550px, (max-width: 935px) 798px, (max-width: 969px) 969px, 969px', 
        //sizes: '(max-width: 969px) 969px, (max-width: 798px) 798px, (max-width: 550px) 550px, (max-width: 200px) 200px', 
        src: '../images/img-snackpack-falafel_dw64bn_c_scale,w_798.webp',
        srcset: '../images/img-snackpack-falafel_dw64bn_c_scale,w_969.webp 969w, ../images/img-snackpack-falafel_dw64bn_c_scale,w_798.webp 798w, ../images/img-snackpack-falafel_dw64bn_c_scale,w_550.webp 550w, ../images/img-snackpack-falafel_dw64bn_c_scale,w_200.webp 200w'
      }, 
      png: {
        sizes: '(max-width: 969px) 969px, (max-width: 800px) 800px, (max-width: 558px) 558px, (max-width: 200px) 200px', 
        src: '../images/img-snackpack-falafel_tmzdndj_c_scale,w_800.png',
        srcset: '../images/img-snackpack-falafel_tmzdndj_c_scale,w_969.png 969w, ../images/img-snackpack-falafel_tmzdndj_c_scale,w_800.png 800w, ../images/img-snackpack-falafel_tmzdndj_c_scale,w_558.png 558w, ../images/img-snackpack-falafel_tmzdndj_c_scale,w_200.png 200w'
      }
    }
  }, ricepackImgPaths: {
    lRicepack: '../images/img-ricepack-lamb.jpg',
    cRicepack: '../images/img-ricepack-chicken.jpg',
    mRicepack: '../images/img-ricepack-mix.jpg',
    fRicepack: '../images/img-ricepack-falafel.jpg'
  }, meatpackImgPaths: {
    lMeatpack: '../images/img-meatpack-lamb.jpg',
    cMeatpack: '../images/img-meatpack-chicken.jpg',
    mMeatpack: '../images/img-meatpack-mix.jpg',
  }, appetizerImgPaths: {
    gozleme: '../images/img-appetizer-gozleme.jpg',
    chips: '../images/img-appetizer-chips.jpg'
  }, drinkImgPaths: {
    pepsi: '../images/img-drink-pepsi.jpg',
    solo: '../images/img-drink-solo.jpg',
    lemonade: '../images/img-drink-lemonade.jpg',
    pepsiMax: '../images/img-drink-pepsiMax.jpg',
    sunkist: '../images/img-drink-sunkist.jpg',
    water: '../images/img-drink-water.jpg',
    mLassi: '../images/img-drink-mLassi.jpg',
    aLassi: '../images/img-drink-aLassi.jpg'
  }, sweetImgPaths: {
    baklava: '../images/img-sweet-baklava.jpg',
    tDelight: '../images/img-sweet-tDelight.jpg'  
  }, addonImgPaths: {
    cheese: '../images/img-addon-cheese.jpg',
    pChillies: '../images/img-addon-pickeledChillies.jpg',
    hommus: '../images/img-addon-hommus.jpg',
    tzatziki: '../images/img-addon-tzatziki.jpg',
    chips: '../images/img-addon-chips.jpg',
    flakes: '../images/img-addon-flakes.jpg',
    extraMeat: '../images/img-addon-extraMeat.jpg',
    extraFalafel: '../images/img-addon-extraFalafel.jpg',
    olives: '../images/img-addon-olives.jpg'
  }
}

module.exports = {menuImgPaths};
