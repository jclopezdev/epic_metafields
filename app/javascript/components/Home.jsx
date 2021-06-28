import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { useHistory } from 'react-router-dom';
import { AlertContainer, Alert } from 'react-bs-notifier';
import differenceBy from 'lodash/differenceBy';
import Navigation from './Navigation';

const Home = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    const { searchParams } = new URL(location.href);
  }, []);

  return (
    <div>
      <Navigation/>
        { alert.show &&
            <AlertContainer position="bottom-right">
              <Alert
                type={alert.type}
                onDismiss={() => {
                  setAlert({ show: false });
                }}
                timeout={2000}>
                {alert.message}
            </Alert>
          </AlertContainer>
        }
      Hello!
      </div>
  );
};

export default Home;
