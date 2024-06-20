import ActionButton from "@c/shared/ActionButton";
import { SelectedPage } from "@c/shared/types";

type Props = {};

const NewsletterSubscription = () => (
  <div className="mt-8 flex items-center justify-between">
    <h2 className="font-semibold text-lg mr-4">Join our newsletter</h2>
    <div className="flex gap-3">
      <input
        className="p-2 rounded-xl border border-indigo-700/opacity-30 bg-gray-800 text-white flex-grow"
        type="email"
        placeholder="Enter your email"
      />
      <ActionButton style={"px-5 py-3"} page={""} setSelectedPage={""}>
        Subscribe
      </ActionButton>
    </div>
  </div>
);

export default NewsletterSubscription;
