import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post(props) {
  return (
    <Layout>
      {props.postData.title}
      <br />
      {props.postData.id}
      <br />
      {props.postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
