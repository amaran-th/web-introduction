const Badge = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-subColor px-2.5 py-0.5 text-xs font-medium text-white">
      {children}
    </span>
  );
};

export default Badge;
