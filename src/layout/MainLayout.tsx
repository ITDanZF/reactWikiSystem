import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
const MainLayout: FC = () => {
  return (
    <>
      <Layout className={styles.main}>
        <Header className={styles.header}>头部</Header>
        <Content className={styles.content}>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>尾部</Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
