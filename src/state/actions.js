import {MINE_COINS, BUY_COINS, SELECT_TRANSACTION, SELL_COINS} from './types';


export const mineCoins = () => ({type: MINE_COINS});
export const buyCoins = (payload) => ({type: BUY_COINS, payload: payload});
export const selectTransaction = (payload) => ({type: SELECT_TRANSACTION, payload: payload});
export const sellCoins = (payload) => ({type: SELL_COINS, payload: payload});