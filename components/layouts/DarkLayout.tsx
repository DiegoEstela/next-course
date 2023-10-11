import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const DarkLayout: FC<MainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
        height: "70%",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h3>Dark-Layout</h3>
      <div> {children}</div>
    </div>
  );
};
