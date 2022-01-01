describe("Game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Winner: X", () => {
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(0).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(4).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(1).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(5).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(2).click();

    cy.get("[data-cy=status]").should("have.text", "Winner: X");
  });

  it("Winner: O", () => {
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(0).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(4).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(1).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(2).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(3).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(6).click();

    cy.get("[data-cy=status]").should("have.text", "Winner: O");
  });

  it("Draw!", () => {
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(0).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(1).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(2).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(3).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(4).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(6).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(7).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: O");

    cy.get("[data-cy=square]").eq(8).click();
    cy.get("[data-cy=status]").should("have.text", "次のプレイヤー: X");

    cy.get("[data-cy=square]").eq(5).click();

    cy.get("[data-cy=status]").should("have.text", "Draw!");
  });
});
