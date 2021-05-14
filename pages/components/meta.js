
import Head from 'next/head'


export default function Meta({title, author, description, keyword}) {

    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="author" content={author}/>
            <meta name="keywords" content={keyword} />
            <meta name="description" content={description} />
        </Head>
    )
}
