import Head from 'next/head'

type Props = {
    title?: string
}

const Meta = ({ title }: Props) => {
    return (
        <Head>
            <title>{ title }</title>
            <meta property="og:title" content="Million Ways To ... ?!" />
            <meta property="og:type" content="" />
            <meta property="og:url" content="https://www.millionwaysto.com/" />
            <meta property="og:image" content="" />
            <meta name="description" content="Space to give horrible advice to other human beings!" />
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Meta