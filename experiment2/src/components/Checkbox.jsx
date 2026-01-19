import { Checkbox, Box, FormControlLabel, Badge, Paper } from "@mui/material";

export default function Check(){
    return(
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Badge badgeContent="Required" color="primary">
            <Paper sx={{ p: 1, px: 3, border: '1px solid #e0e0e0' }}>
                <FormControlLabel 
                    control={<Checkbox color="primary" />} 
                    label="I have read and agree to all information above." 
                />
            </Paper>
        </Badge>
    </Box>
    );
}