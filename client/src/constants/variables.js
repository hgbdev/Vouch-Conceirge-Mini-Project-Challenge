export const MAX_WIDTH = "350px";
export const END_POINT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.REACT_APP_END_POINT;
