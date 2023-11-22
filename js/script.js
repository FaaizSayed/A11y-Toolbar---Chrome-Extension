// Load the Modal
(function () {
  var template =
    '<div id="AccessibilityChecker" aria-labelledby="OverlayContainer" role="complementary" tabindex="0" style="position:fixed;right:0;top:0;height:100%;width:30%;z-index:9999999;box-shadow: 0 0 35px -1px rgba(0,0,0,0.25);background-color:#fff;padding: 1em;overflow-y:auto;display:none"><span style="text-align:center;font-size:32px !important;margin: 0.5em 0 0.5em 0;font-family:sans-serif;color:#005A9C;border:none;cursor:pointer;" id="OverlayContainer">Accessibility Tools</span><div aria-label="Click to close the accessibilty result modal" style="border:none;background:#005A9C;color:#fff;font-size:26px;position:absolute;right:6px;top:17px;padding-bottom: 3px;border-radius:10px !important;width: 100px !important;height: 31px !important;line-height: 10px;cursor:pointer;display:flex;justify-content: center;padding-top: 4px;line-height:30px;" onclick=' +
    'document.getElementById("AccessibilityChecker").remove();document.getElementById("toggler").remove();document.getElementById("headingBeforeCSS").remove();' +
    '><span style="font-size:15px">Close <span> &times;</div><hr style="margin-top: 10px;border-top: 2px solid #bbbbbb;margin-bottom: 10px;" aria-hidden="true" role="presentation"><div id="AC-Modal-Body"></div><span style="position: absolute;bottom: 50px;display: block;background: #d0d0d0;padding: 5px 20px;font-size:12px !important">Created by <a target="_blank" href="https://in.linkedin.com/in/sayed-faaiz-shah-31050823b">Faaiz Sayed</a></span></div>';
  document.body.innerHTML += template;

  var togglertemplate =
    '<div tabindex="1" id="toggler" style="font-family:sans-serif;line-height:18px;color:#000 !important;position:fixed;right:10px;width:140px;z-index:999999999999999999 !important;border:1px solid #333;text-align:center;font-size: 18px;padding:10px;cursor:pointer !important;bottom:10px;background: #00f1ff !important;border-radius: 5px;font-weight: bold;box-shadow: 0 0 25px 5px rgba(0,0,0,0.3);" onclick=' +
    ' console.log(this.innerHTML);if(this.innerHTML==="Hide-Helper"){this.innerHTML="Show-Helper";}else{this.innerHTML="Hide-Helper";}"none"===document.getElementById("AccessibilityChecker").style.display?document.getElementById("AccessibilityChecker").style.display="block":document.getElementById("AccessibilityChecker").style.display="none";' +
    ">Show-Helper</div>";
  document.body.innerHTML += togglertemplate;
})();

// Create a global pointer to our modal body to append elements to it
const modalBody = document.getElementById("AC-Modal-Body");

// Highlight Helper flag
let flag = false;

// Load Controls
(function () {
  // Load Headings
  const heading1 = document.createElement("div");
  heading1.innerText = "Visual Toolkit";
  heading1.setAttribute(
    "style",
    "font-family: sans-serif;font-size:21px;color:#333;"
  );
  modalBody.appendChild(heading1);

  // Highlight Headings control
  const showheadingControl = document.createElement("button");
  showheadingControl.innerText = "Highlight Headings";
  showheadingControl.setAttribute("id", "showHeadings");
  showheadingControl.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(showheadingControl);

  // Highlight Links control
  const showLinkControl = document.createElement("button");
  showLinkControl.innerText = "Highlight Links";
  showLinkControl.setAttribute("id", "showLinks");
  showLinkControl.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(showLinkControl);

  // Highlight Buttons control
  const showButtonControl = document.createElement("button");
  showButtonControl.innerText = "Highlight Buttons";
  showButtonControl.setAttribute("id", "showButtons");
  showButtonControl.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(showButtonControl);

  // Set Keyboard Focus
  const keyboardFocus = document.createElement("button");
  keyboardFocus.innerText = "Set Keyboard Focus";
  keyboardFocus.setAttribute("id", "keyboardFocus");
  keyboardFocus.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(keyboardFocus);

  // Increase Font Size
  const fontSize = document.createElement("button");
  fontSize.innerText = "Increase Font Size";
  fontSize.setAttribute("id", "fontSize");
  fontSize.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(fontSize);

  // Change Font Family
  const fontFamily = document.createElement("button");
  fontFamily.innerText = "Set Font to San Serif";
  fontFamily.setAttribute("id", "fontFamily");
  fontFamily.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(fontFamily);

  // Increase Text spacing
  const textSpacing = document.createElement("button");
  textSpacing.innerText = "Set Text Spacing";
  textSpacing.setAttribute("id", "textSpacing");
  textSpacing.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(textSpacing);

  // Disable All Animations
  const disableAnimations = document.createElement("button");
  disableAnimations.innerText = "Disable Animations";
  disableAnimations.setAttribute("id", "disableAnimations");
  disableAnimations.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(disableAnimations);

  // High Contrats Mode
  const highContrastMode = document.createElement("button");
  highContrastMode.innerText = "High Contrast Mode";
  highContrastMode.setAttribute("id", "highContrastMode");
  highContrastMode.setAttribute(
    "style",
    "margin-right: 10px;margin-top:10px;background-color: #04e57e !important;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;color: #333 !important;padding: 5px !important;margin-bottom:5px;"
  );
  modalBody.appendChild(highContrastMode);
})();

// Highlight Headings
const highlightHeadings = () => {
  const HeadingHighlighter = document.createElement("div");
  HeadingHighlighter.setAttribute("id", "headingBeforeCSSDiv");
  const HeadingHighlighterElement = document.querySelector("head");
  if (!flag) {
    const HeadingCSS =
      '<style id="headingBeforeCSS">h1, h2, h3, h4, h5, h6, [role=heading]{border:2px dashed red;background: #fefe00!important;color: #000 !important;} [role=heading][aria-level]::before,h1::before,h2::before,h3::before,h4::before,h5::before,h6::before{margin-right:5px;background:#000;color:#fff;font-size:16px;padding:5px;border-radius:50px;border:1px solid red}[role=heading][aria-level="1"]::before,h1::before{content:"H1"}[aria-level="2"]::before,h2::before{content:"H2"}[aria-level="3"]::before,h3::before{content:"H3"}[aria-level="4"]::before,h4::before{content:"H4"}[aria-level="5"]::before,h5::before{content:"H5"}[aria-level="6"]::before,h6::before{content:"H6"}</style>';
    HeadingHighlighterElement.appendChild(HeadingHighlighter).innerHTML =
      HeadingCSS;
    document.getElementById("showHeadings").innerText = "Unhighlight Headings";
    document.getElementById("showHeadings").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    flag = true;
  } else {
    document.getElementById("headingBeforeCSSDiv")?.remove();
    document.getElementById("showHeadings").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("showHeadings").innerText = "Highlight Headings";
    flag = false;
  }
};

// Highlight Links
const highlightlinks = () => {
  const LinkHighlighter = document.createElement("div");
  LinkHighlighter.setAttribute("id", "LinksCSSDiv");
  const LinkHighlighterElement = document.querySelector("head");
  if (!flag) {
    const LinkCSS =
      '<style id="LinkCSS">a, [role=link]{border:2px dashed red;background: #fefe00!important;color: #000 !important;} </style>';
    LinkHighlighterElement.appendChild(LinkHighlighter).innerHTML = LinkCSS;
    document.getElementById("showLinks").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("showLinks").innerText = "Unhighlight Links";
    flag = true;
  } else {
    document.getElementById("LinksCSSDiv").remove();
    document.getElementById("showLinks").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("showLinks").innerText = "Highlight Links";
    flag = false;
  }
};

// Highlight Buttons
const highlightButtons = () => {
  const ButtonHighlighter = document.createElement("div");
  ButtonHighlighter.setAttribute("id", "ButtonCSSDiv");
  const ButtonHighlighterElement = document.querySelector("head");
  if (!flag) {
    const ButtonCSS =
      '<style id="ButtonCSS">button, [role=button]{border:2px dashed red  !important;background: #fefe00 !important;} </style>';
    ButtonHighlighterElement.appendChild(ButtonHighlighter).innerHTML =
      ButtonCSS;
    document.getElementById("showButtons").innerText = "Unhighlight Buttons";
    document.getElementById("showButtons").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    flag = true;
  } else {
    document.getElementById("ButtonCSSDiv").remove();
    document.getElementById("showButtons").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("showButtons").innerText = "Highlight Buttons";
    flag = false;
  }
};

// Set Keyboard Focus
const setKeyboardFocus = () => {
  const KeyboardFocus = document.createElement("div");
  KeyboardFocus.setAttribute("id", "FocusCSSDiv");
  const KeyboardFocusElement = document.querySelector("head");
  if (!flag) {
    const KeyboardFocusCSS =
      '<style id="FocusCSS">a:focus, button:focus, [role=link]:focus, [role=button]:focus, input:focus {border: 5px solid red !important;}</style>';
    KeyboardFocusElement.appendChild(KeyboardFocus).innerHTML =
      KeyboardFocusCSS;
    document.getElementById("keyboardFocus").innerText = "Unset Keyboard Focus";
    document.getElementById("keyboardFocus").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    flag = true;
  } else {
    document.getElementById("FocusCSSDiv").remove();
    document.getElementById("keyboardFocus").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("keyboardFocus").innerText = "Set Keyboard Focus";
    flag = false;
  }
};

// Increase Font Size
const setFontSize = () => {
  const fontSize = document.createElement("div");
  fontSize.setAttribute("id", "fontSizeCSSDiv");
  const fontSizeElement = document.querySelector("head");
  if (!flag) {
    const fontSizeCSS =
      '<style id="FontSizeCSS">html, body, a, p, h1, h2, h3, h4, h5, h6 {font-size:135% !important;}</style>';
      fontSizeElement.appendChild(fontSize).innerHTML =
    fontSizeCSS;
    document.getElementById("fontSize").innerText = "Decrease Font Size";
    document.getElementById("fontSize").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    flag = true;
  } else {
    document.getElementById("fontSizeCSSDiv").remove();
    document.getElementById("fontSize").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("fontSize").innerText = "Increase Font Size";
    flag = false;
  }
};

// set font family
const setFontFamily = () => {
  const fontFamily = document.createElement("div");
  fontFamily.setAttribute("id", "fontFamilyCSSDiv");
  const fontFamilyElement = document.querySelector("head");
  if (!flag) {
    const fontFamilyCSS =
      '<style id="fontFamilyeCSS">html, body, a, p, h1, h2, h3, h4, h5, h6 {font-family: sans-serif !important;}</style>';
      fontFamilyElement.appendChild(fontFamily).innerHTML =
    fontFamilyCSS;
    document.getElementById("fontFamily").innerText = "Revert to website Font";
    document.getElementById("fontFamily").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    flag = true;
  } else {
    document.getElementById("fontFamilyCSSDiv").remove();
    document.getElementById("fontFamily").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("fontFamily").innerText = "Set Font to San Serif";
    flag = false;
  }
};

// set text spacing
const setTextSpacing = () => {
  const textSpacing = document.createElement("div");
  textSpacing.setAttribute("id", "textSpacingCSSDiv");
  const textSpacingElement = document.querySelector("head");
  if (!flag) {
    const textSpacingCSS =
      '<style id="textSpacingCSS">html, body, a, p, h1, h2, h3, h4, h5, h6 {line-height: 1.5em !important;letter-spacing: .12em !important;word-spacing: 0.16em !important;}</style>';
      textSpacingElement.appendChild(textSpacing).innerHTML =
      textSpacingCSS;
    document.getElementById("textSpacing").innerText = "Revert test spacing";
    document.getElementById("textSpacing").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    flag = true;
  } else {
    document.getElementById("textSpacingCSSDiv").remove();
    document.getElementById("textSpacing").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("textSpacing").innerText = "Set Text Spacing";
    flag = false;
  }
};

// disable Animation
const disableAnimation = () => {
  const disableAnimations = document.createElement("div");
  disableAnimations.setAttribute("id", "disableAnimationsCSSDiv");
  const disableAnimationsElement = document.querySelector("head");
  if (!flag) {
    const disableAnimationsCSS =
      '<style id="disableAnimationsCSS">@media (prefers-reduced-motion: reduce) {html, body, a, button{animation: none;};}</style>';
      disableAnimationsElement.appendChild(disableAnimations).innerHTML =
      disableAnimationsCSS;
    document.getElementById("disableAnimations").innerText = "Enable Animations";
    document.getElementById("disableAnimations").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    flag = true;
  } else {
    document.getElementById("disableAnimationsCSSDiv").remove();
    document.getElementById("disableAnimations").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("disableAnimations").innerText = "Disable Animations";
    flag = false;
  }
};

// set High Contrast Mode
const setHighContrastMode = () => {
  const highContrastMode = document.createElement("div");
  highContrastMode.setAttribute("id", "highContrastModeCSSDiv");
  const highContrastModeElement = document.querySelector("head");
  if (!flag) {
    const highContrastModeCSS =
      '<style id="highContrastModeCSS">html, body, ul, header, blockquote, section, nav, footer, main, aside, div, h1, h2, h3, h4, h5, h6, p, span {background-color: #000 !important;color:#fff !important;} a {color: #0984ff; !important}</style>';
      highContrastModeElement.appendChild(highContrastMode).innerHTML =
      highContrastModeCSS;
    document.getElementById("highContrastMode").innerText = "Disable High Contrast Mode";
    document.getElementById("highContrastMode").style = "background-color: #0a5792 !important;color: #fff !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    flag = true;
  } else {
    document.getElementById("highContrastModeCSSDiv").remove();
    document.getElementById("highContrastMode").style = "background-color: #04e57e !important;color: #333 !important;margin-right: 10px;margin-top: 10px;border: 1px solid #02a45a !important;border-radius: 5px !important;font-size: 14px !important;font-weight: bold !important;width: 47% !important;max-width: 47% !important;text-align: center !important;padding: 5px !important;margin-bottom: 5px;";
    document.getElementById("highContrastMode").innerText = "High Contrast Mode";
    flag = false;
  }
};

// Add click listner on controls
(function () {
  // Highlight Headings control
  document
    .getElementById("showHeadings")
    .addEventListener("click", highlightHeadings);

  // Highlight Link control
  document
    .getElementById("showLinks")
    .addEventListener("click", highlightlinks);

  // Highlight button control
  document
    .getElementById("showButtons")
    .addEventListener("click", highlightButtons);

  // Set Focus
  document
    .getElementById("keyboardFocus")
    .addEventListener("click", setKeyboardFocus);

  // Increase Font size
  document
  .getElementById("fontSize")
  .addEventListener("click", setFontSize);

  // Set Font Family
  document
  .getElementById("fontFamily")
  .addEventListener("click", setFontFamily);

  // Set Text Spacing
  document
  .getElementById("textSpacing")
  .addEventListener("click", setTextSpacing);

  // Disable Animation
  document
  .getElementById("disableAnimations")
  .addEventListener("click", disableAnimation);

  // High Contrast Mode
  document
  .getElementById("highContrastMode")
  .addEventListener("click", setHighContrastMode);
})();
