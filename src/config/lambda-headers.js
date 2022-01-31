'use strict';
exports.handler = (event, context, callback) => {
  //Get contents of response
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  // Content Security Policy
  // const csp = [
  //   "default-src 'none'",
  //   "connect-src 'self' https://www.google-analytics.com https://googleads.g.doubleclick.net https://static.doubleclick.net",
  //   "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
  //   "img-src 'self' https://www.google-analytics.com https://www.gstatic.com https://ssl.gstatic.com",
  //   "script-src 'self' https://www.google.com https://www.gstatic.com",
  //   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  //   "object-src data: 'unsafe-eval'",
  // ];

  //Set new headers
  headers['strict-transport-security'] = [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubdomains; preload',
    },
  ];
  // headers['content-security-policy'] = [
  //   { key: 'Content-Security-Policy', value: csp.join(';') },
  // ];
  headers['x-content-type-options'] = [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
  ];
  headers['x-frame-options'] = [{ key: 'X-Frame-Options', value: 'DENY' }];
  headers['x-xss-protection'] = [
    { key: 'X-XSS-Protection', value: '1; mode=block' },
  ];
  headers['referrer-policy'] = [
    { key: 'Referrer-Policy', value: 'same-origin' },
  ];

  //Return modified response
  callback(null, response);
};
