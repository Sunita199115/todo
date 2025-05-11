// App.js or Layout.js
import React from 'react';
import {
  AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, 
  ListItemIcon, ListItemText, Paper, Grid, LinearProgress,
  Button, Checkbox, FormControlLabel, Card, CardContent,
  Divider
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DocumentIcon from '@mui/icons-material/Description';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const drawerWidth = 240;

const todoItems = [
  { id: 12, text: 'Incomplete Credentialing Sections', status: 'Not Done' },
  { id: 5, text: 'Incomplete Directory Sections', status: 'Not Done' },
  { id: 1, text: 'Missing Required Document', status: 'Not Done' },
  { id: 1, text: 'Directory Confirmation expiring in 10 days', status: 'Suggested' },
  { id: 2, text: 'Reconcile Credentialing Data', status: 'Suggested' },
  { id: 3, text: 'Reconcile Directory Data', status: 'Suggested' },
];

const newsAlerts = [
  {
    title: 'Multi-Factor Authentication Coming Soon',
    date: '04/23/23 - 10:30 AM EST',
  },
  {
    title: 'Changes are coming to the Special Skills and Training Section for all Mental Health Practitioners.',
    date: '04/21/23 - 11:21 AM EST',
  }
];

function AppLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Top Navigation Bar */}
      <AppBar position="fixed" sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#1a237e' 
      }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            CAQH
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Left Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5'
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[
              { text: 'Home', icon: <HomeIcon /> },
              { text: 'Alerts', icon: <NotificationsIcon /> },
              { text: 'Profile', icon: <PersonIcon /> },
              { text: 'Locations', icon: <LocationOnIcon /> },
              { text: 'Documents', icon: <DocumentIcon /> },
              { text: 'Authorizations', icon: <VerifiedUserIcon /> },
            ].map((item) => (
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
     

        {/* Profile Cards */}
        <Grid container spacing={2} sx={{ mb: 4,display: 'flex'}} >
          <Grid item xs={2}>
               {/* Welcome Section */}
            <Typography variant="h5" sx={{ mb: 3 }}>
              Welcome Back,
            </Typography>
            <Typography variant="h4" sx={{ mb: 4 }}>
              Kendra Patel
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ flexGrow: 1 }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Credentialing Profile</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Progress: 13%
                </Typography>
                <LinearProgress variant="determinate" value={13} sx={{ mt: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button variant="text" color="primary">View Summary</Button>
                  <Button variant="contained" color="primary">CONTINUE</Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={5} sx={{ flexGrow: 1 }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Directory Profile</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Progress: 12%
                </Typography>
                <LinearProgress variant="determinate" value={12} sx={{ mt: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button variant="text" color="primary">View Summary</Button>
                  <Button variant="contained" color="primary">CONTINUE</Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* To Do Section and State Application */}
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">To Do</Typography>
                <Button color="primary">See All</Button>
              </Box>
              <List>
                {todoItems.map((item) => (
                  <ListItem key={item.id} sx={{ py: 1 }}>
                    <ListItemText  
                      primary={item.text}
                      secondary={
                        <Typography 
                          component="span" 
                          sx={{ 
                            backgroundColor: item.status === 'Not Done' ? '#ffebee' : '#e8f5e9',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '0.75rem'
                          }}
                        >
                          {item.status}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6">State Application</Typography>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <select style={{ width: '100%', padding: '8px' }}>
                    <option>Select</option>
                  </select>
                </Box>
                <Button variant="outlined">DOWNLOAD</Button>
              </Box>
              <FormControlLabel
                control={<Checkbox />}
                label="Include Supporting Documents"
                sx={{ mt: 2 }}
              />
            </Paper>

            {/* News Alerts */}
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">News Alerts</Typography>
                <Button color="primary">See All</Button>
              </Box>
              {newsAlerts.map((alert, index) => (
                <Card key={index} sx={{ mb: 2, backgroundColor: '#f5f5f5' }}>
                  <CardContent>
                    <Typography variant="body1">{alert.title}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {alert.date}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AppLayout;
