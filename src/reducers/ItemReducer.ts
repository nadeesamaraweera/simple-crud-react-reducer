import {Item} from "../models/Item";
export const initialState : Item[] = [];
export function ItemReducer(state:Item [], action:{type:string, payload:Item}){
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'UPDATE_ITEM':
            return state.map((item: Item) =>
                item.name === action.payload.name ?
                    {...item, name : action.payload.name, unitPrice : action.payload.unitPrice, qty : action.payload.qty, totalPrice : action.payload.totalPrice }
                    : item
            );
        case 'DELETE_ITEM':
            return state.slice(0,-1);
    }
}