/*carousel*/
class Carousel {

/**  
. @param {HTMLElement} element
. @param {Object} options
. @param {Object} options.slidesToScroll Nombre d'element a fair defiles
. @param {Object} options.slidesVisible Nombre d'element visible
*/

constructor (element, options = {}) {

  this.element = element
  this.options = Object.assign({}, {
     slidesToScroll: 1,
     slidesVisible: 1
  }, options)
  
}


}


document.addEventListener('DOMContentLoaded', function() { 
new Carousel(document.querySelector('#carousel'),{
  slidesToScroll: 1,
  slidesVisible: 2  
})

})