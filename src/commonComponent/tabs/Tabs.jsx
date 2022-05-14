import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from  "../../../styles/Tabs.module.css";
import FirstSection from '../../component/userWeb/firstSection/FirstSection';
import DesignTab from '../../component/userWeb/designTab/DesignTab';
import SecondSection from '../../component/userWeb/secondSection/SecondSection';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>The Axisbits Blog</h1>

        <Box sx={{ width: '100%' }}>
      <div className={styles.scroll}>

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="  All posts" {...a11yProps(0)} />
              <Tab label="Design" {...a11yProps(1)} />
              <Tab label="Healthcare" {...a11yProps(2)} />
              <Tab label="Startups" {...a11yProps(3)} />
              <Tab label="Mobile" {...a11yProps(4)} />
              <Tab label="Cybersecurity" {...a11yProps(5)} />
              <Tab label="Blockchain" {...a11yProps(6)} />

              <Tab label="Healthcare" {...a11yProps(7)} />
              <Tab label="Ed-tech" {...a11yProps(8)} />
            </Tabs>
          </Box>
          </div>
          <TabPanel value={value} index={0}>
            <FirstSection />
            <SecondSection/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DesignTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FirstSection />
            <SecondSection/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <DesignTab />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <FirstSection />
            <SecondSection/>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <DesignTab />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <FirstSection />
            <SecondSection/>
          </TabPanel>
          <TabPanel value={value} index={7}>
            <DesignTab />
          </TabPanel>
          <TabPanel value={value} index={8}>
            <FirstSection />
            <SecondSection/>
          </TabPanel>

        </Box>
   
    </div>
  );
}