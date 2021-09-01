
import {
  createSlice
} from '@reduxjs/toolkit';

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: {
    config: {},
    messages: []
  },
  reducers: {
    config_set: (state, action) => {
      state.config = action.payload;
    },
    messages_set: (state, action) => {
      state.messages = action.payload;
    },
    message_add: (state, action) => {
      state.messages = [
        ...state.messages,
        ...[action.payload]
      ];
    },
    message_update: (state, action) => {
      state.messages[action.payload.i] = action.payload.message;
    }
  }
});

export const {
  config_set,
  message_add,
  message_update,
  messages_set
} = messengerSlice.actions;

export const selectConfig = (state) => state.messenger.config;
export const selectMessages = (state) => state.messenger.messages;
export const selectMessageNewest = (state) => {
  const i = state.messenger.messages.length - 1;
  return {
    i,
    message: state.messenger.messages[i]
  }
};

export default messengerSlice.reducer;
