import Mygrid from "./Mygrid"
import Typography from '@material-ui/core/Typography';
import DataTable from "./DataTable"
import Box from '@material-ui/core/Box';

function Wrapper() {
  return (
      <Box p={4}>
            <Box mb={4}>
                <Typography variant="h4" component="h4">
                    Grid Example
                </Typography>
                <Mygrid></Mygrid>
            </Box>
            <Box mb={4}>
                <Typography variant="h4" component="h2">
                    Data Table
                </Typography>
                <DataTable  />
            </Box>
      </Box>
  );
}

export default Wrapper;