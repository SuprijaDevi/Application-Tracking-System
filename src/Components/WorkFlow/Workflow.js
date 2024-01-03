import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Create a resume that adheres to \n ATS standards.',
  'Get expert feedback\n tailored to what recruiters seek\n for your resume.',
  'Customize your resume instantly\n by adding keywords for a targeted job.',
];

export default function Workflow() {
  return (
    <div>
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '34px', marginTop: '3%' }}>WORKFLOW</h2><br />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel sx={{ whiteSpace: 'pre-line' }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
