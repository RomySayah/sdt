// This example is compatible with any ShapeDiver model ticket.

// ShapeDiver Viewer Initialisation
var initSdvApp = function(/*event*/) {
  // Settings can be defined here, or as attributes of the viewport container. Settings defined here take precedence.
  let _container = document.getElementById('sdv-container'); 
  let settings = {
    container: _container,
    ticket: "ecc4ce02008868b6bf5e44e1dc6238f9527738bd06eb7513be49c06c9bbe1d16eb7d11caa11f4008cb557f7b42eaba6016a06e1887caa63adabcb6d5fc88d5544f499bb3fd9e1c185cc6710ee8587647adeecf100b538666bb6d68e55e574c082caf265d278298134aa5214d7161cede9b01d097ef0e-ee7826b5e2ef57e47ff6a381cde160e2",
    modelViewUrl: "eu-central-1",
    showControlsInitial: true,
    showSettingsInitial: false,
  };
  // See http://app.shapediver.com/api/SDVApp.ParametricViewer.html for all settings available via the constructor.
  window.api = new SDVApp.ParametricViewer(settings);
};

// there is a slight chance that loading has been completed already
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSdvApp, false);
} else {
  initSdvApp();
}

