<h1>VK</h1>
<p>This is a sample project to demonstrate the interworking of GraphQL and Headless CMS</p>
<a href="https://vkoutsky.github.io/vk/">Link to documentation</a>

<h2>First Steps</h2> 
<h3>Installation Strapi</h3>
<p>To install Strapi to your project run command</p>
<pre>npx create-strapi-app@latest my-project --quickstart</pre>
<p>Strapi is completely written in Typescript, therefore all types are already bundled within the package</p>

<h3>Installation GraphQL API</h3>
<p>To install GraphQL API to your project run command</p>
<pre>npm run strapi install graphql</pre>
<p>To install Apollo Client to your project run command</p>
<pre>npm install @apollo/client graphql</pre>


<h3>Installation React.js App</h3>
<p>To install Strapi to your project run command</p>
<pre>npx create—react—app project-name </pre>


<h3>Run local example</h3>
<p>To start your React.js application.</p>
<pre>npm start</pre>
<p>localhost will run on port :3000</p>
<p>To start your Strapi application with autoReload enabled.</p>
<pre>npm run develop</pre>
<p>localhost will run on port :1337</p>
<p>To check if GraphQL API is running on localhost</p>
<pre>http://localhost:1337/graphql</pre>
