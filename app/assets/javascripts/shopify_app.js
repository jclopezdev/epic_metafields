// Small trick to avoid redirection to Shopify when entering to localhost
if (!window.location.href.match(/localhost/)) {
  document.addEventListener('DOMContentLoaded', function() {
    var data = document.getElementById('shopify-app-init').dataset;
    var AppBridge = window['app-bridge'];
    var createApp = AppBridge.default;
    window.app = createApp({
      apiKey: data.apiKey,
      shopOrigin: data.shopOrigin,
    });

    var actions = AppBridge.actions;
    var TitleBar = actions.TitleBar;
    TitleBar.create(app, {
      title: data.page,
    });
  });
}
