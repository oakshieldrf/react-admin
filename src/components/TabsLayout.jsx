import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { tokens} from '../theme';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabsLayout({items, tabTitles}) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [valueTab, setValueTab] = useState(0);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };


  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={valueTab} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          indicatorColor={colors.greenAccent[200]}
          textColor={colors.greenAccent[200]}
        >
          {tabTitles.map((tab, key) => <Tab label={tab} {...a11yProps(0)}/>)}
        </Tabs>
      </Box>
      {items.map((tab, key) => <TabPanel value={valueTab} index={key}>{tab}</TabPanel>)}
      {}
    </Box>
  );
}

export {TabsLayout}