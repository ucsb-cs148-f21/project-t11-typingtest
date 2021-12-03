import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import "./LangButton.css";

const langs = [
  {
    id: 1,
    name: 'C++',
    version: 11,
    link: "/Cpp",
    dis:"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language."
   },
  {
    id: 2,
    name: 'Python',
    version: 3,
    link: "/Python",
    dis:"Python is an interpreted high-level general-purpose programming language."
  },
  {
    id: 3,
    name: 'Java',
    version: 17,
    link: "/Java",
    dis:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
   }
]
  
const langList = langs.map(lang => (
  <Link to={lang.link}>
    <Card className="LangButton">
      <Typography sx={{ fontSize: 23 }} color='#3699cf' gutterBottom>
        {lang.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        version.{lang.version}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {lang.dis}
      </Typography>
    </Card>
  </Link>
))

export default function OutlinedCard() {
  return (
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
   {langList}
  </Grid>   
   
</Grid> 
  );
}