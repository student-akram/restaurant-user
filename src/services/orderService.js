import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

const orderCollection = collection(db, "orders");

export const placeOrder = async (order) => {
  return await addDoc(orderCollection, {
    ...order,
    createdAt: serverTimestamp(),
  });
};

export const getMyOrders = async (email) => {
  const q = query(
    orderCollection,
    where("email", "==", email)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};