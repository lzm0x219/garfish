import 'isomorphic-fetch';
import { Sandbox } from '../src/sandbox';

describe('Init', () => {
  window.dispatchEvent = () => true;

  // Fetch methods auto fix base url
  it('fetch methods', (next) => {
    const sandbox = new Sandbox({
      namespace: 'vue',
      baseUrl: 'http://localhost:9999',
      fixBaseUrl: true,
    });
    const opts = sandbox.options;
    expect(opts.baseUrl).toEqual('http://localhost:9999');
    expect(opts.fixBaseUrl).toBe(true);
    sandbox.execScript(
      `
        window.fetch('sub/config.json')
        .catch(() => {})
        .finally(next);
      `,
      { next },
    );
    expect(sandbox.options.sourceList[0]).toMatchObject({
      tagName: 'fetch',
      url: 'http://localhost:9999/sub/config.json',
    });
  });

  // xhr methods auto fix base url
  it('xhr methods', () => {
    const sandbox = new Sandbox({
      namespace: 'react',
      baseUrl: 'http://localhost:9999',
      fixBaseUrl: false,
    });
    const opts = sandbox.options;
    expect(opts.baseUrl).toEqual('http://localhost:9999');
    expect(opts.fixBaseUrl).toBe(false);
    sandbox.execScript(`
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/sub/config.json', true);
      xhr.send();
    `);
    expect(sandbox.options.sourceList[0]).toMatchObject({
      tagName: 'xmlhttprequest',
      url: '/sub/config.json',
    });
  });
});
