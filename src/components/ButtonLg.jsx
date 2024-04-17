import React from "react";

export default function ButtonLg({ label, color }) {
  return (
    <button
      type="button"
      className={`btn btn-primary border-0  w-100 py-1 btn-lg btn-block font-14 bg-${color}`}
    >
      {label}
    </button>
  );
}
