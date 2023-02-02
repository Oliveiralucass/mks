import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../utils/api'
import { IProduct, IProducts } from '../../utils/interfaces'

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (data, thunkApi) => {
        try{ 
            const response = await api.get<IProducts>('/products?page=1&rows=8&sortBy=name&orderBy=ASC')
            return response.data
        } catch(err: any) {
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

interface PostState {
    loading: boolean,
    error: null | string,
    data: null | IProducts
}

const initialState = {
    loading: false,
    error: null,
    data: null
} as PostState

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action: PayloadAction<IProducts>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload
        })
    }
});

export default productSlice.reducer;

