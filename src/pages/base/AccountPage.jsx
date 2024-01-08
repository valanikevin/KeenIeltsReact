import React, { useEffect, useState } from "react";
import PageHeadingBriefinfo from "../../components/layout/PageHeadingBriefInfo";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as Yup from "yup";
import BaseForm from "../../components/layout/BaseForm";
import useAxios from "../../utils/useAxios";
import { DJANGO_BASE_URL } from "../../utils/config";
import AccountSettingForm from "../../components/auth/AccountSettingForm";
import ChangePasswordForm from "../../components/auth/ChangePasswordForm";
import ProfileCover from "../../components/layout/ProfileCover";

const AccountPage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xl={12} lg={12} md={12} className="mt-3">
            <ProfileCover page="account" />
          </Col>
          <Col xl={8} lg={10} md={12} className="mb-3">
            <AccountSettingForm />
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
