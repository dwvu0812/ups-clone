import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";

const useOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;
    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Lng: value.Lng,
      carrier: value.carrier,
      createAt: value.createAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingItems: value.trackingItems,
    }));
    setOrders(orders);
  }, [data]);

  return {
    loading,
    error,
    orders
  }
};

export default useOrders;
