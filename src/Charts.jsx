import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function Charts() {

  const BarChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: "data",
        data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
        borderColor: 'dodgerblue',
        backgroundColor: 'white',
      },
    ],
  };

  const doughnutChart = {
    labels: ['bule', 'green', 'skyblue'],
    datasets: [
      {
        label: '# of Votes',
        data: [55, 30, 15],
        backgroundColor: [
          'blue',
          '#1cc88a',
          'skyblue',
        ],
        borderColor: [
          'blue',
          '#1cc88a',
          'skyblue',
        ],
        borderWidth: 1,
      },
    ],
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="box2">
      <div className="earnings_overview">
        <div className="earnings_overview_tittle">
          <p className="earnings_overview_heading">Earnings Overview</p>
            <IconButton aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><MoreIcon /></IconButton>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
              <MenuItem onClick={handleClose}>Action</MenuItem>
              <MenuItem onClick={handleClose}>Another action</MenuItem><hr/>
              <MenuItem onClick={handleClose}>something else</MenuItem>
            </Menu>
        </div>
        <div className="earnings_overview_part">
          <Line data={BarChart} />
        </div>
      </div>
      <div className='revenue_sources'>
        <div className="revenue_sources-tittle">
          <p className="revenue_heading">Revenue Sources</p>
          <IconButton aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><MoreIcon /></IconButton>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
              <MenuItem onClick={handleClose}>Action</MenuItem>
              <MenuItem onClick={handleClose}>Another action</MenuItem><hr/>
              <MenuItem onClick={handleClose}>something else</MenuItem>
            </Menu>
        </div>
        <div className="revenue_part">
          <Doughnut data={doughnutChart} />
        </div>
      </div>
    </div>
  );
}
