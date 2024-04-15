import { operations } from '../schemas/toncenter-v3.js';
import type { OpenapiClient } from '../types.js';

type AdjacentTransactionsOptions = operations['get_adjacent_transactions_api_v3_adjacentTransactions_get']['parameters']['query'];

export const adjacentTransactions = (client: OpenapiClient, options: AdjacentTransactionsOptions) => {
  return client.GET('/api/v3/adjacentTransactions', {
    params: {
      query: options,
    }
  });
};
