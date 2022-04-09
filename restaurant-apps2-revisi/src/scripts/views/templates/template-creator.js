import CONFIG from '../../globals/config';
 
const createRestoDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Nama Rerstaurant: </h4>
    <p>${restaurant.name}</p>
    <h4>Alamat: </h4>
    <p>${restaurant.address}</p>
    <h4>Kota: </h4>
    <p>${restaurant.city} minutes</p>
    <h4>Deskripsi: </h4>
    <p>${restaurant.description}</p>
    <h4>Menu Makanan: </h4>
    <p>${restaurant.menus.foods}</p>
    <h4>Menu Minuman: </h4>
    <p>${restaurant.menus.drinks}</p>
    <h4>Reviews: </h4>
    <p>${restaurant.customerReviews}</p>
    </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.overview}</p>
  </div>
`;
 
const createRestoItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
    <img class="restaurant-item__header__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href=${`/detail/${restaurant.id}`}>${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;
 
export { createRestoItemTemplate, createRestoDetailTemplate };