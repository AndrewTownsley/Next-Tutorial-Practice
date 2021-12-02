import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';

const FirstPost = () =>  {
    return <Layout>

        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>back to home</a>
            </Link>
        </h2>
        <Image
            src="/images/profile-img.jpg"
            height={100}
            width={75}
            alt="andrew"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime qui quo ullam molestiae   fuga in beatae, vero eligendi sapiente fugit quod eveniet adipisci reiciendis mollitia cum magnam     inventore? Rem consectetur cupiditate ipsam modi iste voluptates labore vel voluptas enim quod  dolorem reiciendis, ex ipsum aut pariatur hic totam impedit.</p>
    </Layout>

}

export default FirstPost