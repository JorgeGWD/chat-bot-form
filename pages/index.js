import Head from 'next/head'
import './sass/styles.css'
import ChatBotForm from '../components/chatBotForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body one">

      </div>
      <div className="body two">
        
      </div>
      <ChatBotForm />
    </div>
  )
}