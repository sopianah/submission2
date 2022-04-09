import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const favoriteResto = {
    async render() {
      return `
      <div class="content">
      <h2 class="content__heading">Favorite Restaurant</h2>
      <div id="Resto" class="Resto">

      </div>
    </div>
  `;
},
   
    async afterRender() {
      const Resto = await RestaurantDbSource.favoriteRestaurant();
      const restaurantContainer = document.querySelector('#Resto');
        Resto.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
        });
      },
    };

   
  export default favoriteResto;