import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Banner from '../images/banner.jpeg'
import '../styles/homestyles.css'
const Home = () => {
  return (
    <>
      <Layout>
        <div className="home" style={{backgroundImage : `url(${Banner})`}}>
           <div className='homeContent'>
            <h1>MY FOOD WEBSITE</h1>
            <p>Best Food In India</p>
            <Link>
            <button>
              ORDER NOW
            </button>
            </Link>
           </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
