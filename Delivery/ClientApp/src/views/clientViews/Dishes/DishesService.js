import axios from 'axios';
import {serverUrl} from '../../../config';

export default class DishesService{
    static  getAllDishes(filter){
        const url=`${serverUrl}api/client/getdishes`;
        return axios.post(url, filter);
        
    }
    // static addDishToCart(model) {       
    //     return axios.post(`${serverUrl}api/client/addtocart`, model)
//}
}