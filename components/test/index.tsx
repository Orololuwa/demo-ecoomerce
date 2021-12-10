import React from "react";

interface TestProps {
  name: string;
}

const Test: React.FC<TestProps & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { name } = props;
  return <div>{name}</div>;
};

Test.defaultProps = {
  name: "Orololuwa",
};

export default Test;
