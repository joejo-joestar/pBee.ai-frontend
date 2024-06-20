import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import isEqual from "lodash/isEqual";

import { AppDispatch, RootState } from "store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppShallowSelector: TypedUseSelectorHook<RootState> = (
  selector
) => useAppSelector(selector, isEqual);
