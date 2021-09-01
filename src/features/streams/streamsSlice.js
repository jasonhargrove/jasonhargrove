
import { createSlice } from '@reduxjs/toolkit';

export const streamsSlice = createSlice({
  name: 'streams',
  initialState: {
    main: {
      items: [],
      orientation: 'divergent'
    }
  },
  reducers: {
    stream_item_add: (state, action) => {
      const stream_name = action.payload.stream;
      let item = action.payload;
      item = experiment_process_item({
        ...item
      });
      if (state[stream_name].orientation === 'divergent') {
        state[stream_name].items.unshift(item);
      } else {
        state[stream_name].items.push(item);
      }
    },
    stream_items_get: (state) => {},
    stream_items_set: (state, action) => {
      const stream_name = action.payload.stream;
      const items = experiment_process_data(action.payload.items);
      if (state[stream_name].orientation === 'divergent') {
        state[stream_name].items = items.reverse();
      } else {
        state[stream_name].items = items;
      }
    },
    stream_orientation_set: (state, action) => {
      const stream_name = action.payload.stream;
      const o = action.payload.orientation;
      if (o === 'flip') {
        state[stream_name].orientation = (state[stream_name].orientation === 'divergent') ? 'default' : 'divergent';
        const items = state[stream_name].items;
        state[stream_name].items = items.reverse();
      } else {
        state[stream_name].orientation = action.payload.orientation;
      }
    }
  }
});

export const {
  stream_new,
  stream_item_add,
  stream_items_set,
  stream_orientation_set
} = streamsSlice.actions;

export const selectStreams = (state) => state.streams;
export const selectMainOrientation = (state) => state.streams.main.orientation;
export const selectMain = (state) => state.streams.main;

export default streamsSlice.reducer;

function experiment_process_item(item) {
  if (!item.text) {
    return item;
  }
  
  const length = item.text.length;

  if (!item.classNames) {
    item.classNames = [];
  }
  if (length <= 10) {
    item.classNames.push('si-xlarge');
  }
  if (length > 10 && length <= 75) {
    item.classNames.push('si-large');
  }
  if (length > 75 && length <= 135) {
    item.classNames.push('si-medium');
  }
  if (length > 135) {
    item.classNames.push('si-small');
  }

  return item;
}

function experiment_process_data(items) {
  for (const i in items) {
    let item = items[i];
    item = experiment_process_item(item);
  }
  return items;
}
