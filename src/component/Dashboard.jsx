import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userPlan, setUserPlan] = useState(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem("userPlan");
    if (storedPlan) setUserPlan(JSON.parse(storedPlan));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userPlan");
    setUserPlan(null);
    alert("❌ Subscription Removed Successfully");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Dashboard
      </h1>

      {!userPlan ? (
        <p className="text-center text-gray-400">
          ❌ No Active Subscription
        </p>
      ) : (
        <div className="max-w-xl mx-auto relative rounded-xl overflow-hidden">

          {/* Electric Animated Border */}
          <div className="absolute inset-0 rounded-xl p-[2px]
            bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400
            animate-spin-slow"></div>

          <div className="relative rounded-xl bg-black/90 p-8">
            <h2 className="text-2xl font-semibold mb-4">{userPlan.name} Plan</h2>

            <p className="mb-2">💰 Price: ${userPlan.price}/month</p>
            <p className="mb-2">📱 Device Access: {userPlan.devices}</p>
            <p className="mb-6">🎥 Quality: {userPlan.quality}</p>

            <button
              onClick={handleLogout}
              className="w-full py-3 rounded-lg bg-red-500
              hover:bg-red-400 transition duration-300 font-bold"
            >
              Remove Subscription
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;