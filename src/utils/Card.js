import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const codeString = 'vector<int> twoSum(vector<int>& nums, int target) {';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Coding problems
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography>
            <SyntaxHighlighter language="c++" style={docco}>
            {codeString}
            </SyntaxHighlighter>
        </Typography>
        <Typography variant="body2">
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
