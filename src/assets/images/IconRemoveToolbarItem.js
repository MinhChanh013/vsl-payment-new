import React from "react";

const IconRemoveToolbarItem = ({ key, width = "24", height = "24" }) => {
  return (
    <svg
      data-key={key}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.4286 0H2.57143C1.15179 0 0 1.15178 0 2.57143V21.4286C0 22.8482 1.15179 24 2.57143 24H21.4286C22.8482 24 24 22.8482 24 21.4286V2.57143C24 1.15178 22.8482 0 21.4286 0Z"
        fill="#9ADBFF"
      />
      <g clip-path="url(#clip0_71_15)">
        <path
          d="M19.3571 14.2856C19.7107 14.2856 20 13.9964 20 13.6428V10.6428C20 10.2892 19.7107 9.99994 19.3571 9.99994H10.1429H5.21431C4.86071 9.99994 4.57141 10.2892 4.57141 10.6428V13.6428C4.57141 13.9964 4.86071 14.2856 5.21431 14.2856H9.82141H14.4286H19.3571Z"
          fill="#ff5252"
        />
      </g>
      <defs>
        <clipPath id="clip0_71_15">
          <rect
            width="16"
            height="5"
            fill="white"
            transform="translate(4 9.99994)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconRemoveToolbarItem;
