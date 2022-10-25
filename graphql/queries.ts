import { gql, useQuery } from '@apollo/client';

export const GET_ORDERS = gql`
  query MyQuery   {
    getOrders {
      name
      value {
        Address
        City
        Lat
        Lng
        carrier
        createAt
        shippingCost
        trackingId
        trackingItems {
          customer {
            email
            name
          }
          customer_id
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;

export const GET_CUSTOMERS = gql`
  query MyQuery   {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;