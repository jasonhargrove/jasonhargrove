import { configureStore } from '@reduxjs/toolkit';
import messengerReducer from '../features/messenger/messengerSlice';
import momReducer from '../features/mom/momSlice';
import streamsReducer from '../features/streams/streamsSlice';

export const store = configureStore({
  reducer: {
    messenger: messengerReducer,
    mom: momReducer,
    streams: streamsReducer
  },
});
