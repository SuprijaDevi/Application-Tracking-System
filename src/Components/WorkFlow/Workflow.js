import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = [
  { label: 'Create a resume that adheres to \n ATS standards.', color: '#9DB2BF', fontSize: '18px' },
  { label: 'Get expert feedback\n tailored to what recruiters seek\n for your resume.', color: '#9DB2BF', fontSize: '18px' },
  { label: 'Customize your resume instantly\n by adding keywords for a targeted job.', color: '#9DB2BF', fontSize: '18px' },
];

export default function Workflow() {
  return (
    <div>
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '34px', marginTop: '3%' }}>WORKFLOW</h2><br />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography sx={{ whiteSpace: 'pre-line', color: step.color, fontSize: step.fontSize }}>
                  {step.label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
