
window.watsonAssistantChatOptions = {
    integrationID: "e5e6eb42-3ea6-40b4-bdc3-aa545ca99087", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "9db187e1-92ba-45f2-b164-35a4cb381d8c", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
