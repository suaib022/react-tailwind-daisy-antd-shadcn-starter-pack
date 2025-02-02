import { Button as ShadcnButton } from "./components/ui/button";
import { Button as AntdButton } from "antd";

function App() {
  return (
    <>
      <h1>Hello People !</h1>
      <div className="flex justify-evenly items-center my-12 border border-blue-500 py-4">
        <ShadcnButton variant="destructive">Shadcn</ShadcnButton>
        <AntdButton color="default" variant="solid">
          Antd
        </AntdButton>
        <button className="btn btn-warning">Warning</button>
      </div>
    </>
  );
}

export default App;
