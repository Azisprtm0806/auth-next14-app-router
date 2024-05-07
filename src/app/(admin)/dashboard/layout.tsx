import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  product: React.ReactNode;
  analytics: any; // Assuming analytics is of type any, replace it with the appropriate type
}

export default function Layout({ children, product, analytics }: LayoutProps) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5">{product}</div>
      {/* Use the analytics prop wherever needed */}
    </div>
  );
}
