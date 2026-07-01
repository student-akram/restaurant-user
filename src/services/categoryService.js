import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const categoryCollection = collection(db, "categories");

export const getCategories = async () => {
  const snapshot = await getDocs(categoryCollection);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

export const addCategory = async (categoryData) => {
  return await addDoc(categoryCollection, {
    ...categoryData,
    createdAt: serverTimestamp(),
  });
};

export const updateCategory = async (id, categoryData) => {
  return await updateDoc(doc(db, "categories", id), categoryData);
};

export const deleteCategory = async (id) => {
  return await deleteDoc(doc(db, "categories", id));
};