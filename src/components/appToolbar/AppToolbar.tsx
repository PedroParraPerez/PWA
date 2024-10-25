import { LoginOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu, MenuProps, Space } from "antd";
import { CSSProperties, useState } from "react";
import LoginDialog from "../loginDialog/LoginDialog";

const { Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const headerStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

const ApptToolbar = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleCloseLoginDialog = () => {
    setShowLoginDialog(false);
  };

  const handleShowLoginDialog = () => {
    setShowLoginDialog(true);
  };

  const items: MenuItem[] = [
    {
      label: "Iniciar Sesión",
      key: "login",
      icon: <LoginOutlined />,
      onClick: () => handleShowLoginDialog(),
    },
  ];

  return (
    <>
      <Layout>
        <Header className="site-layout-sub-header" style={headerStyles}>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <MenuOutlined style={{ color: "white" }} />
          </Dropdown>
        </Header>
      </Layout>
      <LoginDialog
        showLoginDialog={showLoginDialog}
        handleCLoseDialog={handleCloseLoginDialog}
      />
    </>
  );
};

export default ApptToolbar;
