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

const recipeCollection = collection(db, "recipes");

export const getRecipes = async () => {
  const snapshot = await getDocs(recipeCollection);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

export const addRecipe = async (recipeData) => {
  return await addDoc(recipeCollection, {
    ...recipeData,
    createdAt: serverTimestamp(),
  });
};

export const updateRecipe = async (id, recipeData) => {
  return await updateDoc(doc(db, "recipes", id), recipeData);
};

export const deleteRecipe = async (id) => {
  return await deleteDoc(doc(db, "recipes", id));
};
export const getRecipeById = async (id) => {
  const recipes = await getRecipes();

  return recipes.find((recipe) => recipe.id === id);
};