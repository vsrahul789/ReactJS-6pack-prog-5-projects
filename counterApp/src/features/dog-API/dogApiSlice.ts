import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOG_API_KEY =
  "live_1vqMpfYfdCk1RNP17dMYZkDkq5I948henKlY1d59X2dkJu1AcTKRTm6OULiKfGcp";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.thedogapi.com/v1`,
    prepareHeaders(headers) {
      headers.set("x-api-key", DOG_API_KEY);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    query: builder.query<Breed[], number | void>({
      query: (limit = 10) => `/breeds?limit=${limit}`,
    }),
  }),
});

export const { useQueryQuery } = apiSlice;
