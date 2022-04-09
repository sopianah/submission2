import listResto from '../views/pages/home';
import favoriteResto from '../views/pages/favorite';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': listResto, // default page
  '/home': listResto,
  '/favorite': favoriteResto,
  '/detail/:id': Detail,
};
 
export default routes;