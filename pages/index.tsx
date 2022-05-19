import Link from "next/link";
import Layout from "../components/Layout";
import { useModalContext } from "../contexts/ModalProvider";
import Sample from "../components/modals/Sample";

const IndexPage = () => {
  const { openModal, closeModal } = useModalContext();
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <button onClick={() => openModal(<Sample />)}>モーダルを開く</button>
      </p>
    </Layout>
  );
};

export default IndexPage;
