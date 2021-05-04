////////////// marketing micro frontend ///////
import { mount as marketingMount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  });

  return <div ref={ref} />;
}

export default MarketingApp;
