import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

const url = "ad";

export const getPostItems = createAsyncThunk("post/getPostItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
  extraReducers:{
    [getPostItems.pending]:(state)=>{
      state.isLoading = true;
    },
    [getPostItems.fulfilled]: (state,action)=>{
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPostItems.rejected]: (state)=>{
      state.isLoading = false;

    }
  }
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
