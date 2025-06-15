import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;
const MainLayout: FC = () => {
  return (
    <>
      <Layout className={styles.main}>
        <Header className={styles.header}>
          <div className={styles.logo}>123</div>
          <Menu
            className={styles.nav}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px", flex: 1, justifyContent: "flex-start" }}
            items={[
              { key: "1", label: "nav 1" },
              { key: "2", label: "nav 2" },
              { key: "3", label: "nav 3" }
            ]}
          />
        </Header>
        <Content className={styles.content}>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>尾部xxxxxxxxxx</Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
