import { useEffect } from "react";

const WeatherWidget = () => {
  useEffect(() => {
    const scriptId = "weatherwidget-io-js";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://weatherwidget.io/js/widget.min.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // if already loaded, refresh widget
      if (window.__weatherwidget_init) window.__weatherwidget_init();
    }
  }, []);

  return (
    <a
      className="weatherwidget-io"
      href="https://forecast7.com/en/27d7268d82/sukkur/"
      data-label_1="SUKKUR"
      data-label_2="WEATHER"
      data-theme="original"
    >
      SUKKUR WEATHER
    </a>
  );
};

export default WeatherWidget;
