"use client";

import StarryBackground from "@/components/StarryBackground";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AdminPage = () => {
  const { user } = useUser();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [showLogs, setShowLogs] = useState(false);
  const [logs, setLogs] = useState<{ timestamp: string; email: string }[]>([]);

  // Safely extract the user's email address
  const emailAddress =
    user?.emailAddresses?.[0]?.emailAddress || "Unknown User";

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const validFiles = files.filter((file) =>
        ["video/mp4", "text/csv"].includes(file.type)
      );

      if (validFiles.length !== files.length) {
        toast.error("Invalid file type! Only .mp4 and .csv files are allowed.");
      }

      setSelectedFiles(validFiles);
      toast.success("Files selected successfully!");
    }
  };

  // Handle file upload
  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      toast.error("No files selected for upload.");
      return;
    }

    // Simulate upload process
    toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
      loading: "Uploading files...",
      success: "Files uploaded successfully!",
      error: "File upload failed!",
    });
  };

  // Handle adding a timestamp
  const handleAddTimestamp = () => {
    if (!emailAddress || emailAddress === "Unknown User") {
      toast.error("Unable to fetch user email.");
      return;
    }

    const newLog = {
      timestamp: new Date().toLocaleString(),
      email: emailAddress,
    };
    setLogs((prevLogs) => [newLog, ...prevLogs]);
    toast.success("Timestamp added!");
  };

  return (
    <div className="relative min-h-screen bg-black text-white mt-20">
      {" "}
      {/* Added margin-top */}
      {/* Starry background */}
      <StarryBackground />
      <div className="absolute inset-0 z-10 flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        {/* Upload Section */}
        <div className="w-full max-w-2xl p-6 mb-8 border border-white/50 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Upload Files</h2>
          <input
            type="file"
            multiple
            accept=".mp4,.csv"
            onChange={handleFileChange}
            className="block w-full p-2 mb-4 border border-white/50 rounded-lg bg-transparent text-white file:cursor-pointer file:bg-transparent file:border-none file:text-white hover:file:opacity-80"
          />

          <button
            onClick={handleUpload}
            className="w-full py-2 px-4 mt-4 border border-white/50 rounded-lg bg-transparent text-white hover:bg-white hover:text-black transition-all"
          >
            Upload
          </button>

          {selectedFiles.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-medium">Selected Files:</h3>
              <ul className="list-disc list-inside">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="text-sm">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Logs Section */}
        <div className="w-full max-w-2xl p-6 border border-white/50 rounded-lg backdrop-blur-sm">
          <button
            onClick={() => setShowLogs((prev) => !prev)}
            className="w-full py-2 px-4 mb-4 border border-white/50 rounded-lg bg-transparent text-white hover:bg-white hover:text-black transition-all"
          >
            {showLogs ? "Hide Logs" : "Show Logs"}
          </button>

          {showLogs && (
            <>
              <button
                onClick={handleAddTimestamp}
                className="w-full py-2 px-4 mb-4 border border-white/50 rounded-lg bg-transparent text-white hover:bg-white hover:text-black transition-all"
              >
                Add Timestamp
              </button>

              <div className="h-48 overflow-y-auto border border-white/20 rounded-lg p-4">
                {logs.length > 0 ? (
                  logs.map((log, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-2"
                    >
                      <span className="text-sm">
                        {log.timestamp} - {log.email}
                      </span>
                      <a
                        href="https://github.com/your-repo/model-version"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 text-sm border border-white/50 rounded hover:bg-white hover:text-black transition-all"
                      >
                        Download
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400">
                    No logs or nothing to show yet.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
