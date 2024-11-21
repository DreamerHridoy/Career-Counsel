import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Dashboard - My Website</title>
      </Helmet>
      <NavBar></NavBar>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 text-gray-800">
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
            Welcome to Your Dashboard
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Manage your profile, view your subscribed services, and track your
            progress.
          </p>

          <div className="space-y-6">
            {/* Profile Section */}
            <section className="bg-blue-50 p-6 rounded-md shadow">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Your Profile
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <p>
                  <span className="font-semibold">Name:</span> John Doe
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  johndoe@example.com
                </p>
                <p>
                  <span className="font-semibold">Joined:</span> January 2024
                </p>
                <p>
                  <span className="font-semibold">Membership:</span> Premium
                </p>
              </div>
            </section>

            {/* Subscribed Services Section */}
            <section className="bg-blue-50 p-6 rounded-md shadow">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Subscribed Services
              </h2>
              <ul className="space-y-2">
                <li className="p-4 bg-white rounded-md shadow-sm">
                  📌 Career Counseling Sessions
                </li>
                <li className="p-4 bg-white rounded-md shadow-sm">
                  📌 Time Management Workshop
                </li>
              </ul>
            </section>

            {/* Recent Activity Section */}
            <section className="bg-blue-50 p-6 rounded-md shadow">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Recent Activity
              </h2>
              <p className="p-4 bg-white rounded-md shadow-sm">
                ✅ You recently attended the{" "}
                <strong>"Interview Preparation"</strong> session.
              </p>
            </section>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
                Update Profile
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition">
                Manage Services
              </button>
            </div>

            {/* Go Back to Home Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition"
              >
                Go Back to Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
