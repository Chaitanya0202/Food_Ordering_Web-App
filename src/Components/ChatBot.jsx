// Create a Chatbot component
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '82e31ebc-dfa0-4d53-a77f-272edcf4362f',
        hostUrl: 'https://mediafiles.botpress.cloud/82e31ebc-dfa0-4d53-a77f-272edcf4362f/webchat/bot.html',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'Chat-bot-food',
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
