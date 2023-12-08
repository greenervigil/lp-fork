import {
    Avatar,
    Badge,
    Button,
    Grid,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { faker } from '@faker-js/faker';
import { startCase } from 'lodash';

export type StudentsTableProps = unknown;

/**
 * @param {StudentsTableProps} props
 * @returns {JSX.Element}
 */
const StudentsTable: React.FC<StudentsTableProps> = (
    props: StudentsTableProps
): JSX.Element => {
    const generateStudent = () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName()
    });

    const COLOR_MAP = ['success', 'warning', 'info', 'error'];
    const CNT = 5;

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell width={50} />
                    <TableCell align="left" width={350}>
                        Name
                    </TableCell>
                    {Array(CNT)
                        .fill('')
                        .map((_, idx) => (
                            <TableCell key={idx} align="center">
                                {startCase(faker.word.adjective())}
                            </TableCell>
                        ))}
                    <TableCell width={100} />
                </TableRow>
            </TableHead>
            <TableBody>
                {Array(33)
                    .fill(0)
                    .map((_, rowIdx) => {
                        const { id, name } = generateStudent();
                        return (
                            <TableRow key={id}>
                                <TableCell align="center">
                                    {rowIdx === 2 && (
                                        <Tooltip title="Messages">
                                            <Avatar
                                                color="primary"
                                                sx={{
                                                    bgcolor: 'error.main',
                                                    width: 24,
                                                    height: 24
                                                }}
                                            >
                                                <Typography>2</Typography>
                                            </Avatar>
                                        </Tooltip>
                                    )}
                                </TableCell>
                                <TableCell align="left">
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Avatar
                                            sx={{ width: 32, height: 32 }}
                                            src={
                                                rowIdx === 2
                                                    ? '/avatars/2185184f-ffa9-48f2-8611-9893de06e4f6.svg'
                                                    : ''
                                            }
                                        />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {rowIdx === 2 && 'Anna Lacey'}
                                            {rowIdx !== 2 && name}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                {Array(CNT)
                                    .fill('')
                                    .map((_, colIdx) => (
                                        <TableCell key={colIdx} align="center">
                                            <Badge
                                                color="warning"
                                                badgeContent="!"
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left'
                                                }}
                                                invisible={
                                                    rowIdx !== 2 || colIdx !== 0
                                                }
                                            >
                                                <Badge
                                                    color="error"
                                                    variant="dot"
                                                    invisible={
                                                        rowIdx !== 2 ||
                                                        ![1, 2].includes(colIdx)
                                                    }
                                                >
                                                    <Button
                                                        variant="outlined"
                                                        // @ts-ignore
                                                        color={
                                                            COLOR_MAP[colIdx] ||
                                                            'inherit'
                                                        }
                                                        endIcon={
                                                            <ArrowDropDownIcon />
                                                        }
                                                    >
                                                        X
                                                    </Button>
                                                </Badge>
                                            </Badge>
                                        </TableCell>
                                    ))}
                                <TableCell align="right">
                                    <Tooltip title="More">
                                        <IconButton size="small">
                                            <MoreHorizIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        );
                    })}
            </TableBody>
        </Table>
    );
};

export default StudentsTable;
