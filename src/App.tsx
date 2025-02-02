import { Button as ShadcnButton } from "./components/ui/button";
import { Button as AntdButton } from "antd";

function App() {
  return (
    <>
      <h1>Hello People !</h1>
      <ShadcnButton>Shadcn</ShadcnButton>
      <AntdButton color="default" variant="solid">
        Antd
      </AntdButton>
    </>
  );
}

export default App;
