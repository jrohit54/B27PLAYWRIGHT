class DashboardPage {
    constructor(page) {
      this.page = page;
      this.pimMenu = page.getByRole('link', { name: 'PIM' });
    }
  
    async navigateToPIM() {
      await this.pimMenu.click();
    }
  }
  
  module.exports = DashboardPage;
  