import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} element={<App />}>
      <Route path="/" element={<Feed />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/chat/" element={<Chatbook />} />
      <Route path="/game/" element={<Game />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
