import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export namespace PostCreateQuest {
  export type Params = any;
  export type Response = string;
}

export namespace UploadImage {
  export type Params = any;
  export type Response = string;
}


const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/v1",
  prepareHeaders: (headers, { getState }) => {
    const token = getState() as RootState;
    headers.set("ngrok-skip-browser-warning", "abcd");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});

export const questApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createQuest: builder.mutation<PostCreateQuest.Response, PostCreateQuest.Params>({
      query: (body) => ({
        url: "/creator/create-quest",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateQuestMutation } = questApi;
export default api;
