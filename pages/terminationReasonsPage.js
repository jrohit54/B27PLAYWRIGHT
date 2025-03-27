class TerminationReasonsPage {
    constructor(page) {
      this.page = page;
      this.addButton = page.getByRole('button', { name: ' Add' });
      this.textbox = page.locator('form').getByRole('textbox');
      this.saveButton = page.getByRole('button', { name: 'Save' });
      this.terminationReasonsList = page.locator("//div[@class='oxd-table-row oxd-table-row--with-border']/div[2]/div");
    }
  
    async addTerminationReason(reason) {
      await this.addButton.click();
      await this.textbox.click();
      await this.textbox.press('ControlOrMeta+a');
      await this.textbox.fill(reason);
      await this.saveButton.click();
      await this.page.waitForURL('/web/index.php/pim/viewTerminationReasons');
    }
  
    async verifyTerminationReasonExists(reason) {
      await this.terminationReasonsList.first().waitFor({ state: 'visible' });
      const reasonElements = await this.terminationReasonsList.allTextContents();
      return reasonElements.some(text => text.trim() === reason);
    }
  }
  
  module.exports = TerminationReasonsPage;
  