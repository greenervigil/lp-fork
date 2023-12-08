import { Button, Grid, Stack, TextField, Typography } from '@mui/material';

import EvidenceTable from '@/components/tables/evidence-table';
import { Metadata } from 'next';
import ObjectivesTable from '@/components/tables/objectives-table';

const Page = () => {
    return (
        <Grid container spacing={4} maxWidth="xl">
            <Grid item md={12}>
                <Typography variant="h2">Naming Conventions</Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h3" paragraph>
                    Objective Name
                </Typography>
                <Stack direction="row" spacing={2}>
                    <TextField
                        fullWidth
                        placeholder="Examples: report card items, reporting standards,
                    standards, learning expectations, course objectives, etc."
                    />
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Save changes
                    </Button>
                </Stack>
            </Grid>
            <Grid item md={12}>
                <Typography variant="subtitle1" paragraph>
                    When your students provide you evidence of learning, what do
                    you call the thing they are providing?
                </Typography>
                <ObjectivesTable />
            </Grid>
            <Grid item md={12}>
                <Typography variant="h3" paragraph>
                    Evidence Type
                </Typography>
                <Stack direction="row" spacing={2}>
                    <TextField
                        fullWidth
                        placeholder="Examples: task, evidence, assignment, assessment,
                    etc."
                    />
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        Save changes
                    </Button>
                </Stack>
            </Grid>
            <Grid item md={12}>
                <Typography variant="subtitle1" paragraph>
                    What do you want to call the descriptors of how well a
                    student completed Evidence?
                </Typography>
                <EvidenceTable />
            </Grid>
        </Grid>
    );
};

export const metadata: Metadata = {
    title: 'Naming Conventions | Learning Portrait',
    description: 'A grade book that thinks like you do.'
};

export default Page;
