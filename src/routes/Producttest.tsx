import Canvas from "@/components/Canvas/Canvas";
import Sidebar from "@/components/sidebarLeft";
import ChatBar from "@/components/sidebarRight";

type Props = {};

const ProductTest = ({}: Props) => {
  return (
    <section
      id="product"
      className="h-full select-none place-content-center gap-16 bg-dark py-10"
    >
      <div className="flex h-full flex-row justify-between">
        <Sidebar />
        <Canvas />
        <ChatBar />
      </div>
    </section>
  );
};

export default ProductTest;
