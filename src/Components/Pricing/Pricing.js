import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

export default function Pricing() {
  return (
    <div>
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '34px', marginTop: '3%' }}>PRICING</h2>
    <Card sx={{ width: 300, minWidth: 200, maxWidth: '100%', marginLeft: '150px' ,marginTop: '5%', backgroundColor: '#9DB2BF'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Free
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: 'green' }}>
            ₹0
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Forever Free
        </Typography>
        <Typography variant="body2">
        Recruitment basics for startups looking to hire their first teams.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">TRY NOW</Button>
      </CardActions>
    </Card>
    <Card sx={{ width: 300, minWidth: 200, maxWidth: '100%', marginLeft: '40%' ,marginTop: '-14%', backgroundColor: '#9DB2BF'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Standard
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: 'green' }}>
            ₹1250
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Recruiter/month billed annually
        </Typography>
        <Typography variant="body2">
        Recruitment core for businesses looking to expand their workforce.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">TRY NOW</Button>
      </CardActions>
    </Card>
    <Card sx={{ width: 300, minWidth: 200, maxWidth: '100%', marginLeft: '70%' ,marginTop: '-14%', backgroundColor: '#9DB2BF'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Enterprise
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: 'green' }}>
            ₹2250
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Recruiter/month billed annually
        </Typography>
        <Typography variant="body2">
        AI-powered recruitment for custom automation and hiring in bulk.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">TRY NOW</Button>
      </CardActions>
    </Card>
    </div>
  );
}
