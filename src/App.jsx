import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import LinearProgress from '@mui/material/LinearProgress';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import { Line } from 'react-chartjs-2';
import { red } from '@mui/material/colors';
import { ColorBox } from './../../sample_demo_app/src/ColorBox';
import { createTheme } from '@mui/material/styles';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


ChartJS.register(ArcElement, Tooltip, Legend);

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
  )
}

function Dashboard(){
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 18,
    borderRadius: 5,
  }));
//---------------------------------- bar cart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};

const labels = ['Jan','Feb','Mar','Apr', 'May','Jun','Jul','Agu','Sep','Oct','Nov','Dec'];
const datas = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: [0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000],
      borderColor: 'dodgerblue',
      backgroundColor: 'white',
    },
  ],
};
  // ------------------------------circle
  const data = {
    datasets: [
      {
        labels: ['bule', 'green', 'skyblue'],
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


  return(
    <div className="main">
      <div className="dashboard">
        <h1 className='head'>Dashboard</h1>
        <button className='report'><DownloadIcon />Generate Report</button>
      </div>
      <div className="box1">
        <div className="boxbody1">
          <div className="bodycont">
            <div className="content1">
              <p className='type1'>EARNINGS (MONTHLY)</p>
              <p className='price'>$40,000</p>
            </div>
            <div className="content2">
              <p>
                <CalendarTodayRoundedIcon />
              </p>
            </div>
          </div>
        </div>
        <div className="boxbody2">
          <div className="bodycont">
            <div className="content1">
              <p className='type2'>EARNINGS (ANNUAL)</p>
              <p className='price'>$215,000</p>
            </div>
            <div className="content2">
              <p><AttachMoneyRoundedIcon /> </p>
            </div>
          </div>
        </div>
        <div className="boxbody3">
          <div className="bodycont">
            <div className="content1">
              <p className='type3'>TASKS</p>
              <div className="pars">
                <p className='price1'>50%</p>
                <BorderLinearProgress variant="determinate" color="info" value={50} className="bar"/>
              </div>
              {/* <p className='price1'>50%<BorderLinearProgress variant="determinate" value={50} className="bar"/></p> */}
            </div>
            <div className="content2">
              <p><AssignmentRoundedIcon /></p>
            </div>
          </div>
        </div>
        <div className="boxbody4">
          <div className="bodycont">
            <div className="content1">
              <p className='type4'>PENDING REQUESTS</p>
              <p className='price'>18</p>
            </div>
            <div className="content2">
              <p><ForumRoundedIcon/></p>
            </div>
          </div>
        </div>
      </div>
                  {/* box 2 start point */}
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
            <Line options={options} data={datas} />
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
            <Doughnut data={data}  />
          </div>
        </div>
      </div>
      
      {/* Projects, Illustrations, Development Approach */}
      <div className="box3">
        <div className="column1">
          <div className="projects">
            <div className='project_tittle'>
              <p>Projects</p> 
            </div>
            <div className="project1">
              <div className="project_content">
                <p>Server Migration</p>
                <p>20%</p>
              </div>
              <BorderLinearProgress variant="determinate" color='error' value={20} className="bar1"/>
            </div>
            <div className="project2">
              <div className="project_content">
                <p>Sales Tracking</p>
                <p>40%</p>
              </div>
              <BorderLinearProgress color="warning" variant="determinate" value={40} className="bar1"/>
            </div>
            <div className="project3">
              <div className="project_content">
                <p>Customer Database</p>
                <p>60%</p>
              </div>
              <BorderLinearProgress color='primary' variant="determinate" value={60} className="bar1"/>
            </div>
            <div className="project4">
              <div className="project_content">
                <p>Payout Details</p>
                <p>80%</p>
              </div>
              <BorderLinearProgress variant="determinate" color="info" value={80} className="bar1"/>
            </div>
            <div className="project5">
              <div className="project_content">
                <p>Account Setup</p>
                <p>Complete!</p>
              </div>
              <BorderLinearProgress variant="determinate" value={100} color="success" className="bar1"/>
            </div>
          </div>
          <div className="colorbox">
            <div className="Primary"> 
              <p className="txt">Primary</p>
              <p className="txt1">#4e73df</p>
            </div>
            <div className="Success">
              <p className="txt">Success</p>
              <p className="txt1">#1cc88a</p>
            </div>
            <div className="Info">
              <p className="txt">Info</p>
              <p className="txt1">#36b9cc</p>
            </div>
            <div className="Warning">
              <p className="txt">Warning</p>
              <p className="txt1">#f6c23e</p>
            </div>
            <div className="Danger">
              <p className="txt">Danger</p>
              <p className="txt1">#e74a3b</p>
            </div>
            <div className="Secondary">
              <p className="txt">Secondary </p>
              <p className="txt1">#858796</p>
            </div>
            <div className="Light">
              <p className="txt">Light</p>
              <p className="txt1">#f8f9fc</p>
            </div>
            <div className="Dark">
              <p className="txt">Dark</p>
              <p className="txt1">#5a5c69</p>
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="Illustrations">
            <div className='Illustrations_tittle'>
              <p>Illustrations</p>
              
            </div>
            <div className='Illustrations_content'>
              <div className="Illustrations_pic">
                <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="Illustrations content picture" className="picture"/>
              </div>
              <p className="txtcontent">Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
            </div>
          </div>
            <div className='Development_Approach'>
              <div className='Development_Approach_tittle'>
                <p>Development Approach</p>
              </div>
              <div className="txtcontent">
                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App
