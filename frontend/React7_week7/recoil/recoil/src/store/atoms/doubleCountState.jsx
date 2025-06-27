import {selector} from 'recoil';
import { countState } from './countState';

export const doubleCountState = selector({
    key : 'doubleCountState',
    get : ({get}) =>{
        const count = get(countState);
        return count *2;
    }
})