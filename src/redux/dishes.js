import {DISHES} from '../shared/dishes.js';
import * as ActionTypes from './ActionTypes.js';

export const Dishes = (state = DISHES, action) => {

	switch(action.type) {
		default:
			return state;
	}
}