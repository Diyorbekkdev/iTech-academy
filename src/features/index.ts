import authSliceReducer from './auth-slice';
import headerSliceReducer from './header-slice';
import orderSliceReducer from './order-slice';

export { setIsFixed, toggleIsFixed } from '@/features/header-slice';
export { headerSliceReducer };

export { setUser, authenticate, deauthenticate } from '@/features/auth-slice';
export { authSliceReducer };

export { setOrder } from '@/features/order-slice';
export { orderSliceReducer };
