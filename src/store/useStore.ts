import { create, StoreApi, UseBoundStore } from "zustand";
import { createDashboardSlice, DashboardSlice } from "./slices/dashboardSlice";
import { createUserDataSlice, UserDataSlice } from "./slices/userDataSlice";

type Store = DashboardSlice & UserDataSlice;

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }
  return store;
};

const useZustandStoreBase = create<Store>()((...a) => ({
  ...createDashboardSlice(...a),
  ...createUserDataSlice(...a),
}));
const useZustandStore = createSelectors(useZustandStoreBase);

export default useZustandStore;
