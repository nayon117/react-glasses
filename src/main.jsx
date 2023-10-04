import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import "./index.css"; 
import myCreatedRoute from "./Route/Route";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={myCreatedRoute} />
    </AuthProvider>
  </React.StrictMode>
);