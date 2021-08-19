import Head from 'next/head';

type LayoutPropsType = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutPropsType) => (
  <div className="h-screen bg-white flex flex-col">
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </div>
);

export default Layout;
