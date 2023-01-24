import PageHeader from "../../generics/PageHeader";

const NotFound404 = (): JSX.Element => (
  <PageHeader
    title="Oops, on dirait que cette page n'existe pas..."
    hasFadingEffect
  />
);

export default NotFound404;
