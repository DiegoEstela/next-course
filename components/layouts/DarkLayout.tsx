import { FC } from "react";

export const DarkLayout: FC = ({ children }): JSX.Element => {
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
