import React, { FunctionComponent } from "react";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import { Button, message, Upload } from "antd";
import { useCallback } from "react";
import useCurrentUserHook from "../hooks/useCurrentUserHook";

import CardComponent from "../components/CardComponent";
import ContactFormComponent from "../components/ContactFormComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

interface IProps {}

const NAME: string = "ENRIQUE SHUNNAR";
const POSITION: string = "Fullstack Developer";

const HomeView: FunctionComponent<IProps> = () => {
  const user = useCurrentUserHook();

  const onUploadRequestOverride = useCallback((e) => e?.onSuccess?.("ok"), []);

  return (
    <div className="home-component">
      <NavbarComponent />

      <div className="content">
        <div className="profile">
          <div>
            <img
              src="assets/images/me.jpg"
              alt="profile"
              width="auto"
              height="auto"
            />

            {!!user && (
              <div className="upload-wrapper">
                <Upload customRequest={onUploadRequestOverride}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </div>
            )}

            <h1>{NAME}</h1>
            <p>{POSITION}</p>
          </div>
        </div>

        <div className="description">
          <h1>INTRO</h1>
          <p>My simple description.</p>
        </div>

        <div className="row-boxes">
          <CardComponent title="VALUES" subTitle="Must Have @ Work">
            <li>Respect</li>
            <li>Adaptability</li>
            <li>Humble</li>
            <li>Help Others</li>
          </CardComponent>

          <CardComponent title="SKILLS" subTitle="Complements 2 Have">
            <li>Teamwork</li>
            <li>Have Fun</li>
            <li>Act Pro</li>
            <li>Be More</li>
          </CardComponent>

          <CardComponent title="Follow Me">
            <li>twitter: @xtealer00</li>
            <li>instagram: @xtealer</li>
            <li>github: https://github.com/xtealer</li>
          </CardComponent>

          <CardComponent title="Contact">
            <li>+507 6997-4711</li>
            <li>xtealer00@gmail.com</li>
          </CardComponent>
        </div>

        <ContactFormComponent />
      </div>

      <FooterComponent />
    </div>
  );
};

export default HomeView;
