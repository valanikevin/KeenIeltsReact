import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { v4 as uuid } from "uuid";

const TakeTestDropdown = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const getTitle = (item) => {
    return item.badge ? (
      <Link to={item.link} className="dropdown-item">
        {item.menuitem}
        <Badge
          className="ms-1"
          bg={item.badgecolor ? item.badgecolor : "primary"}
        >
          {item.badge}
        </Badge>
      </Link>
    ) : (
      <Link to={item.link} className="dropdown-item">
        {item.menuitem}
      </Link>
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
        },
        {
          id: uuid(),
          menuitem: "Reading",
          link: "/ieltstest/reading/",
        },
        {
          id: uuid(),
          menuitem: "Writing",
          link: "/ieltstest/writing/",
        },
        {
          id: uuid(),
          menuitem: "Speaking",
          link: "/ieltstest/speaking/",
        },
        {
          id: uuid(),
          menuitem: "Full Test",
          link: "/ieltstest/fulltest/",
        },
        {
          id: uuid(),
          menuitem: "Group Test",
          link: "/ieltstest/grouptest/",
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
                Take Test{" "}
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
                Take Test <i className="fe fe-plus ms-1 align-middle "></i>
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
