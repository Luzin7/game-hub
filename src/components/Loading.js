import React from "react";

import "../style/components/loading.css"

export default function loading() {
  return (
    <div className="loading__body">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
        alt="loading animation"
      />
    </div>
  );
}
