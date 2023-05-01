import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts';

export default function Post() {
	return <Layout>...</Layout>
}

export async function getStaticProps({ params }) {
	const postData = getPostData(params.id);
	return {
	  props: {
		postData,
	  },
	};
  }