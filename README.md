This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## TOPICS

- Routes
- Rendering SSG and SSR
- API handling
- Styling
- Misceallneous
  - image
  - HTML export
  - TypeScript Support
  - Layout
- Authentication
- Deployment

Next Export: Export our application from Nextjs to static HTML.
Add next eport to your application by adding a command in package.json
`"export": "next build && next export"`

The application would export your Nextjs app into a static HTML page when you run
`npm run export`

### Limitation

- You can't export appliation with getServerSideProps
- You can't export an application with ISR Incremental Server rendering
- You can't export an application without a getStaticPaths when you use getStaticProps (GetStaticProps is allowed but not without getStaticPaths and Fallback has to be set to True)
- You can't use the Image tag from next/Image.

## TypeScript Support

- Add tsconfig to replace jsconfig in the root folder
- Run `npm run dev` to restart the server
- You tsconfig would be automatically populated
- If you use baseURL or path alise, youll need to uodate it in your
  `tsconfg.json file`

  Next-auth
  Recommended way is to use Next-auth.js.org.
  Social Login
  Conventional Password
  Support Login with Database like MongoDB

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
