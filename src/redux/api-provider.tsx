import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
