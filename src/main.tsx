import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import TrackingApp from "./components/TrackingApp";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/tracking/:id">
                        <TrackingApp />
                    </Route>
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
);
