import { Routes, Route } from "react-router-dom";
import HomeLayout from "../layouts/home-layout";
import LazySuspance from "./utils/lazy-suspance";
import FeedLayout from "../layouts/feed-layout";
import ProtectedLayout from "../layouts/protected-layout";

const RouteProvider = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LazySuspance>
            <HomeLayout />
          </LazySuspance>
        }
      />
      <Route path="" element={<ProtectedLayout />}>
        <Route
          path="feed"
          element={
            <LazySuspance>
              <FeedLayout />
            </LazySuspance>
          }
        />
        <Route
          path="feed"
          element={
            <LazySuspance>
              <FeedLayout />
            </LazySuspance>
          }
        />
      </Route>
    </Routes>
  );
};

export default RouteProvider;
