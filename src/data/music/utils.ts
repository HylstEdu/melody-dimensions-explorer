
import React from "react";

export const createIcon = (Icon: React.ElementType, className: string = "h-4 w-4") => {
  return React.createElement(Icon, { className });
};
