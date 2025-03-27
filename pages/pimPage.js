class PimPage {
    constructor(page) {
      this.page = page;
      this.configurationMenu = page.getByText('Configuration');
      this.terminationReasonsMenu = page.getByRole('menuitem', { name: 'Termination Reasons' });
    }
  
    async navigateToTerminationReasons() {
      await this.configurationMenu.click();
      await this.terminationReasonsMenu.click();
    }
  }
  
  module.exports = PimPage;
  