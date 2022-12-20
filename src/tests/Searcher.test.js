/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import Searcher from "../components/Searcher";

const renderSearcher = () => {
  const buscador = render(<Searcher />);

  return buscador;
};

describe("<Searcher/>", () => {
  test("se renderiza Searcher", () => {
    const searcher = renderSearcher();

    expect(searcher.container).toBeInTheDocument();
  });

  test("Searcher contiene input", () => {
    const searcher = renderSearcher();
    const input = searcher.getByRole("input");

    expect(input).toBeInTheDocument();
  });

  test("se puede deshabilitar Boton", async () => {
    const searcher = renderSearcher();

    const button = searcher.getByRole("button");
    expect(button).toBeDisabled();
  });
});
