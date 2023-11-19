"use client";

import Layout from "../Layout/Layout";
import { useState } from "react";
export default function page() {
  const [follower, setFollower] = useState(true);
  const [following, setFollowing] = useState(false);

  const handleToggle = (key) => {
    if (key === "follower") {
      setFollower(true);
      setFollowing(false);
      document.getElementById("follower-tab").style.border =
        "2px solid rgb(104 117 245)";
      // document.getElementById("follower-tab").style.color = "white";
      document.getElementById("following-tab").style.border = "2px solid white";
    } else {
      setFollower(false);
      setFollowing(true);
      document.getElementById("follower-tab").style.backgroundColor =
        "transparent";
      document.getElementById("following-tab").style.backgroundColor =
        "rgb(104 117 245)";
    }
  };

  return (
    <Layout>
      <div className="mb-4 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-40" role="presentation">
            <button
              onClick={() => handleToggle("follower")}
              className="inline-block p-4 border-2 hover:text-indigo-500 rounded-t-lg"
              id="follower-tab"
              data-tabs-target="#follower"
              type="button"
              role="tab"
              aria-controls="follower"
              aria-selected="false"
            >
              Followers
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              onClick={() => handleToggle("following")}
              className="inline-block p-4 border-2 rounded-t-lg hover:text-indigo-500	 hover:border-gray-300 dark:hover:text-gray-300"
              id="following-tab"
              data-tabs-target="#following"
              type="button"
              role="tab"
              aria-controls="following"
              aria-selected="false"
            >
              Followings
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        {follower ? (
          <div
            className=" p-4 rounded-lg dark:bg-gray-800"
            id="follower"
            role="tabpanel"
            aria-labelledby="follower-tab"
          >
            <p className="text-lg text-gray-200 dark:text-gray-400">
              Follower's List
            </p>
          </div>
        ) : (
          ""
        )}
        {following ? (
          <div
            className=" p-4 rounded-lg dark:bg-gray-800"
            id="following"
            role="tabpanel"
            aria-labelledby="following-tab"
          >
            <p className="text-lg text-gray-200 dark:text-gray-400">
              Following List
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}
