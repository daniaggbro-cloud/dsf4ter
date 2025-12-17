
import React from 'react';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-indigo-500 selection:text-white">
      {/* Background blobs for aesthetic depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>
      
      <main className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <LoginPage />
      </main>
      
      {/* Footer / Info */}
      <footer className="fixed bottom-6 w-full text-center text-slate-500 text-sm">
        <p>&copy; 2024 NovaPortal. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;
