import { UUIDTypes } from "uuid";
import { IClient } from "./IClient";

export enum ProductType {
  SWIMSUIT = "SWIMSUIT",
  PAREU = "PAREU",
  HAT = "HAT",
}

export enum ProductSize {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export enum ProductColor {
  BLUE = "BLUE",
  RED = "RED",
  YELLOW = "YELLOW",
  BLACK = "BLACK",
  GREEN = "GREEN",
  WHITE = "WHITE",
}

export enum ProductState {
  AVAILABLE = "Available",
  OUT_OF_STOCK = "Out of Stock",
}

export enum ProductGender {
  MALE = "Male",
  FEMALE = "Female",
  UNISEX = "Unisex",
}

export interface IProduct {
  id: UUIDTypes;
  type: ProductType; 
  size: ProductSize; 
  color: ProductColor;
  gender: ProductGender; 
  getState: () => ProductState;
  setState: (newState: ProductState) => void;
  assignClient: (client: IClient) => void; 
  displayDetails: () => string;
}
