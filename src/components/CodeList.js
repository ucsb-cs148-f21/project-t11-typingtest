/*import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

export default class CodeList extends React.Component {
    state = {
        persons : [],
    };

    componentDidMount(){
        axios.get('http://127.0.0.1:5000/codesnippet/Java').then(res=> {
            console.log(res);
            this.setState({persons: res.data});
        });
    }


    render(){
        return this.state.persons.map(person => <li>{person.index}</li>);
    }
}*/

import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CodeList = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "http://127.0.0.1:5000/codesnippet/Java"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Product Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {item.index}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.difficulty}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CodeList;