import React, { useEffect, useState } from 'react'

function useProject() {
 
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`https://alamin-cms.vercel.app/Project`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return {project}

}

export default useProject