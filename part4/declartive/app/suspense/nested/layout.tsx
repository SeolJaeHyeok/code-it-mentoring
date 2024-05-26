import { PropsWithChildren } from "react";

export default function ChildLayout({children}: PropsWithChildren<{}>) {
  return <div style={{position: 'fixed', top: '50%', background: "green", width: '500px', height: '500px'}}>{children}</div>
}