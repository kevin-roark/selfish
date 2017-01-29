
export default function loadScripts(scripts, callback) {
  const srcs = Array.isArray(scripts) ? scripts : [scripts];

  let toLoad = srcs.length;
  function load(src) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    s.addEventListener('load', () => {
      toLoad -= 1;
      if (toLoad === 0) {
        if (callback) callback();
      }
    });

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(s);
  }

  srcs.forEach(load);
}
