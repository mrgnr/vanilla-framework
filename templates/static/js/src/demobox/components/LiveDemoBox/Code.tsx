import React, {useEffect, useState} from 'react';
import Prism from 'prismjs';

// TODO: This should be a dumb component that just displays code
// Props should be an object with keys (html, js, css) that are mapped to strings of code
const Code = () => {
  const [html, setHtml] = useState('');

  // TODO: move fetching the HTML example to the LiveDemoBox component
  useEffect(() => {
    const type = 'caution';
    const theme = 'dark';
    const style = 'inline';
    const actions = 'true';
    const dismiss = 'true';
    const timestamp = 'true';

    const fetchData = async () => {
      try {
        const path = '/docs/examples/patterns/notifications/toast';
        const queryParams = `type=${type}&theme=${theme}&style=${style}&actions=${actions}&dismiss=${dismiss}&timestamp=${timestamp}`;
        const response = await fetch(`${path}?${queryParams}`);
        const text = await response.text();

        const bodyPattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
        const titlePattern = /<title[^>]*>((.|[\n\r])*)<\/title>/im;
        const headPattern = /<head[^>]*>((.|[\n\r])*)<\/head>/im;

        const title = titlePattern.exec(text)[1].trim();
        const bodyHTML = bodyPattern.exec(text)[1].trim();
        const headHTML = headPattern.exec(text)[1].trim();

        const htmlSource = stripScriptsFromSource(bodyHTML);
        const jsSource = getScriptFromSource(bodyHTML);
        const cssSource = getStyleFromSource(headHTML);

        setHtml(htmlSource);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [html]);

  return (
    <div className="p-code--snippet">
      <pre className="p-code-snippet__block u-no-margin language-html" data-lang="html">
        <code className="language-html">{html}</code>
      </pre>
    </div>
  );
};

// TODO: Move to a utils file
const stripScriptsFromSource = (source: string) => {
  var div = document.createElement('div');
  div.innerHTML = source;
  var scripts = div.getElementsByTagName('script');
  var i = scripts.length;
  while (i--) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  return div.innerHTML.trim();
};

const getScriptFromSource = (source: string) => {
  var div = document.createElement('div');
  div.innerHTML = source;
  var script = div.querySelector('script');
  return script ? script.innerHTML.trim() : null;
};

const getStyleFromSource = (source: string) => {
  var div = document.createElement('div');
  div.innerHTML = source;
  var style = div.querySelector('style');
  return style ? style.innerHTML.trim() : null;
};

export default Code;
