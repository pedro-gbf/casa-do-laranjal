import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Modal from './components/Modal';
import AnimatedLogo from './components/AnimatedLogo';

const App = () => {
  const { t } = useTranslation();
  const [modalContent, setModalContent] = useState(null);

  const handleButtonClick = (content) => {
    setModalContent(content);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Flex container that changes direction based on screen size */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Logo container */}
          <div className="flex-shrink-0">
            <AnimatedLogo />
          </div>
          
          {/* Buttons container - vertical stack */}
          <div className="flex flex-col gap-6 md:justify-center w-full md:w-auto">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => handleButtonClick({
                  title: t(`button${num}.title`),
                  body: t(`button${num}.content`),
                })}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-80 text-xl font-medium"
              >
                {t(`button${num}.label`)}
              </button>
            ))}
          </div>
        </div>
      </main>

      <Modal
        isOpen={!!modalContent}
        onClose={() => setModalContent(null)}
        content={modalContent}
      />
    </div>
  );
};

export default App;