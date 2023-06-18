//your JS code here. If required.
let count = 0;
      let para = document.getElementById('counter');
      let btn = document.getElementById('incrementBtn');

      btn.addEventListener('click', () => {
        alert("Un-incremented value: " + count);
        count++;
        para.textContent = count;
      });

describe('Increment Counter', () => {
  it('should increment the counter and display the un-incremented value in an alert', () => {
    cy.visit('your-webpage-url');

    cy.get('#incrementBtn').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Un-incremented value: 0');
    });

    cy.get('#counter').should('have.text', '1');
  });
});
