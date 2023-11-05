import React, { useEffect, useState } from "react";
import PageHeadingBriefinfo from "../../components/layout/PageHeadingBriefInfo";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as Yup from "yup";
import BaseForm from "../../components/layout/BaseForm";
import useAxios from "../../utils/useAxios";
import { DJANGO_BASE_URL } from "../../utils/config";
import AccountSettingForm from "../../components/auth/AccountSettingForm";
import ChangePasswordForm from "../../components/auth/ChangePasswordForm";

const AccountPage = () => {
  const api = useAxios();
  const [userData, setUserData] = useState(null);

  function getUserDetails() {
    api
      .post(DJANGO_BASE_URL + "/account/get_user_details/")
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data);
        }
      });
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  if (!userData) {
    return null;
  }

  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={"Account Settings"}
        briefinfo={
          "Manage your personal information and other account settings."
        }
      />
      <Container>
        <Row className="justify-content-center">
          <Col xl={8} lg={10} md={12} className="my-3">
            <AccountSettingForm userData={userData} setUserData={setUserData} />
          </Col>
          <Col xl={8} lg={10} md={12} className="mb-3">
            <ChangePasswordForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AccountPage;
