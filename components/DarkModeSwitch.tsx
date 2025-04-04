import React, { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Toggle dark class on the document element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
        className="hidden"
      />
      <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
};

export default DarkModeSwitch;
