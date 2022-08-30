import Link from "next/link";
import Layout from "../../components/layout";

export default function SecondPost() {
    return (
        <Layout>
            <h1>This is my second post</h1>
            <Link href="/">Back to home</Link>
        </Layout>
    );
}