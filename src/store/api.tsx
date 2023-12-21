import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API= 'http://localhost:3001/items'
export const api= createApi({
    tagTypes:['Items'],
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl:API
    }),
    endpoints:(builder)=>({
        loadItems:builder.query({
            query:(page=1)=>`/?_sort=id&_order=desc&_page=${page}&_limit=5`,
            providesTags:()=>[
                {
                    type:'Items'
                },
                
            ]
        }),
        getTotalItems: builder.query({
            query: () => '/', // ваш запрос для получения общего количества элементов
            providesTags: () => [{ type: 'Items' }],
          }),
        addItems:builder.mutation({
            query:(body)=>({
                url:'/',
                body:body,
                method:'POST'
            }),
            invalidatesTags:()=>[
                {
                    type:'Items'
                }
            ]
        }),
        delItems:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:()=>[
                {type:'Items'}
            ]
        }),
        addToFovorite:builder.mutation({
            query:({id,favorite})=>({
                method:'PATCH',
                url:`/${id}`,
                body:{favorite: !favorite}
            }),
            invalidatesTags:()=>[
                {type:'Items'}
            ]
        }),
        addToBasket:builder.mutation({
            query:({id,basket})=>({
                url:`/${id}`,
                method:"PATCH",
                body:{basket:!basket}
            }),
            invalidatesTags:[
                {type:'Items'}
            ]
        })
        
    })
})
export const {useLoadItemsQuery,useAddItemsMutation,useDelItemsMutation,useGetTotalItemsQuery,useAddToFovoriteMutation,useAddToBasketMutation}=api;