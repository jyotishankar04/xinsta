import { Suspense } from "react";

const LazySuspance: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense>{children}</Suspense>;
};

export default LazySuspance;
