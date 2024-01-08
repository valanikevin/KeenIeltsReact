import { Link, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { v4 as uuid } from "uuid";
import { DJANGO_BASE_URL } from "../../../utils/config";
import useAxios from "../../../utils/useAxios";

const TakeTestDropdown = () => {
  const navigate = useNavigate();
  const api = useAxios();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  // Check if user info is present in local storage
  const isLoggedIn = () => {
    const user = localStorage.getItem("user");
    return user != null; // If user info is in local storage, user is logged in
  };

  const getTitle = (item) => {
    const handleClick = async () => {
      if (isLoggedIn()) {
        try {
          const response = await api.post(
            `${DJANGO_BASE_URL}/ieltstest/find_smart_test/${item.slug}/`
          );
          navigate(
            `/ieltstest/attempt/${response.data.module_type}/${response.data.selected_module}/${response.data.attempt}`
          );
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle error accordingly
        }
      } else {
        navigate(
          "/register/?alert=Please create an free account or login to start practice test.&variant=danger"
        );
      }
    };

    return item.badge ? (
      <div onClick={handleClick} className="dropdown-item">
        {item.menuitem}
        <Badge
          className="ms-1"
          bg={item.badgecolor ? item.badgecolor : "primary"}
        >
          {item.badge}
        </Badge>
      </div>
    ) : (
      <div onClick={handleClick} className="dropdown-item">
        {item.menuitem}
      </div>
    );
  };

  const TakeTestDropdown = [
    {
      id: uuid(),
      menuitem: "Take Test",
      link: "#",
      children: [
        {
          id: uuid(),
          menuitem: "Listening",
          link: "/ieltstest/listening/",
          slug: "listening",
        },
        {
          id: uuid(),
          menuitem: "Reading",
          link: "/ieltstest/reading/",
          slug: "reading",
        },
        {
          id: uuid(),
          menuitem: "Writing",
          link: "/ieltstest/writing/",
          slug: "writing",
        },
        {
          id: uuid(),
          menuitem: "Speaking",
          link: "/ieltstest/speaking/",
          slug: "speaking",
        },
      ],
    },
  ];
  const NavbarDesktop = () => {
    return (
      <Fragment>
        {TakeTestDropdown.slice(0, 1).map((item, index) => {
          return (
            <Dropdown key={index}>
              <Dropdown.Toggle
                className="text-white"
                id="category-dropdown-menu-button-mobile"
              >
                Start Test{" "}
                <i className="fe fe-plus m-1 align-middle text-white "></i>
              </Dropdown.Toggle>
              <Dropdown.Menu as="ul" show>
                {item.children.map((submenu, submenuindex) => {
                  return submenu.children === undefined ? (
                    <Dropdown.Item as="li" key={submenuindex} bsPrefix=" ">
                      {getTitle(submenu)}
                    </Dropdown.Item>
                  ) : (
                    ""
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          );
        })}
      </Fragment>
    );
  };
  const NavbarMobile = () => {
    return (
      <Fragment>
        {TakeTestDropdown.slice(0, 1).map((item, index) => {
          return (
            <Dropdown key={index}>
              <Dropdown.Toggle
                variant="primary"
                className="text-white"
                id="category-dropdown-menu-button-mobile"
              >
                Start Test <i className="fe fe-plus ms-1 align-middle "></i>
              </Dropdown.Toggle>
              <Dropdown.Menu as="ul">
                {item.children.map((submenu, submenuindex) => {
                  return submenu.children === undefined ? (
                    <Dropdown.Item as="li" key={submenuindex} bsPrefix=" ">
                      {getTitle(submenu)}
                    </Dropdown.Item>
                  ) : (
                    ""
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          );
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      {/* There is only one setting between NavbarDesktop and NavbarMobile component i.e. show property used with <Dropdown.Menu show> tag */}
      {isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
    </Fragment>
  );
};

export default TakeTestDropdown;
