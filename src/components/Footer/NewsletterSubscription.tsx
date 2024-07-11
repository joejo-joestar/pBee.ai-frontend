import ActionButton from "@/components/shared/ActionButton";
import { SelectedPage } from "../shared/types";

type Props = {};

const NewsletterSubscription = ({}: Props) => (
  <div className="font-display mt-8 flex items-center justify-between">
    <h2 className="mr-4 text-lg font-semibold">Join our newsletter</h2>
    <div className="flex gap-3">
      <input
        className="bg-tabContainer flex-grow rounded-xl border border-violet-500 p-2"
        type="email"
        placeholder="Enter your email"
      />
      <ActionButton style={"px-5 py-3"} page={SelectedPage.Pricing}>
        Subscribe
      </ActionButton>
    </div>
  </div>
);

export default NewsletterSubscription;
