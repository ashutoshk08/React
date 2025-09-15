#### In a multi-page application (Typical Website):

1. Every page is a separate HTML file on the server.
2. When you click on the link, browser makes a new HTTP request to the server and the server responds with a new HTML file.
3. Browser unloads the old page and renders the new one.

[Browser] --- request /home ---> [Server]
[Server] --- sends home.html ---> [Browser]

#### Problems in Multi-Page Application:

1. Full page reloads - This makes the app feel slow because:
   a. Header, Footer and other common sections reloads unnecessarily.
   b. More network requests - more waiting time
2. Slower Navigation
3. Poor User Experience - Reloading cause flickering/blinking on the screen and Forms lose their data if page reloads unexpectedly.
4. Code Duplication - Common parts like header, footer, etc. are repeated in every HTML page.
5. Server must send the complete HTML page for every route even if only 10% of content is changed. Therefore, more bandwidth consumption.

```javascript
<Routes>
  <Route></Route>
  <Route></Route>
  <Route></Route>
</Routes>
```

`<Routes>` contains 3 `<Route>` but at one time only one will executed where we wish to go.
Code inside `<Routes>` do not appear on the UI.

When path="/" implies what element to render when website opens.

#### Q. How can we create an nested path in routing?

> If you would have to create a nested element in HTML, how you would have do that? Wrap the inner element inside outer element, right?
> Similarly you do it while creating a nested path in routing. Define a new route element inside outer route element.
> For eg.

```javascript
<Route path="/about" element={<About />}>
  <Route index element={<Details />}></Route>
  <Route path="services" element={<Services />}></Route>
  <Route path="pricing" element={<Pricing />}></Route>
</Route>
```

#### Q. Why don't you provide "/" in the nested path?

> We do not use _/_ in nested paths because _/something_ starts searching the route from the root level. Then it is not seen as nested url.
> Absolute path starts with _/_ and relative path is relative to some path so that's why they are directly mentioned.
> The path of the parent is automatically included in the child. For eg. _/about/services_.
> Child routes are rendered through the `<Outlet/>` in the parent route.

#### Q. What is this index in the nested route?

> Suppose you have an component and you want to show it with the parent route. In such cases you use index attribute.
> Index routes render into their parent's `<Outlet/>` at their parent's URL (like a default child route).
> Index routes cannot have children.

**`<Outlet/>` manages which children route to render and where to render in the parent's page. Think of it like a placeholder for children route.**

---

`<Route path="/github/:username" element={<Github/>}></Route>`

> ":" anything written after colon(:) represents a dynamic segment. Whenever we write a url like _/github/ashutoshk08_, value in place of username will stored in the form of key-value pair like {username: "ashutoshk08"}. We can access this object through useParam() hooks.
> Therefore, useParams() allows us to dynamically create a route.
