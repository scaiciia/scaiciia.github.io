import { Box, LinearProgress, ThemeProvider, Typography, createTheme } from "@mui/material";

function ProgressBarWithLabel(props) {
    let theme = createTheme({});
    theme = createTheme(theme, {
        palette: {
            custom: theme.palette.augmentColor({
                color: {
                    main: '#8EA7E9'
                },
                name: 'custom',
            }),
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '175px', mr: 1 }}>
                    <LinearProgress variant="determinate" value={props.now} color="custom" />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography sx={{ fontFamily: 'Unbounded', fontWeight: 300, fontSize: 10 }} variant="body2" color="text.secondary">
                        {props.label}
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ProgressBarWithLabel;