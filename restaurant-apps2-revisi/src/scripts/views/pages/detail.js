import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
 
const Detail = {
  async render() {
    return `
    <h2>Detail Page<h2>
      <div id="restaurant" class="restaurant"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
  },
};
 
export default Detail;