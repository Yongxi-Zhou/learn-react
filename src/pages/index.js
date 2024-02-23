// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
// import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import Form from './components/snapshot2'
import Counter from './components/queueUpdates'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import Artists from './components/artistsArr'
import ArtistList from './qcomps/artistsRemoveArr'
import ArrObj from './qcomps/arrObj'

export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile /> */}
        {/* <PersonData/> */}
        {/* <Scoreboard /> */}
        <ArrObj />
    </div>
  )
}
