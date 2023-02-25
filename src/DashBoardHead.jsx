import DownloadIcon from '@mui/icons-material/Download';

export function DashBoardHead() {
  return (
    <div className="dashboard_header">
      <h1 className='head'>Dashboard</h1>
      <button className='report'><DownloadIcon />Generate Report</button>
    </div>
  );
}
