import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "./Nav";
import "../App.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="navContain">
        <Button onClick={handleShow} id="navShow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#65805B"
            class="bi bi-globe-americas"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
          </svg>
        </Button>

        <Offcanvas show={show} onHide={handleClose} id="navBack">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="navTitle">Lillian Edwards</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body id="navItems">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="128"
              viewBox="0 0 284 128"
              fill="none"
            >
              <g filter="url(#filter0_d_22_7)">
                <path
                  d="M106.264 113.621C73.1179 111.35 43.2696 92.7449 16.7188 57.8043C-9.83214 22.8637 6.4726 4.02664 65.633 1.29313C124.793 -1.44038 172.32 2.38228 208.212 12.7611C244.104 23.1399 266.946 43.7788 276.738 74.6777C286.531 105.577 268.853 120.359 223.705 119.026C178.556 117.693 139.409 115.891 106.264 113.621Z"
                  fill="#65805B"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_22_7"
                  x="0.381699"
                  y="0.438354"
                  width="282.975"
                  height="126.67"
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
                    result="effect1_dropShadow_22_7"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_22_7"
                    result="shape"
                  />
                </filter>
              </defs>
              <text
              x="50%"
              y="50%"
              alignment-baseline="middle"
              text-anchor="middle"
              font-family="Inter, sans-serif"
              font-size="45"
              fill="white"
            >
              Resume
            </text>
            </svg>
            <h2 id="aboutLink">
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#65805b"
                class="bi bi-person-raised-hand"
                viewBox="0 0 16 16"
                className="aboutsvg"
              >
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
            </h2>
            <h2 id="projectLink">Projects</h2>
            <h2 id="connectLink">Connect</h2>
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
            <text
              x="50%"
              y="50%"
              alignment-baseline="middle"
              text-anchor="middle"
              font-family="Inter, sans-serif"
              font-size="45"
              font-weight="bold"
              fill="white"
            >
              LE
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
