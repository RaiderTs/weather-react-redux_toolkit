import { AppDispatch, RootState } from "./../store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Что бы каждый раз не типизировать
export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
