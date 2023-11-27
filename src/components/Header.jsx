import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../App.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="navContain">
        <Button onClick={handleShow} id="navShow">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#65805B" class="bi bi-globe-americas" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
</svg>
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
       <div id="headerBlob">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="87"
          viewBox="0 0 96 87"
          fill="none"
        > 
          <g filter="url(#filter0_d_2_70)">
            <path
              d="M90.6189 55.6608C93.9745 64.2525 91.2154 69.1341 82.3416 70.3057C73.4678 71.4773 66.3464 73.1566 60.9774 75.3435C55.6084 77.5305 49.5683 78.7412 42.857 78.9755C36.1457 79.2098 28.6515 77.7648 20.3743 74.6406C12.097 71.5163 6.989 65.4241 5.05019 56.3637C3.11138 47.3034 3.85707 38.7117 7.28728 30.5887C10.7175 22.4657 16.6085 17.7793 24.9603 16.5296C33.3121 15.2799 40.0606 11.9994 45.2059 6.6882C50.3513 1.37698 56.6897 -0.770937 64.2212 0.244443C71.7528 1.25982 77.9047 4.89176 82.6772 11.1403C87.4497 17.3888 89.1275 24.223 87.7107 31.6431C86.2938 39.0632 87.2632 47.0691 90.6189 55.6608Z"
              fill="#A4C281"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2_70"
              x="0"
              y="0"
              width="96"
              height="87"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            > 
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_70"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2_70"
                result="shape"
              />
            </filter>
          </defs>
          <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="45" font-weight="bold" fill="white">LE</text>
        </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
