import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import styles from '../../styles/CartPage.module.scss';

const CartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>

      <Header />

      <div id="pageMain" className={styles.cartPageWrapper}>
        <main>
          aaa
        </main>

        <aside>
          bbb
        </aside>
      </div>
    </>
  )
}

export default CartPage;