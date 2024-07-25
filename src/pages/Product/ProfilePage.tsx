import { Separator } from "@/assets/Separator";
import { FC } from "react";

const ProfilePage: FC = () => {
  return (
    <div className="flex h-screen w-screen bg-dark p-5">
      <div className="ml-64 flex w-full flex-col gap-5 bg-dark">
        <h2 className="font-display text-2xl">Account Dashboard</h2>
        <Separator />
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-row gap-2 p-5">
            <div className="flex flex-row gap-5 rounded-lg">
              <img
                src="https://via.placeholder.com/128"
                alt="Profile"
                className="size-32 rounded-full"
              />
              <div className="flex w-full flex-col gap-3">
                <div className="flex w-full items-center justify-between gap-5 rounded-lg bg-cardColor p-3">
                  <span className="font-bold">Username:</span>
                  <span>Johnny Depp</span>
                </div>
                <div className="flex w-full items-center justify-between gap-5 rounded-lg bg-cardColor p-3">
                  <span className="font-bold">Enterprise:</span>
                  <span>Veehive</span>
                </div>
                <div className="flex w-full items-center justify-between gap-5 rounded-lg bg-cardColor p-3">
                  <span className="font-bold">Account Created:</span>
                  <span>23/07/2024</span>
                </div>
                <div className="flex w-full items-center justify-between gap-5 rounded-lg bg-cardColor p-3">
                  <span className="font-bold">Pricing Plan:</span>
                  <span>Premium</span>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-8 self-start rounded-lg border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-500 hover:text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
