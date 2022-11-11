import styled, { createGlobalStyle } from "styled-components";
import DotsBg from '../assets/images/dots-bg.svg'

const font_family = 'Rubik';

const font_color = "#5e5c7f";

const font_size_smaller = "14px"
const font_size_normal = "16px"
const font_size_larger = "18px"
const font_size_x_large = "24px"
const font_size_xx_large = "28px"
const font_size_largest = "36px"

const font_bold = 700;

const color_dark = "#1b1b1b"
const color_light = "#f9f9f9"

const color_white = "#fff"
const color_active = "#ffd15c"
const color_primary = "#ff4c60"

export const GlobalStyle = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic");

    /*=================================================================*/
    /*                      BASE                              
    /*=================================================================*/
    * {
        margin: 0;
        padding: 0;
    }

    html {
        margin: 0 !important;
        overflow: auto !important;
    }

    body {
        color: ${font_color};
        background-color: ${color_light};
        font-family: ${font_family}, sans-serif;
        font-size: ${font_size_normal};
        line-height: 1.7;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .relative {
        position: relative;
    }

    /*=================================================================*/
    /*                      TYPOGRAPHY                              
    /*=================================================================*/

    h1, h2, h3, h4, h5, h6 {
        color: #454360;
        font-family: ${font_family}, sans-serif;
        font-weight: ${font_bold};
        margin: 20px 0;
    }

    h1 {
        font-size: ${font_size_largest};
    }

    h2 {
        font-size: ${font_size_xx_large};
    }

    h3 {
        font-size: ${font_size_x_large};
    }

    h4 {
        font-size: ${font_size_larger};
    }

    a {
        color: ${color_primary};
        outline: 0;
        transition: all 0.3s ease-in-out;
        text-decoration: none;

        &:hover {
            color: ${color_dark};
            text-decoration: none;
        }

        &:focus {
            outline: 0;
        }
    }

    blockquote {
        padding: 20px 20px;
        margin: 0 0 20px;
        font-size: ${font_size_normal};
        background: #F7F7F7;
        border-radius: 10px;
    }

    blockquote p {
        line-height: 1.6;
    }

    /* === Pre === */
    pre {
        display: block;
        padding: 9.5px;
        margin: 0 0 10px;
        font-size: 13px;
        line-height: 1.42857143;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 0;
    }

  
    /*=================================================================*/
    /*                      SECTIONS                             
    /*=================================================================*/

    section {
        padding-top: 110px;
        position: relative;

        &.home {
            background: ${color_dark};
            padding: 0;
            height: 100vh;
            min-height: 100vh;

            .intro {
                margin: auto;
                max-width: 540px;
                text-align: center;
                position: relative;
                z-index: 1;

                h1 {
                    color: ${color_white};
                    font-size: ${font_size_largest};
                }

                span {
                    color: ${color_white};
                    font-size: ${font_size_normal};
                }
            }

            .social-icons {
                li {
                    a {
                    color: ${color_white};
                    }
                }
            }
        }
    }

    .section-title {
        font-size: ${font_size_largest};
        margin: 0;
        margin-left: 14px;
        position: relative;

        &:before {
            content: "";
            background-image: url(${DotsBg});
            display: block;
            height: 37px;
            left: -14px;
            top: -14px;
            position: absolute;
            width: 37px;
        }
    }

    /*=================================================================*/
    /*                      HELPER                              
    /*=================================================================*/
    .scroll-down {
        position: absolute;
        bottom: 40px;
        left: 0;
        width: 100%;
        z-index: 1;
    }

    @-webkit-keyframes ani-mouse {
        0% {
            top: 29%;
        }
        15% {
            top: 50%;
        }
        50% {
            top: 50%;
        }
        100% {
            top: 29%;
        }
    }
    @-moz-keyframes ani-mouse {
        0% {
            top: 29%;
        }
        15% {
            top: 50%;
        }
        50% {
            top: 50%;
        }
        100% {
            top: 29%;
        }
    }
    @keyframes ani-mouse {
        0% {
            top: 29%;
        }
        15% {
            top: 50%;
        }
        50% {
            top: 50%;
        }
        100% {
            top: 29%;
        }
    }

    .mouse-wrapper {
        color: ${color_white};
        font-size: ${font_size_smaller};
        display: block;
        max-width: 100px;
        margin: auto;
        text-align: center;

        &:hover {
            color: ${color_white};
        }
    }

    .mouse {
        border: solid 2px ${color_white};
        border-radius: 16px;
        display: block;
        margin: auto;
        margin-top: 10px;
        height: 26px;
        position: relative;
        width: 20px;

        .wheel {
            background: ${color_white};
            border-radius: 100%;
            display: block;
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            height: 4px;
            width: 4px;
            animation: ani-mouse 2s linear infinite;
        }
    }

    .spacer {
        clear: both;
    }

    .text-light {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: ${color_white};
        }
    }

    
    /*=================================================================*/
    /*                      ELEMENTS
    /*=================================================================*/
    /* === Timeline === */
    .timeline {
        position: relative;

        .timeline-container {
            padding-left: 50px;
            margin-bottom: 50px;
            position: relative;
            background-color: inherit;
            width: 100%;
            & .company{
                font-size: ${font_size_larger};
                color: ${color_primary};
            }
            &:last-of-type {
                margin-bottom: 0;
            }
        }
        
        .content {
            position: relative;

            .time {
                color: #8B88B1;
                font-size: ${font_size_smaller};
            }

            h3 {
                font-size: 20px;
                margin: 10px 0;
            }

            p {
                margin: 0;
            }
        }

        span {
            &.line {
                position: absolute;
                width: 1px;
                background-color: ${color_primary};
                top: 30px;
                bottom: 30px;
                left: 34px;
            }
        }
    }

    /* === Social Icons === */
    .social-icons {
        li:not(:last-child) {
            margin-right: 1.5rem;
        }

        li {
            a {
            font-size: 21px;
            }
        }
    }

    /* === Helper === */
    .rounded {
        border-radius: 5px !important;
    }

    .bg-white {
        background: ${color_white};
    }

    .shadow-dark, .kd-header .dropdown-menu, .form-control, .form-control:focus {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        border:1px solid #f0f0f0;
    }

    .shadow-light {
        box-shadow: 0px 5px 20px 0px rgba(255, 255, 255, 0.01);
    }

    .shadow-blue {
        box-shadow: 0px 5px 20px 0px rgba(108, 108, 229, 0.5);
    }

    .shadow-pink {
        box-shadow: 0px 5px 20px 0px rgba(249, 123, 139, 0.5);
    }

    .shadow-yellow {
        box-shadow: 0px 5px 20px 0px rgba(249, 215, 76, 0.5);
    }

    .padding-30 {
        padding: 30px;
    }

    .triangle-left {
        &:before {
            content: "";
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-right: 15px solid ${color_white};
            position: absolute;
            left: -15px;
            top: 20%;
        }
    }

    .triangle-top {
        &:before {
            content: "";
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid ${color_white};
            position: absolute;
            left: 50%;
            top: -10px;
            transform: translateX(-7.5px);
        }
    }

    /* === Progress Bar === */
    .progress {
        height: 7px;
        margin-bottom: 0;
        overflow: hidden;
        background-color: #F1F1F1;
        border-radius: 15px;
        box-shadow: none;
    }

    .progress-bar {
        border-radius: 15px;
        float: left;
        width: 0;
        height: 100%;
        font-size: 12px;
        line-height: 7px;
        color: ${color_white};
        text-align: center;
        background-color: ${color_dark};
        box-shadow: none;
        transition: width 0.6s ease;
    }

    /*=================================================================*/
    /*                      FACTS                              
    /*=================================================================*/
    .fact-item {
        .details {
            margin-left: 60px;
        }

        .icon {
            font-size: ${font_size_largest};
            color: #dedeea;
            float: left;
        }

        .number {
            font-size: 30px;

            em {
            font-style: normal;
            }
        }

        p {
            font-size: ${font_size_normal};
        }
    }

    /* === Go to Top === */
    #return-to-top {
        position: fixed;
        bottom: 25px;
        right: 25px;
        background: rgba(0, 0, 0, 0.2);
        width: 40px;
        height: 40px;
        display: block;
        text-decoration: none;
        border-radius: 100%;
        display: none;
        z-index: 4;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        svg {
            color: ${color_white};
            margin: 0;
            position: relative;
            left: 13px;
            top: 8px;
            font-size: 16px;
            transform: translateY(0px);
            transition: all 0.1s ease-in-out;
        }

        &:hover {
            background: ${color_primary};
        }
    }

    /*=================================================================*/
    /*                     BUTTONS
    /*=================================================================*/

    .btn {
        border-radius: 30px;
        font-family: ${font_family}, sans-serif;
        font-size: ${font_size_normal};
        font-weight: ${font_bold};
        overflow: hidden;
        line-height: 1;
        padding: 12px 32px;
        position: relative;

        &:focus {
            box-shadow: none;
        }

        &:focus {
            outline: 0;
        }

        &.disabled, &:disabled {
            opacity: 1;
            cursor: not-allowed;
        }
    }

    @keyframes button-push {
        50% {
            transform: scale(0.8);
        }
        100% {
            transform: scale(1);
        }
    }

    .btn-kd {
        color: ${color_white};
        background: ${color_primary};
        border: none;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);

        &:hover {
            color: ${color_white};
            background: ${color_primary};
            animation-name: button-push;
            animation-duration: 0.3s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
        }
    }

    /*=================================================================*/
    /*                      RESPONSIVE SETTINGS
    /*=================================================================*/
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5), 
        only screen and (-o-min-device-pixel-ratio: 3/2), 
        only screen and (min--moz-device-pixel-ratio: 1.5), 
        only screen and (min-device-pixel-ratio: 1.5) {
        html, body {
            width: 100%;
            overflow-x: hidden;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .price-item {
            padding: 40px 30px;
        }
    }

    @media only screen and (max-width: 991px) {
    main.content {
            margin-left: 0;
        }

        .kd-header .nav-link {
            padding: 7px 0;
        }
    }

    @media only screen and (max-width: 768px) {
        section {
            &.home {
                padding: 300px 0;

                .cta {
                    h1 {
                    font-size: 52px;
                    }

                    p {
                    font-size: ${font_size_larger};
                    }
                }
            }
        }

        .portfolio-filter {
            display: none;
        }

        .portfolio-item, .blog-item {
            max-width: 360px;
            margin: auto;
        }

        .blog-wrapper {
            margin: -20px 0;

            .blog-item {
                margin-top: 15px;
                margin-bottom: 15px;
            }
        }

        .pf-filter-wrapper {
            display: block;
        }

        .triangle-top-sm {
            &:before {
                content: "";
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid ${color_white};
                position: absolute;
                left: 50%;
                top: -10px;
                transform: translateX(-7.5px);
            }
        }

        body {
            &.dark {
                .triangle-top-sm {
                    &:before {
                    border-bottom-color: #302f4e;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
    .container {
        max-width: 920px;
    }

    .triangle-left-md {
        &:before {
            content: "";
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-right: 15px solid ${color_white};
            position: absolute;
            left: 0;
            top: 20%;
        }
    }

    body {
        &.dark {
            .triangle-left-md {
                &:before {
                border-right-color: #302f4e;
                }
            }
        }
    }
    }

    @media only screen and (max-width: 576px) {
        .portfolio-info {
            li {
                display: block;
                padding: 5px 0;
            }
        }

        .parallax {
            .p1 {
                left: 10%;
                top: 10%;
            }

            .p2 {
                left: 15%;
                top: 30%;
            }

            .p3 {
                left: 10%;
                bottom: 30%;
            }

            .p4 {
                left: 10%;
                bottom: 10%;
            }

            .p5 {
                left: 45%;
                top: 3%;
            }

            .p6 {
                left: 40%;
                bottom: 10%;
            }

            .p7 {
                top: 20%;
                right: 30%;
            }

            .p8 {
                right: 30%;
                bottom: 20%;
            }

            .p9 {
                right: 10%;
                top: 5%;
            }

            .p10 {
                top: 45%;
                right: 10%;
            }

            .p11 {
                bottom: 10%;
                right: 10%;
            }
        }
    }

    @media (min-width: 1200px) {
        .container {
            max-width: 920px;
        }
    }

    @media (min-width: 1366px) {
        .container {
            max-width: 1080px;
        }
    }

    @media only screen and (max-height: 500px) {
        .scroll-down {
            display: none;
        }
    }

    /*=================================================================*/
    /*                      SERVICE                              
    /*=================================================================*/
    .service-box {
        transform: translateY(0);
        transition: all 0.3s ease-in-out;

        h3 {
            font-size: 20px;
        }

        img {
            margin-bottom: 22px;
        }

        &:hover {
            transform: translateY(-10px);
        }
    }

    footer {
        &.footer {
            background: ${color_dark};
            padding: 40px 0;
            text-align: center;

            .copyright {
                color: #9C9AB3;
                font-size: ${font_size_smaller};
            }

            &.light {
                background: ${color_light};
                border-top: solid 1px rgba(0, 0, 0, 0.05);
            }
        }
    }
`;

export const HeaderWrapper = styled.div`
    /*=================================================================*/
    /*                      HEADER                              
    /*=================================================================*/
    .kd-header {
        background: ${color_dark};
        padding: 20px 0;
        border-bottom: solid 1px rgba(255, 255, 255, 0.1);
    
        .navbar {
            padding: 0;
        }

        .navbar-brand {
            padding-top: 0;
            padding-bottom: 0;
        }

        .navbar-dark {
            .navbar-nav {
                .nav-link {
                    color: ${color_white};
                }
            }
        }

        .nav-link {
            font-size: ${font_size_normal};
            font-weight: ${font_bold};
            padding: 0;

            &.active {
            color: ${color_active} !important;
            }

            &:hover {
            color: ${color_active} !important;
            }
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 1000;
            float: left;
            min-width: 10rem;
            padding: 0.5rem 0;
            margin: 0.125rem 0 0;
            font-size: 1rem;
            color: #212529;
            text-align: left;
            list-style: none;
            background-color: ${color_white};
            background-clip: padding-box;
            border: 0;
            border-radius: 0.25rem;
        }

        button{
            &.navbar-toggler {
                &:focus {
                    outline: 0;
                }
            }
        }

        .navbar-nav {
            li {
                &:not(:last-child) {
                    padding-right: 3rem;
                }
            }
        }

        &.light {
            background: ${color_light};
            border-bottom: solid 1px rgba(0, 0, 0, 0.05);

            .navbar-dark {
            .navbar-nav {
                .nav-link {
                    color: ${color_dark};
                }
            }
            }
        }
    }

    @media (min-width: 992px) {
        .kd-header {
            .navbar-expand-lg {
                .navbar-nav {
                    .nav-link {
                        padding-right: 0;
                        padding-left: 0;
                    }
                }
            }
        }
    }
`;

export const HomeWrapper = styled.div`
   
`;


