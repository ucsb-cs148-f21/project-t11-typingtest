import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./LangButton.css";

const langs = [
  {
    id: 1,
    name: 'C++',
    version: 11,
    link: "/Cpp"
   },
  {
    id: 2,
    name: 'Python',
    version: 3,
    link: "/Python"
  },
  {
    id: 3,
    name: 'Java',
    version: 17,
    link: "/Java"
   }
]
  
const langList = langs.map(lang => (
  <Link to={lang.link}>
    <button type="button" className="LangButton">
      <Typography sx={{ fontSize: 20 }} color='#3699cf' gutterBottom>
        {lang.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        version.{lang.version}
      </Typography>
    </button>
  </Link>
))

export default function OutlinedCard() {
  return (
    <Box sx={{width: 300, m: 10, px: 70}}>
      {langList}
    </Box>
  );
}