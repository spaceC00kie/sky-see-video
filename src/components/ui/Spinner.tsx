import * as React from "react";

export const Spinner: React.FC = () => (
  <div
    role="status"
    aria-label="loading"
    className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"
  />
)
