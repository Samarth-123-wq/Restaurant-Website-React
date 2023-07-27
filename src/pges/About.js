import React from 'react'
import Layout from '../Layout/Layout'
import {Box, Typography} from '@mui/material'
const About = () => {
  return (
    <Layout>
        <Box sx = {{
          textAlign : "center",
          my : 15,
          p : 2,
          "& h4":{
            fontWeight : "bold",
            my:2,
            fontSize : "2rem",
          },
            "& p":{
              textAlign:"justify",
            },
            "@media (max-width:600px)":{
              mt:0,
            }
        }}>
          <Typography variant='h4'>
            Welcome here 
          </Typography>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius amet quibusdam quidem odit, officia dolorem libero ab porro nihil ratione tempora facere a vitae deleniti culpa totam natus itaque! Quis natus consequatur hic minus laboriosam, velit illum explicabo sit sapiente sequi! Sint possimus nam, provident earum ullam quidem consequuntur tempore eveniet voluptatem explicabo pariatur magnam, ipsa repudiandae. Ab ullam alias quaerat quisquam totam quos, sunt, laboriosam excepturi quasi quidem laborum praesentium voluptates necessitatibus deleniti, ipsum temporibus hic. At obcaecati quasi veniam dolorum exercitationem voluptatum quibusdam rerum, enim quod et voluptatibus? Eaque inventore libero aspernatur natus modi quia atque laborum et.
          </p>
          <br />
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem delectus enim autem iusto alias, vel aut maxime hic ratione assumenda itaque reprehenderit veniam pariatur molestiae nobis nemo sit doloribus possimus fuga expedita placeat soluta libero voluptates? Et, facere eos. Possimus fuga, temporibus reprehenderit nesciunt hic illum delectus aperiam! Iure impedit amet consequuntur accusamus sit commodi reprehenderit, eius eaque fugit, at, esse minima quo possimus ad recusandae cupiditate ullam incidunt velit tempore harum earum facere dolores libero enim. Deserunt, voluptas reiciendis soluta commodi at explicabo vel similique natus amet sapiente. Cumque ipsum esse vero at omnis repellendus non animi quo?
          </p>
        </Box>
    </Layout>
  )
}

export default About
