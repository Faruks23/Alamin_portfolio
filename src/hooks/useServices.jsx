import React, { useEffect, useState } from "react";

function useService() {
  const [services , setService] = useState([]);

  useEffect(() => {
    fetch(`https://alamin-cms.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return { services };
}

export default useService;
