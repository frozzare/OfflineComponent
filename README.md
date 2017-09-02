This is a simple React component wrapper that allows you to specify a component that will be shown if the application loses network connection. It makes an AJAX request for the favicon to determine your connection.

Example usage:

```
const Offline = () => <p>Your connection is not stable, please try again later</p>;

const Header = () => (
  <header>
    <h1>Brand</h1>
    <OfflineComponent interval={10000} offlineComponent={Offline}>
      <p>Description text</p>
    </OfflineComponent>
  </header>
)
```

The interval prop specifies how often the favicon will be queried in milliseconds. If omitted, it detaults to 5000ms.
