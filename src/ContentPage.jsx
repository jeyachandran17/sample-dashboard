import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

export function ContentPage() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 18,
    borderRadius: 5,
  }));
  return (
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
            <BorderLinearProgress variant="determinate" color='error' value={20} className="bar1" />
          </div>
          <div className="project2">
            <div className="project_content">
              <p>Sales Tracking</p>
              <p>40%</p>
            </div>
            <BorderLinearProgress color="warning" variant="determinate" value={40} className="bar1" />
          </div>
          <div className="project3">
            <div className="project_content">
              <p>Customer Database</p>
              <p>60%</p>
            </div>
            <BorderLinearProgress color='primary' variant="determinate" value={60} className="bar1" />
          </div>
          <div className="project4">
            <div className="project_content">
              <p>Payout Details</p>
              <p>80%</p>
            </div>
            <BorderLinearProgress variant="determinate" color="info" value={80} className="bar1" />
          </div>
          <div className="project5">
            <div className="project_content">
              <p>Account Setup</p>
              <p>Complete!</p>
            </div>
            <BorderLinearProgress variant="determinate" value={100} color="success" className="bar1" />
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
              <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="Illustrations content picture" className="picture" />
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
  );
}
