# qwinn-gatsby

Gatsby app that composes the qwinn web application.

To begin:

To begin, in the root directory:

- Install node_modules by running "npm install".
- Run "npm run build-tw" to build tailwind styles.
- Run locally by with "npm run dev".

To deploy to production:

- Run "npm run build-tw" to build tailwind styles.
- Run "npm run deploy" which will kick off a gatsby build and then deploy it to the production branch (gh-pages).

Notes:

- To use the subscribe widget in development, you'll need to add the mailchimp api credentials locally in the root ".env.development" file.
- Node and Gatsby versions you are running can affect the ability to build, run, and deploy. Currently, be sure to use gatsby@5 and node@18.
- For HTTPS certification to be provided by Github, the "A" DNS providers with 4 associated IPs (e.g. 185.199.108.153 is for enabling Github's https) must be set as priority on the domain name provider's service.
- Production changes are currently set to be built from the public directory of the gh-pages branch.
