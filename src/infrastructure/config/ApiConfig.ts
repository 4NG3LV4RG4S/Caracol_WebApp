export const API_CONFIG = {
  BASE_URL: 'https://webservice.caracolillo.net/',
  ENDPOINTS: {
    PRODUCTS: {
      GET_ALL: '/api/Product/GetAllProductsAsync',
      GET_TOP_SUGGESTED: '/api/Product/GetTopSuggestedProducts',
      GET_BY_ID: (id: string) => `/api/Product/${id}`,
    },
    NEWS: {
      GET_ALL: '/api/News/GetAllNews',
      GET_LATEST: '/api/News/GetLatestNews',
      GET_BY_SLUG: (slug: string) => `/api/News/${slug}`,
    }
  },
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

export type ApiEndpoints = typeof API_CONFIG.ENDPOINTS;
