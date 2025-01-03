import PropTypes from "prop-types";

export default function DarkModeWrapper({ children }) {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
      {children}
    </div>
  );
}

DarkModeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
