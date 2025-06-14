import { FC } from "react";
import styles from "./MainContentLayout.module.scss";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
const { Sider, Content } = Layout;

const menuItems = [
  {
    key: "1",
    label: "菜单项 1"
  },
  {
    key: "2",
    label: "菜单项 2"
  },
  {
    key: "3",
    label: "菜单项 3"
  }
];

const MainContentLayout: FC = () => {
  return (
    <>
      <Layout className={styles.main}>
        <Sider className={styles.sider}>
          <Menu items={menuItems} theme="dark" />
        </Sider>
        <Layout>
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainContentLayout;
