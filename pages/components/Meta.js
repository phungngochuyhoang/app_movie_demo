import Head from 'next/head';


const Meta = function ({ title, author, description, keywords }) {

    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>)
}

Meta.defaultProps = {
    author: "Hoang Phung",
    description: "Hot movie 2021",
    keywords: "demo app moive, app movie"
}

export default Meta