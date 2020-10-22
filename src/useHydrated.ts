import {useEffect} from 'react';
import {DataStore} from '@aws-amplify/datastore';
import {Hub} from '@aws-amplify/core';

const useHydrated = () => {

  useEffect(() => {
    const dataStoreListener = Hub.listen ("datastore", data => {
      console.log('datastore event: ', data.payload);
      if (data.payload.event === "ready") {
        console.log('datastore ready');
      };
    });

    DataStore.start ();
    console.log('datastore sync started');

    return () => {
      dataStoreListener ();
    };
  }, []);

  return;
};

export default useHydrated;
