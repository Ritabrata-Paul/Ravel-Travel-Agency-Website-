import React from 'react';
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src={Logo} alt="logo" />
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
            <li>
                <a href="#services">Home</a>
            </li>
            <li>
                <a href="#destination"> Destination</a>
            </li>
            <li>
                <a href="#offer">Offer</a>
            </li>
            <li>
                <a href="#tour">Tour</a>
            </li>
            <li>
                <a href="#blog">Blog</a>
            </li>
        </ul>
      </div>
      <div className="account-info">
        <div className="account">
            <span>
                <BsPerson />
            </span>
            <span>
                My Account
            </span>
        </div>
        <div className="search">
            <IoSearchOutline />
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .brand {
        img {
        cursor: pointer;
        }
    }
    .toggle {
        display: none;
    }
    .links {
        ul {
            display: flex;
            gap: 3rem;
            list-style-type: none;
            li {
              a {
                text-decoration: none;
                color: black;
                cursor: pointer;
                transition: var(--default-transition);
                &:hover {
                  color: var(--primary-color);
                }
              }
            }
        }
    }
    .account-info {
        display: flex;
        gap: 2rem;
        .account {
            display: flex;
            gap: 0.5rem;
            cursor: pointer;
        }
        .search {
            cursor: pointer;
        }
    }
    
`;
