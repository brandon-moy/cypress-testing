import Home from "./index";

describe("<Home /> Page", () => {
  context("1280p resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.mount(<Home />);
    });

    it("Should render welcome information", () => {
      cy.get("h1").contains("Welcome").should("be.visible");
      cy.get('a[href="https://nextjs.org"]').should("be.visible");
      cy.get("p").contains("Get started").should("be.visible");
    });

    it("Should render different link blocks", () => {
      cy.get("#about-link")
        .should("be.visible")
        .should("have.attr", "href", "/about");
      cy.get("h2").contains("About Page").should("be.visible");

      cy.get("#docs-link")
        .should("be.visible")
        .should("have.attr", "href", "https://nextjs.org/docs");
      cy.get("h2").contains("Documentation").should("be.visible");

      cy.get("#learn-link")
        .should("be.visible")
        .should("have.attr", "href", "https://nextjs.org/learn");
      cy.get("h2").contains("Learn").should("be.visible");

      cy.get("#examples-link")
        .should("be.visible")
        .should(
          "have.attr",
          "href",
          "https://github.com/vercel/next.js/tree/canary/examples"
        );
      cy.get("h2").contains("Examples").should("be.visible");

      cy.get("#deploy-link")
        .should("be.visible")
        .should(
          "have.attr",
          "href",
          "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        );

      cy.get("h2").contains("Deploy").should("be.visible");
    });
  });
});
