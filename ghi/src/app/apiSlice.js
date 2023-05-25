import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
	reducerPath: 'Api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_WANDERWISE_API_HOST,
	}),
	endpoints: (builder) => ({
		createAccount: builder.mutation({
			query: (body) => {
				// const nerd = new FormData();
				// nerd.append('username', username);
				// nerd.append('password', password);
				// nerd.append('full_name', full_name);
				// const body = {};
				// // for (const [key, value] of nerd) {
				// 	body[key] = value;
				// }
				return {
					url: '/api/accounts',
					method: 'POST',
					body,
					credentials: 'include',
				};
			},
			invalidatesTags: ['Account'],
		}),
		login: builder.mutation({
			query: ({ username, password }) => {
				const body = new FormData();
				body.append('username', username);
				body.append('password', password);
				return {
					url: '/token',
					method: 'POST',
					body,
					credentials: 'include',
				};
			},
			invalidatesTags: ['Account'],
		}),
		getToken: builder.query({
			query: () => ({
				url: '/token',
				credentials: 'include',
			}),
			transformResponse: (response) => response?.account || null,
			providesTags: ['Account'],
		}),
		logout: builder.mutation({
			query: () => ({
				url: `/token`,
				method: `DELETE`,
				credentials: 'include',
			}),
			invalidatesTags: ['Account'],
		}),
		deleteAccount: builder.mutation({
			query: ({ account_id }) => ({
				url: `/api/accounts/${account_id}`,
				method: `DELETE`,
				credentials: 'include',
			}),
			invalidatesTags: ['Account'],
		}),
		createRecommendation:builder.mutation({
			query: ({interest, location}) => {
			    const data = new FormData();
				data.append('interest', interest);
				data.append('location', location);
				const body = {};
				for (const [key, value] of data) {
					body[key] = value;
				}
				return {
					url: '/recommendations',
					method: 'POST',
					body,
				};
			},
			transformResponse:(response) => response?.recommendations,
			invalidatesTags: ['Recommendations'],
		}),
		saveRecommendation:builder.mutation({
			query: (body) => {
				return {
					url: '/recommendations/',
					method: 'POST',
					credentials: 'include',
					body,
				};
			},
			invalidatesTags: ['Recommendations'],
		}),
		getRecommendationList: builder.query({
			query: () => ({
				url: '/recommendations/',
				credentials: 'include'
			}),
			providesTags: ['Recommendations'],
		}),
		getRecommendationDetails: builder.query({
			query: ({id}) => ({
				url: `/recommendations/${id}`,
				credentials: 'include'
			}),
			providesTags: ['Recommendations'],
		}),
		deleteRecommendationDetails: builder.mutation({
			query: ({ id }) => ({
				url: `/recommendations/${id}`,
				method: `DELETE`,
				credentials: 'include',
			}),
			invalidatesTags: ['Recommendations'],
		})
	}),
});

export const {
	useCreateAccountMutation,
	useLogoutMutation,
	useLoginMutation,
	useGetTokenQuery,
	useDeleteAccountMutation,
	useCreateRecommendationMutation,
	useSaveRecommendationMutation,
	useGetRecommendationListQuery,
	useGetRecommendationDetailsQuery,
	useDeleteRecommendationDetailsMutation,
} = Api;
