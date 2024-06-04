import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/LoadingSlices";
import FilterFormSlices from "./slices/FilterFormSlices";
import SelectedQuantitySlices from "./slices/SelectedQuantitySlices";


const store = configureStore({
  reducer: {
    loading: counterSlice,
    filterForm: FilterFormSlices,
    SelectedQuantity: SelectedQuantitySlices,
  },
});

export default store;
