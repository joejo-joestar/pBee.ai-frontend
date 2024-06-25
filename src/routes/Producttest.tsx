import Sidebar from "@c/sidebarLeft";
import ChatBar from "@c/sidebarRight";

type Props = {};

const Pricing = ({}: Props) => {
  return (
    <section
      id="product"
      className="select-none place-content-center gap-16 bg-dark py-10"
    >
      <Sidebar />
      <ChatBar />
    </section>
  );
};

export default Pricing;
