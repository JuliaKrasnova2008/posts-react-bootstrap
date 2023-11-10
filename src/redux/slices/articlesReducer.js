import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      let posts = action.payload;
      state.posts = posts;
    },
    //добавить свой пост
    //id: с помощью Math.max.apply (0, [выводим массив всех id]) находим самое большое число и прибаляем к нему 1
    // addPost: (state, action) => {
    //   const item = {
    //     id:
    //       Math.max.apply(
    //         null,
    //         state.posts.map((item) => item.id)
    //       ) + 1,
    //     title: console.log(action.payload),
    //     body: console.log(action.payload),
    //     isOwn: true,
    //   };
    //   state.posts.push(item);
    // },
    //тоже самое, что и выше
    //id: генерируется автоматически
    addPost: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: (arr, title, body) => {
        // const id = nanoid();
        const id =
          Math.max.apply(
            null,
            arr.map((item) => item.id)
          ) + 1;
        const isOwn = true;
        return { payload: { id, title, body, isOwn } };
      },
    },
    deletePost: (state, action) => {
      let id = action.payload.id; //находим id
      state.posts = state.posts.filter((item) => {
        return item.id !== id; //вернуть элементы, которые не равны id элементa для удаления
      });
    },
    editPost(state, action) {
      const currentItem = state.posts.find((elem) => {
        //создать конст текущего елемента, методом find мы устанавливаем условие для первого попавшегося элемента
        return elem.id === action.payload.id; //вернки элемент, id которого равен id элемента, который выбрали
      });
      currentItem.title = action.payload.title;
      currentItem.body = action.payload.body;
    },
  },
});

export default articlesSlice.reducer; //экспортируем хранилище
export const { setPosts, addPost, deletePost, editPost } =
  articlesSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
