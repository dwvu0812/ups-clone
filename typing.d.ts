type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: IDBCursor;
  value: Customer;
};

type Order = {
  Address: string;
  City: string;
  Lat: number;
  Lng: number;
  carrier: string;
  createAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: TrackingItems;
};

type OrderList = {
  name: ID;
  value: Order;
};

type Items = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type TrackingItems = {
  customer_id: string;
  items: [Items];
  customer: Customer;
};

type TrackingItemsList = {
  name: ID;
  value: TrackingItems;
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};
