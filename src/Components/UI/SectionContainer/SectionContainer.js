import React from "react";

const SectionContainer = ({ className, children, styles }) => {
  return (
    <section style={styles} className={`px-8 py-4 ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
