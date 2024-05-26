import { PropsWithChildren } from "react";

export default function ChildLayout({children}: PropsWithChildren<{}>) {
  return <div style={{background: "tomato", width: '100%', height: '100%', minWidth: '100px', minHeight: '100px'}}>{children}</div>
}