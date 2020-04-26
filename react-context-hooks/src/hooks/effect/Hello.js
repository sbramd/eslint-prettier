import React from "react";

export const Hello = () => {
  React.useEffect(() => {
    console.log("Behavior before the component is added to the DOM.");

    return () => {
      console.log(
        "Behavior right before the component is removed from the DOM."
      );
    };
  }, []);

  return <div>hello</div>;
};
