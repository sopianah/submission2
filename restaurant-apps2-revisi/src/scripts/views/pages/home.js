import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const listResto = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">List Restaurant</h2>
    <div id="restaurants" class="restaurants">

    </div>
  </div>
`;
},

  async afterRender() {
    const restaurant = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
  },
};

export default listResto;
