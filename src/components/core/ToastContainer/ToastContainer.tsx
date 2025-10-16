"use client";

import {
  cssTransition,
  ToastContainer as ToastContainerBase,
} from "react-toastify";

const slide = cssTransition({
  enter: "slide-in-right",
  exit: "fade-out",
});

const ToastContainer = () => (
  <ToastContainerBase
    transition={slide}
    position="top-right"
    hideProgressBar
    closeOnClick
    closeButton={false}
    limit={5}
  />
);

export default ToastContainer;
