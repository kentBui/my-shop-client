import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowSize from "../hooks/useWindowSize";
// Usage
export default function App() {
  const size = useWindowSize();

  return (
    <>
      <div>
        {size.width}px / {size.height}px
      </div>
    </>
  );
}
