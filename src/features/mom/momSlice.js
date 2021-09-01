
import {
  createSlice
} from '@reduxjs/toolkit';

import {
  storage_get,
  storage_set
} from '../../utils/session_storage';

const config = storage_get('momconfig');

export const momSlice = createSlice({
  name: 'mom',
  initialState: {
    config: (config && config.features) ?  config : {},
    store: {}
  },
  reducers: {
    config_set: (state, action) => {
      state.config = action.payload;
      storage_set('momconfig', action.payload);
    }
  }
});

export const {
  config_set
} = momSlice.actions;

export const selectConfig = (state) => state.mom.config;
export const selectStore = (state) => state.mom.store;

export default momSlice.reducer;
