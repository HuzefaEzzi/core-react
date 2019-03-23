import React, { Component } from 'react';
import NavMenu  from './NavMenu';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withRoot from '../withRoot';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface IForecast{
  dateFormatted :string;
  temperatureC :string;
  temperatureF :string;
  summary :string;
}
const styles = (theme:Theme) => createStyles({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },

  });

class FetchData extends Component<WithStyles<typeof styles>> {
  displayName = FetchData.name
  state:{forecasts: IForecast[], loading: boolean};
  constructor(props:any) {
    super(props);
    this.state = { forecasts: [], loading: true };

    fetch('api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });
  }

  static renderForecastsTable(forecasts:IForecast[],  classes:any) {
    return (
<Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Temp. (C)</TableCell>
            <TableCell align="right">Temp. (F)</TableCell>
            <TableCell align="right">Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forecasts.map(row => (
            <TableRow key={row.dateFormatted}>
              <TableCell component="th" scope="row">
                {row.dateFormatted}
              </TableCell>
              <TableCell align="right">{row.temperatureC}</TableCell>
              <TableCell align="right">{row.temperatureF}</TableCell>
              <TableCell align="right">{row.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts, this.props.classes);

    return (
      <div>
        <h1>Weather forecast</h1>
        {contents}
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(FetchData));
