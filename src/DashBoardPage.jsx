import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

export function DashBoardPage() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 18,
    borderRadius: 5,
  }));
  return (
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
              <BorderLinearProgress variant="determinate" color="info" value={50} className="bar" />
            </div>
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
            <p><ForumRoundedIcon /></p>
          </div>
        </div>
      </div>
    </div>
  );
}
