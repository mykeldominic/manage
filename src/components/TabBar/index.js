import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className="nav-tabs">
      <AppBar position="static" className="t-nav-tab">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab className="t-nav-link" label="Personal information" href="/nav-one" />
          <LinkTab className="t-nav-link" label="Change password" href="/nav-two" />
        </Tabs>
      </AppBar>
      {value === 0 &&
          <TabContainer className="tabcontent">
              <form className="t-form">
                  <div className="inputgroup">
                      <p className="a-p">Admin name</p>
                      <input type="text" className="input-field" value="Emeka Michael" />
                  </div>
                  <div className="inputgroup">
                      <p className="a-p">Admin email</p>
                      <input type="email" className="input-field" value="emeka@jaizbankplc.com" />
                  </div>

                  <Button className="t-save-changes">SAVE CHANGES</Button>
              </form>
          </TabContainer>
      }
      {value === 1 &&
          <TabContainer className="tabcontent">
              <form className="t-form">
                  <div className="inputgroup">
                      <p className="a-p">Old password</p>
                      <input type="password" className="input-field" />
                  </div>
                  <div className="inputgroup">
                      <p className="a-p">New password</p>
                      <input type="password" className="input-field" />
                  </div>

                  <Button className="t-save-changes">SAVE CHANGES</Button>
              </form>
          </TabContainer>
      }
    </div>
  );
}