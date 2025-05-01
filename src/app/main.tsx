import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../store/index.ts";
import { Provider } from "react-redux";
import { SessionVerificator } from '../features/auth/components/SessionVerificator.tsx';
import { eventBus } from '../core/events/EventBus.ts';
import { logout } from '../store/slices/auth.slice.ts';
import { events } from '../core/events/constants.ts';

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

eventBus.on(events.REFRESH_TOKEN_ERROR, () => {
  store.dispatch(logout())
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SessionVerificator />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
