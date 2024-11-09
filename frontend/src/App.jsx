// App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UsernameInput from './components/Input';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Fetch Accelerometer Data</h1>
        <UsernameInput/>
      </div>
    </QueryClientProvider>
  );
};

export default App;
