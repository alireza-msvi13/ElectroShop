import { CartItem } from '@/interfaces/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


interface CartState {
    items: CartItem[];
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
};

const calculateTotalPrice = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.price * item.count, 0);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<CartItem[]>) {
            state.items = action.payload;
            state.totalPrice = calculateTotalPrice(state.items);
        },
        addItem(state, action: PayloadAction<CartItem>) {
            const item = state.items.find(item => item._id === action.payload._id);
            if (item) {
                item.count += action.payload.count;
            } else {
                state.items.push(action.payload);
            }

            state.totalPrice = calculateTotalPrice(state.items);
            localStorage.setItem('cart', JSON.stringify(state.items));
            toast.success("محصول به سبدخرید اضافه شد");
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item._id !== action.payload);
            state.totalPrice = calculateTotalPrice(state.items);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        incrementItemCount(state, action: PayloadAction<string>) {
            const item = state.items.find(item => item._id === action.payload);
            if (item) {
                item.count += 1;
                state.totalPrice = calculateTotalPrice(state.items);
                localStorage.setItem('cart', JSON.stringify(state.items));
            }
        },
        decrementItemCount(state, action: PayloadAction<string>) {
            const item = state.items.find(item => item._id === action.payload);
            if (item && item.count > 1) {
                item.count -= 1;
                localStorage.setItem('cart', JSON.stringify(state.items));
            } else {
                state.items = state.items.filter(item => item._id !== action.payload);
                localStorage.setItem('cart', JSON.stringify(state.items));
            }
            state.totalPrice = calculateTotalPrice(state.items);
        },
    },
});

export const { addItem, removeItem, incrementItemCount, decrementItemCount, setCart } = cartSlice.actions;

export default cartSlice.reducer;
