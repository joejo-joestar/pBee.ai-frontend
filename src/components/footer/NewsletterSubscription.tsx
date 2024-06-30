// import ActionButton from "@c/shared/ActionButton";
// import { SelectedPage } from "../shared/types";

type Props = {};

const NewsletterSubscription = ({}: Props) => (
  <div className="mt-8 flex items-center justify-between">
    <h2 className="mr-4 text-lg font-semibold">Join our newsletter</h2>
    <div className="flex gap-3">
      <input
        className="border-indigo-700/opacity-30 flex-grow rounded-xl border bg-gray-800 p-2 text-white"
        type="email"
        placeholder="Enter your email"
      />
      {/* <ActionButton
        style={"px-5 py-3"}
        page={SelectedPage.Placard}
        setSelectedPage={SelectedPage.Placard}
      >
        Subscribe
      </ActionButton> */}
    </div>
  </div>
);

export default NewsletterSubscription;
